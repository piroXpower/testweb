import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { goldSchemeEnrollments } from '@/db/schema';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, phoneNumber, email, monthlyAmount, duration } = body;

    if (!fullName || !phoneNumber || !monthlyAmount || !duration) {
      return NextResponse.json(
        { error: 'Missing required enrollment parameters' },
        { status: 400 }
      );
    }

    await db.insert(goldSchemeEnrollments).values({
      fullName,
      phoneNumber,
      email: email || null,
      schemeType: 'Swarna Bachat Yojana (11+1)',
      monthlyAmount: Number(monthlyAmount),
      duration: Number(duration),
      status: 'INQUIRY'
    });

    return NextResponse.json(
      { message: 'Gold scheme enrollment registered successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error in gold scheme registration:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
