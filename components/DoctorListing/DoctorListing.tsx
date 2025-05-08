'use client'
import React from 'react'
import ListingHeader from './components/ListingHeader'
import DoctorCard from './components/DoctorCard'
import { useDoctorStore } from '@/stores/doctorStore'
import { useDoctorData } from '@/hooks/useDoctorData'
import { Skeleton } from '../ui/skeleton'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination"

const DoctorListing = () => {
  // Initialize data fetching with refetch function
  const { refetchDoctors } = useDoctorData()
  
  // Get doctors, pagination and loading state from store
  const { paginatedDoctors, isLoading, pagination, setPage } = useDoctorStore()
  const { currentPage, totalPages } = pagination

  // Create pagination links
  const renderPaginationLinks = () => {
    const links = []
    const maxVisiblePages = 3 // Number of page numbers to show before using ellipsis
    
    // Always show page 1
    links.push(
      <PaginationItem key="page-1">
        <PaginationLink 
          href="#" 
          isActive={currentPage === 1}
          onClick={(e) => {
            e.preventDefault()
            setPage(1)
          }}
        >
          1
        </PaginationLink>
      </PaginationItem>
    )
    
    // Add ellipsis if needed
    if (currentPage > maxVisiblePages) {
      links.push(
        <PaginationItem key="ellipsis-1">
          <PaginationEllipsis />
        </PaginationItem>
      )
    }
    
    // Add pages around current page
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      if (i === 1 || i === totalPages) continue // Skip 1 and totalPages as they're always shown
      
      links.push(
        <PaginationItem key={`page-${i}`}>
          <PaginationLink 
            href="#" 
            isActive={currentPage === i}
            onClick={(e) => {
              e.preventDefault()
              setPage(i)
            }}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      )
    }
    
    // Add ellipsis if needed
    if (currentPage < totalPages - maxVisiblePages + 1 && totalPages > maxVisiblePages + 1) {
      links.push(
        <PaginationItem key="ellipsis-2">
          <PaginationEllipsis />
        </PaginationItem>
      )
    }
    
    // Always show last page if more than 1 page
    if (totalPages > 1) {
      links.push(
        <PaginationItem key={`page-${totalPages}`}>
          <PaginationLink 
            href="#" 
            isActive={currentPage === totalPages}
            onClick={(e) => {
              e.preventDefault()
              setPage(totalPages)
            }}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      )
    }
    
    return links
  }

  return (
    <div className="min-h-screen w-full">
      <ListingHeader />

      {/* Doctor Cards */}
      <div className="space-y-4 my-6">
        {isLoading ? (
          // Show loading skeletons
          Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="w-full h-40 rounded-md">
              <Skeleton className="h-full w-full" />
            </div>
          ))
        ) : paginatedDoctors.length > 0 ? (
          // Map doctors to cards
          paginatedDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              name={doctor.name}
              degrees={doctor.degrees}
              experienceYears={doctor.experienceYears}
              location={doctor.location}
              clinicName={doctor.clinicName}
              facilities={doctor.facilities}
              rating={doctor.rating}
              patientsTreated={doctor.patientsTreated}
              consultationFee={doctor.consultationFee}
              availability="15 mins"
              profileImageUrl={doctor.profileImageUrl}
            />
          ))
        ) : (
          // No doctors found
          <div className="text-center py-10">
            <h3 className="text-xl font-medium text-gray-700">No doctors found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your filters</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {!isLoading && paginatedDoctors.length > 0 && totalPages > 1 && (
        <Pagination className="my-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                href="#" 
                onClick={(e) => {
                  e.preventDefault()
                  if (currentPage > 1) setPage(currentPage - 1)
                }}
                className={currentPage <= 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
            
            {renderPaginationLinks()}
            
            <PaginationItem>
              <PaginationNext 
                href="#" 
                onClick={(e) => {
                  e.preventDefault()
                  if (currentPage < totalPages) setPage(currentPage + 1)
                }}
                className={currentPage >= totalPages ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  )
}

export default DoctorListing