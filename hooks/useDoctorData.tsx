'use client'
import { useEffect, useCallback, useRef } from 'react';
import { useDoctorStore } from '@/stores/doctorStore';

export async function fetchDoctors() {
  try {
    const response = await fetch('/api/doctors');
    
    if (!response.ok) {
      throw new Error('Failed to fetch doctors');
    }
    
    const data = await response.json();
    return data; // The API returns the doctors array directly
  } catch (error) {
    console.error('Error fetching doctors:', error);
    return [];
  }
}

export function useDoctorData() {
  const { doctors, setDoctors, setLoading, isLoading } = useDoctorStore();
  const initialFetchCompleted = useRef(false);
  
  // Create a refetch function that can be called after adding a doctor
  const refetchDoctors = useCallback(async () => {
    setLoading(true);
    try {
      const fetchedDoctors = await fetchDoctors();
      setDoctors(fetchedDoctors || []);
      initialFetchCompleted.current = true;
    } finally {
      setLoading(false);
    }
  }, [setDoctors, setLoading]);
  
  useEffect(() => {
    // Only fetch if we haven't fetched yet and not currently loading
    if (!initialFetchCompleted.current && !isLoading) {
      refetchDoctors();
    }
  }, [refetchDoctors, isLoading]);
  
  return { refetchDoctors };
} 