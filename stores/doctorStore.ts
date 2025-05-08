import { create } from 'zustand';
import { ConsultMode, Facility, Language } from '@/constants/filterOptions';

// Define Doctor interface to replace Prisma import
interface Doctor {
  id: number;
  name: string;
  profileImageUrl: string;
  degrees: string;
  specialization: string;
  experienceYears: number;
  consultationFee: number;
  noBookingFees: boolean;
  location: string;
  clinicName: string;
  availableAt?: Date;
  rating: number;
  patientsTreated: number;
  modesOfConsult: ConsultMode[];
  languages: Language[];
  facilities: Facility[];
}

interface FilterOptions {
  modesOfConsult: ConsultMode[];
  experienceRange: string[];
  feeRanges: string[];
  languages: Language[];
  facilities: Facility[];
}

interface SortOption {
  field: 'consultationFee' | 'experienceYears' | 'rating';
  direction: 'asc' | 'desc';
}

interface PaginationState {
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
}

interface DoctorStore {
  doctors: Doctor[];
  filteredDoctors: Doctor[];
  paginatedDoctors: Doctor[];
  isLoading: boolean;
  filters: FilterOptions;
  sortOption: SortOption;
  pagination: PaginationState;
  
  // Actions
  setDoctors: (doctors: Doctor[]) => void;
  setLoading: (isLoading: boolean) => void;
  setFilter: (key: keyof FilterOptions, value: any) => void;
  clearFilters: () => void;
  setSortOption: (option: SortOption) => void;
  setPage: (page: number) => void;
  applyFilters: () => void;
  applyPagination: () => void;
}

const initialFilters: FilterOptions = {
  modesOfConsult: [],
  experienceRange: [],
  feeRanges: [],
  languages: [],
  facilities: [],
};

const initialSortOption: SortOption = {
  field: 'consultationFee',
  direction: 'asc',
};

const initialPagination: PaginationState = {
  currentPage: 1,
  itemsPerPage: 5,
  totalPages: 1,
};

export const useDoctorStore = create<DoctorStore>((set, get) => ({
  doctors: [],
  filteredDoctors: [],
  paginatedDoctors: [],
  isLoading: false,
  filters: initialFilters,
  sortOption: initialSortOption,
  pagination: initialPagination,

  // Actions
  setDoctors: (doctors) => {
    set({ doctors: doctors || [] });
    get().applyFilters();
  },
  
  setLoading: (isLoading) => set({ isLoading }),
  
  setFilter: (key, value) => {
    set((state) => ({
      filters: {
        ...state.filters,
        [key]: value,
      },
      pagination: {
        ...state.pagination,
        currentPage: 1, // Reset to first page when filters change
      }
    }));
    get().applyFilters();
  },
  
  clearFilters: () => {
    set({ 
      filters: initialFilters,
      pagination: {
        ...get().pagination,
        currentPage: 1,
      }
    });
    get().applyFilters();
  },
  
  setSortOption: (option) => {
    set({ sortOption: option });
    get().applyFilters();
  },
  
  setPage: (page) => {
    set(state => ({
      pagination: {
        ...state.pagination,
        currentPage: page
      }
    }));
    get().applyPagination();
  },
  
  applyFilters: () => {
    const { doctors, filters, sortOption } = get();
    
    // Apply filters
    // Ensure doctors is an array before spreading
    let filtered = Array.isArray(doctors) ? [...doctors] : [];
    
    // Only proceed with filtering if we have doctors
    if (filtered.length > 0) {
      // Filter by consultation mode
      if (filters.modesOfConsult.length > 0) {
        filtered = filtered.filter(doctor => 
          filters.modesOfConsult.some(mode => 
            doctor.modesOfConsult && doctor.modesOfConsult.includes(mode)
          )
        );
      }
      
      // Filter by experience range
      if (filters.experienceRange.length > 0) {
        filtered = filtered.filter(doctor => {
          return filters.experienceRange.some(range => {
            const [min, max] = range.split('-').map(Number);
            return doctor.experienceYears >= min && (max ? doctor.experienceYears <= max : true);
          });
        });
      }
      
      // Filter by fee range
      if (filters.feeRanges.length > 0) {
        filtered = filtered.filter(doctor => {
          return filters.feeRanges.some(range => {
            const parts = range.replace('+', '-9999').split('-').map(Number);
            const min = parts[0];
            const max = parts[1];
            return doctor.consultationFee >= min && doctor.consultationFee <= max;
          });
        });
      }
      
      // Filter by languages
      if (filters.languages.length > 0) {
        filtered = filtered.filter(doctor => 
          filters.languages.some(lang => 
            doctor.languages && doctor.languages.includes(lang)
          )
        );
      }
      
      // Filter by facilities
      if (filters.facilities.length > 0) {
        filtered = filtered.filter(doctor => 
          filters.facilities.some(facility => 
            doctor.facilities && doctor.facilities.includes(facility)
          )
        );
      }
      
      // Apply sorting
      filtered.sort((a, b) => {
        const fieldA = a[sortOption.field];
        const fieldB = b[sortOption.field];
        
        if (sortOption.direction === 'asc') {
          return fieldA > fieldB ? 1 : -1;
        } else {
          return fieldA < fieldB ? 1 : -1;
        }
      });
    }
    
    // Calculate total pages
    const totalPages = Math.max(1, Math.ceil(filtered.length / get().pagination.itemsPerPage));
    
    set({ 
      filteredDoctors: filtered,
      pagination: {
        ...get().pagination,
        totalPages
      }
    });
    
    // Apply pagination after filters
    get().applyPagination();
  },
  
  applyPagination: () => {
    const { filteredDoctors, pagination } = get();
    const { currentPage, itemsPerPage } = pagination;
    
    // Make sure filteredDoctors is an array
    const doctors = Array.isArray(filteredDoctors) ? filteredDoctors : [];
    
    // Calculate pagination indexes
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    // Get doctors for current page
    const paginatedDoctors = doctors.slice(startIndex, endIndex);
    
    set({ paginatedDoctors });
  }
})); 