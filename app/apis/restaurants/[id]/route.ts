import { updateRestaurant, deleteRestaurant } from "@/lib/db"
import {restaurantSchema} from "@/lib/schemas/restaurant"
import {NextResponse} from "next/server"

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const {id} = await params

    if(!id) {
        return NextResponse.json(
            {error: "Invalid id"},
            {status: 400}
        )
    }

    const body = await request.json()

    const validatedData = restaurantSchema.safeParse(body)

    if(!validatedData.success) {
        return NextResponse.json(
            {error: validatedData.error.flatten().fieldErrors},
            {status: 400}
        )
    }
    const restaurant = updateRestaurant(id, validatedData.data)
    return NextResponse.json({restaurant}, {status: 200})
}


export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const {id} = await params

        if(!id) {
            return NextResponse.json(
                {error: "Invalid id"}, 
                {status: 400}
            )
        }
        
        const success = deleteRestaurant(id)
        
        if(!success) {
            return NextResponse.json({error: "Restaurant not found"}, {status: 404})
        }
        
        return NextResponse.json({success: true})
    } catch (error) {
        return NextResponse.json({error: "Failed to delete restaurant"}, {status: 500})
    }
}