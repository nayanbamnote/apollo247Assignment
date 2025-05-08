import DoctorListing from "@/components/DoctorListing/DoctorListing";
import FilterSidebar from "@/components/FilterSidebar";


export default function Home() {
  return (
    <div className="min-h-screen">

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 py-8">
          {/* Sidebar - fixed on larger screens, takes 1/4 of the space */}
          <div className="w-full md:w-1/4 flex-shrink-0">
            <FilterSidebar />
          </div>
          
          {/* Main content area - takes 3/4 of the space */}
          <div className="w-full md:w-3/4 flex-grow">
            <DoctorListing />
          </div>
        </div>
      </div>
    </div>
  );
}
