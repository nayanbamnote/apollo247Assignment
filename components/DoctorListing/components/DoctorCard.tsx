import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

// Define the Facility enum to replace the Prisma import
export enum Facility {
  APOLLO_HOSPITAL = "APOLLO_HOSPITAL",
  OTHER_CLINICS = "OTHER_CLINICS"
}

interface DoctorCardProps {
    name: string;
    degrees: string;             
    experienceYears: number;    
    location: string;
    clinicName: string;        
    facilities: Facility[];
    rating: number;
    patientsTreated: number;    
    consultationFee: number;     
    availability: string;         
    profileImageUrl: string;      
  }

export default function DoctorCard({
  name,
  degrees,
  experienceYears,
  location,
  clinicName,
  facilities,
  rating,
  patientsTreated,
  consultationFee,
  availability,
  profileImageUrl,
}: DoctorCardProps) {
  return (
    <Card className=" max-w-full md:max-w-[800px]">
      <CardContent className="flex w-full p-4">
      <Avatar className="h-24 w-24">
          <AvatarImage src={profileImageUrl} alt={name} />
        </Avatar>
        <div className="flex flex-1 flex-col md:flex-row items-start md:items-center justify-between pl-4">
        {/* Left details */}
        <div className="space-y-1">
          <h3 className="text-lg font-semibold flex items-center">
            {name}
            <span className="ml-2 text-gray-400 text-sm">General Practitioner</span>
          </h3>
          <div className="text-sm font-medium text-violet-600">
            {experienceYears} • {degrees}
          </div>
          <div className="text-sm text-gray-600">
            {location}
          </div>
          <div className="flex text-sm text-gray-600">
  {Array.isArray(facilities) && facilities.length > 0
    ? facilities.join(", ")
    : "No Facility"}{" "}
  | {clinicName}
</div>


          <div className="flex items-center text-sm">
            <span className="font-semibold text-green-600">{Math.round(rating * 100)}%</span>
            <span className="ml-1 text-gray-500">({patientsTreated}+ Patients)</span>
          </div>
        </div>
        {/* Right action */}
        <div className="mt-4 md:mt-0 md:ml-4 flex flex-col items-end space-y-2">
          <div className="text-xl font-bold">₹{consultationFee}</div>
          <Button variant="outline" className="w-48">
            <div className="flex flex-col">
              <span>Consult Online</span>
              <span className="text-xs text-gray-500">Available in {availability}</span>
            </div>
          </Button>
        </div>
        </div>
      </CardContent>
    </Card>
  );
}
