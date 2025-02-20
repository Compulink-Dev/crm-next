import db from "@/lib/db";
import { NextResponse } from "next/server";

//@ts-ignore
export async function GET(request: Request, { params: { id } }) {
    try {

        const purchaseReport = await db.purchaseReport.findUnique({
            where: {
                id
            }
        })

        return NextResponse.json(purchaseReport)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to create purchaseReport"
        },
            { status: 500 }
        )
    }
}

//@ts-ignore
export async function PUT(request: Request, { params: { id } }) {
    try {
        const data = await request.json()
        const purchaseReport = await db.purchaseReport.update({
            where: {
                id
            },
            data: {
                user: data.user,
                name: data.name,
                date: data.date,
                creditName: data.creditName,
                quantity: parseInt(data.quantity),
                price: parseFloat(data.price),
                description: data.description,
                technician: data.technician,
                paymentType: data.paymentType,
                attachment: data.attachment,
                status: data.status,
                createdAt: data.createdAt
            },
        })
        console.log(purchaseReport);

        return NextResponse.json(purchaseReport)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to update purchaseReport"
        },
            { status: 500 }
        )
    }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    try {
        await db.purchaseReport.delete({
            where: {
                id: params.id
            }
        })
        return NextResponse.json({ message: 'Delete success' })
    } catch (error) {
        return NextResponse.json(error)
    }
}
