import { NextRequest, NextResponse } from 'next/server';
import { PineconeClient } from '@pinecone-database/pinecone'
import { queryPineconeVectorStoreAndQueryLLM } from '@/utils/chatUtils';
import { indexName } from '../../../../chat-config';

export async function POST(req: NextRequest) {
    const body = await req.json()
    const client = new PineconeClient()
    await client.init({
        apiKey: process.env.PINECONE_API_KEY || '',
        environment: process.env.PINECONE_ENVIRONMENT || '',
    })
    const text = await queryPineconeVectorStoreAndQueryLLM(client, indexName, body)
    return NextResponse.json({
        data: text
    })
}