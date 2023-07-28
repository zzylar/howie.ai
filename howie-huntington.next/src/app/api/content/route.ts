import { NextResponse } from 'next/server';

// Dummy data
const posts = [
    {
      title: "First Post",
      slug: "first-post",
      content: "This is the content of the first post."
    },
    {
      title: "Second Post",
      slug: "second-post",
      content: "This is the content of the second post."
    },
    {
      title: "Third Post",
      slug: "third-post",
      content: "This is the content of the third post."
    }
  ];

export async function GET() {
  return NextResponse.json(posts);
}