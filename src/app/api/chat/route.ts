import { NextResponse } from "next/server";

export async function GET() {

    const messages = [
        {   
            title: "Hello",
            content: "Hello, how are you?",
            slug: "hello",
        },
        {   
            title: "Good",
            content: "I'm good, how are you?",
            slug: "good",
        },
    ];

    return NextResponse.json({data: messages}, { status: 200}); 
}