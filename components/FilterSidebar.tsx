"use client"
import React from 'react';
import Link from 'next/link';
import { useDoctorStore } from '@/stores/doctorStore';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  CONSULT_MODES, 
  EXPERIENCE_RANGES, 
  FEE_RANGES, 
  LANGUAGES, 
  FACILITIES 
} from '@/constants/filterOptions';

export default function FilterSidebar() {
  const { filters, setFilter, clearFilters } = useDoctorStore();

  const handleFilterChange = (
    key: 'modesOfConsult' | 'experienceRange' | 'feeRanges' | 'languages' | 'facilities',
    value: string,
    checked: boolean
  ) => {
    const currentValues = filters[key] as string[];
    let newValues;
    
    if (checked) {
      newValues = [...currentValues, value];
    } else {
      newValues = currentValues.filter(v => v !== value);
    }
    
    setFilter(key, newValues);
  };

  // Define filter sections for DRY code
  const filterSections = [
    {
      title: 'Mode of Consult',
      key: 'modesOfConsult',
      options: CONSULT_MODES,
    },
    {
      title: 'Experience (In Years)',
      key: 'experienceRange',
      options: EXPERIENCE_RANGES,
      showMore: true,
    },
    {
      title: 'Fees (In Rupees)',
      key: 'feeRanges',
      options: FEE_RANGES,
    },
    {
      title: 'Language',
      key: 'languages',
      options: LANGUAGES,
      showMore: true,
    },
    {
      title: 'Facility',
      key: 'facilities',
      options: FACILITIES,
    },
  ];

  return (
    <div className="!sticky top-[150px]">
      {/* Header */}
      <div className="flex justify-between items-center w-full pr-3 mb-2">
        <p className="font-semibold text-base text-[#121414]">Filters</p>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={clearFilters}
          className="p-0 h-auto text-[#106C89] font-semibold hover:bg-transparent hover:text-[#3D88A0]"
        >
          Clear All
        </Button>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-[#E7E7E5] mb-4" />

      {/* ScrollArea with proper implementation */}
      <ScrollArea className="h-[500px] rounded-md">
        <div className="pr-4">
          <Link
            href="https://www.apollo247.com/specialties/general-physician-internal-medicine?filterObject=%7B%22facilityType%22%3A%5B%22HOSPITAL%22%5D%7D&sortby=distance"
            className="border-[0.8px] border-[#106C89] text-[#106C89] flex items-center justify-center h-8 text-xs font-bold rounded-lg whitespace-nowrap no-underline mb-4"
          >
            Show Doctors Near Me
          </Link>

          {/* Filter Sections */}
          <div className="space-y-6">
            {filterSections.map((section) => (
              <div key={section.key} className="space-y-2">
                <p className="font-semibold text-base text-[#121414]">
                  {section.title}
                </p>
                <div className="flex flex-col gap-3 pl-2">
                  {section.options.slice(0, 3).map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`${section.key}-${option.id}`}
                        checked={(filters[section.key as keyof typeof filters] as string[]).includes(option.id)}
                        onCheckedChange={(checked: boolean | "indeterminate") => 
                          handleFilterChange(section.key as any, option.id, checked === true)
                        }
                      />
                      <label 
                        htmlFor={`${section.key}-${option.id}`}
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                  
                  {section.showMore && section.options.length > 3 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-0 h-auto text-[#106C89] font-semibold w-fit hover:bg-transparent hover:text-[#3D88A0]"
                    >
                      +{section.options.length - 3} More
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="pb-4"></div> {/* Padding at the bottom for better scrolling experience */}
        </div>
      </ScrollArea>
    </div>
  );
}
