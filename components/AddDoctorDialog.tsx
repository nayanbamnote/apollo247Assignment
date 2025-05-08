"use client"

import { useState } from 'react';
import { 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useDoctorData } from '@/hooks/useDoctorData';

export default function AddDoctorDialog() {
  const { refetchDoctors } = useDoctorData();
  const [formData, setFormData] = useState({
    name: '',
    profileImageUrl: '',
    degrees: '',
    specialization: '',
    experienceYears: '',
    consultationFee: '',
    location: '',
    clinicName: '',
    rating: '0.0',
    patientsTreated: '0',
    noBookingFees: true,
    modesOfConsult: [] as string[],
    languages: [] as string[],
    facilities: [] as string[]
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };
  
  const handleMultiSelectChange = (name: string, value: string, checked: boolean) => {
    setFormData(prev => {
      const currentValues = prev[name as keyof typeof prev] as string[];
      if (checked) {
        return { ...prev, [name]: [...currentValues, value] };
      } else {
        return { ...prev, [name]: currentValues.filter(v => v !== value) };
      }
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const response = await fetch('/api/doctors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          experienceYears: parseInt(formData.experienceYears),
          consultationFee: parseInt(formData.consultationFee),
          rating: parseFloat(formData.rating),
          patientsTreated: parseInt(formData.patientsTreated),
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to add doctor');
      }
      
      // Reset form
      setFormData({
        name: '',
        profileImageUrl: '',
        degrees: '',
        specialization: '',
        experienceYears: '',
        consultationFee: '',
        location: '',
        clinicName: '',
        rating: '0.0',
        patientsTreated: '0',
        noBookingFees: true,
        modesOfConsult: [],
        languages: [],
        facilities: []
      });
      
      // Refetch doctors to update the listing
      await refetchDoctors();
      
      // Close dialog (handled by the dialog itself)
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <DialogContent className="sm:max-w-[600px]">
      <DialogHeader>
        <DialogTitle>Add New Doctor</DialogTitle>
        <DialogDescription>
          Fill in the details to add a new doctor to the database.
        </DialogDescription>
      </DialogHeader>
      
      <form onSubmit={handleSubmit} className="grid gap-4 py-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="profileImageUrl" className="text-sm font-medium">
              Profile Image URL
            </label>
            <Input
              id="profileImageUrl"
              name="profileImageUrl"
              value={formData.profileImageUrl}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="degrees" className="text-sm font-medium">
              Degrees
            </label>
            <Input
              id="degrees"
              name="degrees"
              value={formData.degrees}
              onChange={handleInputChange}
              required
              placeholder="MBBS, MD"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="specialization" className="text-sm font-medium">
              Specialization
            </label>
            <Input
              id="specialization"
              name="specialization"
              value={formData.specialization}
              onChange={handleInputChange}
              required
              placeholder="General Physician"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="experienceYears" className="text-sm font-medium">
              Experience (Years)
            </label>
            <Input
              id="experienceYears"
              name="experienceYears"
              type="number"
              value={formData.experienceYears}
              onChange={handleInputChange}
              required
              min="0"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="consultationFee" className="text-sm font-medium">
              Consultation Fee (₹)
            </label>
            <Input
              id="consultationFee"
              name="consultationFee"
              type="number"
              value={formData.consultationFee}
              onChange={handleInputChange}
              required
              min="0"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="location" className="text-sm font-medium">
              Location
            </label>
            <Input
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="clinicName" className="text-sm font-medium">
              Clinic Name
            </label>
            <Input
              id="clinicName"
              name="clinicName"
              value={formData.clinicName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Modes of Consultation</label>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="mode-physical"
                  checked={formData.modesOfConsult.includes('PHYSICAL')}
                  onCheckedChange={(checked) => 
                    handleMultiSelectChange('modesOfConsult', 'PHYSICAL', checked === true)
                  }
                />
                <label htmlFor="mode-physical" className="text-sm">Physical</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="mode-online"
                  checked={formData.modesOfConsult.includes('ONLINE')}
                  onCheckedChange={(checked) => 
                    handleMultiSelectChange('modesOfConsult', 'ONLINE', checked === true)
                  }
                />
                <label htmlFor="mode-online" className="text-sm">Online</label>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Languages</label>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="lang-english"
                  checked={formData.languages.includes('ENGLISH')}
                  onCheckedChange={(checked) => 
                    handleMultiSelectChange('languages', 'ENGLISH', checked === true)
                  }
                />
                <label htmlFor="lang-english" className="text-sm">English</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="lang-hindi"
                  checked={formData.languages.includes('HINDI')}
                  onCheckedChange={(checked) => 
                    handleMultiSelectChange('languages', 'HINDI', checked === true)
                  }
                />
                <label htmlFor="lang-hindi" className="text-sm">Hindi</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="lang-telugu"
                  checked={formData.languages.includes('TELUGU')}
                  onCheckedChange={(checked) => 
                    handleMultiSelectChange('languages', 'TELUGU', checked === true)
                  }
                />
                <label htmlFor="lang-telugu" className="text-sm">Telugu</label>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Facilities</label>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="facility-apollo"
                  checked={formData.facilities.includes('APOLLO_HOSPITAL')}
                  onCheckedChange={(checked) => 
                    handleMultiSelectChange('facilities', 'APOLLO_HOSPITAL', checked === true)
                  }
                />
                <label htmlFor="facility-apollo" className="text-sm">Apollo Hospital</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="facility-other"
                  checked={formData.facilities.includes('OTHER_CLINICS')}
                  onCheckedChange={(checked) => 
                    handleMultiSelectChange('facilities', 'OTHER_CLINICS', checked === true)
                  }
                />
                <label htmlFor="facility-other" className="text-sm">Other Clinics</label>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="noBookingFees"
                checked={formData.noBookingFees}
                onCheckedChange={(checked) => 
                  handleCheckboxChange('noBookingFees', checked === true)
                }
              />
              <label htmlFor="noBookingFees" className="text-sm">No Booking Fees</label>
            </div>
          </div>
        </div>
        
        {error && <p className="text-sm text-red-500">{error}</p>}
        
        <DialogFooter>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Adding...' : 'Add Doctor'}
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
} 