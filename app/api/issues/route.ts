import { NextRequest, NextResponse } from "next/server";
import {z} from 'zod'
import prisma from "@/prisma/client";

const createTicketSchema = z.object({
    title: z.string().min(3, 'Title is required').max(255),
    description: z.string().min(5, 'Description is required')
})

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = createTicketSchema.safeParse(body);

    if(!validation.success)
        return NextResponse.json(validation.error.format(), {status: 400});

    const newTicket = await prisma.ticket.create({
        data: {title: body.title, description: body.description}
    });

    return NextResponse.json(newTicket, {status: 201});
}