import React from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { useDoctorStore } from '@/stores/doctorStore';
import { SORT_OPTIONS } from '@/constants/filterOptions';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@/components/ui/breadcrumb';

interface Crumb {
  href: string;
  label: string;
  disabled?: boolean;
}

const ListingHeader = () => {
  const { setSortOption, filteredDoctors, sortOption } = useDoctorStore();
  const crumbs: Crumb[] = [
    { href: '/', label: 'Home' },
    { href: '/specialties', label: 'Doctors' },
    { href: '', label: 'General Physicians', disabled: true },
  ];

  const handleSortChange = (value: string) => {
    const selectedOption = SORT_OPTIONS.find(
      (option) => `${option.field}_${option.direction}` === value
    );
    
    if (selectedOption) {
      setSortOption({
        field: selectedOption.field as any,
        direction: selectedOption.direction as 'asc' | 'desc',
      });
    }
  };

  // Get current sort value
  const currentSortValue = `${sortOption.field}_${sortOption.direction}`;

  return (
    <div className="space-y-4">
      {/* Breadcrumb */}
      <Breadcrumb>
        {crumbs.map((crumb, idx) => (
          <BreadcrumbItem key={idx}>
            <BreadcrumbLink 
              href={crumb.href} 
            >
              {crumb.label}{"> "}
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>

      {/* Header with sort */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
        <h1 className="flex flex-wrap items-baseline gap-x-4 text-2xl font-bold text-[#121414]">
          Consult General Physicians Online - Internal Medicine Specialists
          <span className="text-base font-normal">({filteredDoctors.length} doctors)</span>
        </h1>

        <div className="relative w-full lg:w-[300px] bg-white">
          <Select 
            defaultValue={currentSortValue} 
            onValueChange={handleSortChange}
          >
            <SelectTrigger className="w-full h-[52px] bg-white text-base">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {SORT_OPTIONS.map((option) => (
                  <SelectItem 
                    className="bg-white"
                    key={`${option.field}_${option.direction}`} 
                    value={`${option.field}_${option.direction}`}
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default ListingHeader;