import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { consultationLeads } from '@/db/schema';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, phoneNumber, email, dob, tob, pob, objective } = body;

    // Validate required fields
    if (!fullName || !phoneNumber || !dob || !tob || !pob || !objective) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Insert into database
    await db.insert(consultationLeads).values({
      fullName,
      phoneNumber,
      email: email || null,
      dob: new Date(dob),
      tob,
      pob,
      objective,
      status: 'PENDING'
    });

    return NextResponse.json(
      { message: 'Consultation request submitted successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting consultation:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
