import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { ConsultMode, Language, Facility } from '@/constants/filterOptions';


export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate required fields
    const requiredFields = [
      'name', 'profileImageUrl', 'degrees', 'specialization', 
      'experienceYears', 'consultationFee', 'location', 'clinicName'
    ];
    
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { message: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }
    
    // Process and validate enum arrays
    const modesOfConsult = data.modesOfConsult?.filter((mode: string) => 
      Object.values(ConsultMode).includes(mode as ConsultMode)
    ) as ConsultMode[];
    
    const languages = data.languages?.filter((lang: string) => 
      Object.values(Language).includes(lang as Language)
    ) as Language[];
    
    const facilities = data.facilities?.filter((facility: string) => 
      Object.values(Facility).includes(facility as Facility)
    ) as Facility[];
    
    // Create the doctor record
    const doctor = await prisma.doctor.create({
      data: {
        name: data.name,
        profileImageUrl: data.profileImageUrl,
        degrees: data.degrees,
        specialization: data.specialization,
        experienceYears: data.experienceYears,
        consultationFee: data.consultationFee,
        noBookingFees: data.noBookingFees ?? true,
        location: data.location,
        clinicName: data.clinicName,
        rating: data.rating ?? 0.0,
        patientsTreated: data.patientsTreated ?? 0,
        modesOfConsult: modesOfConsult,
        languages: languages,
        facilities: facilities,
      },
    });
    
    return NextResponse.json(doctor, { status: 201 });
  } catch (error) {
    console.error('Failed to create doctor:', error);
    return NextResponse.json(
      { message: 'Failed to create doctor', error: (error as Error).message },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function GET() {
  try {
    const doctors = await prisma.doctor.findMany({
      orderBy: {
        name: 'asc'
      }
    });
    
    return NextResponse.json(doctors);
  } catch (error) {
    console.error('Failed to fetch doctors:', error);
    return NextResponse.json(
      { message: 'Failed to fetch doctors' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
