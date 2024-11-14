import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';// Adjust this path if necessary

export async function POST(request) {
    try {
        const body = await request.json();
        const client = await clientPromise;
        const db = client.db('bittree');
        const collection = db.collection('loginuser');

        const result = await collection.insertOne(body);

        return NextResponse.json({
            success: true,
            error: false,
            result,
            message: "Login Successfully!"
        });
    } catch (error) {
        console.error("Error in POST handler:", error);
        return NextResponse.json({
            success: false,
            error: true,
            message: "An error occurred while logging in."
        }, { status: 500 });
    }
}
