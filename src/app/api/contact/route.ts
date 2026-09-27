import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { contactInquiries } from '@/db/schema';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, phoneNumber, email, subject, message } = body;

    if (!fullName || !phoneNumber || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    await db.insert(contactInquiries).values({
      fullName,
      phoneNumber,
      email: email || null,
      subject,
      message,
      status: 'NEW'
    });

    return NextResponse.json(
      { message: 'Contact inquiry submitted successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
