import { updateRestaurant, deleteRestaurant } from "@/lib/db"
import {restaurantSchema} from "@/lib/schemas/restaurant"
import {NextResponse} from "next/server"

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    const body = await request.json()
    const {id} = body

    if(!id) {
        return NextResponse.json(
            {error: "Invalid id"},
            {status: 400}
        )
    }

    const validatedData = restaurantSchema.safeParse(body)

    if(!validatedData.success) {
        return NextResponse.json(
            {error: validatedData.error.flatten().fieldErrors},
            {status: 400}
        )
    }
    return updateRestaurant(id, validatedData.data)
}


export async function DELETE(request: Request, { params }: { params: { id: string } }) {

    try {
        const {id} =params

        if(!id) {
            return NextResponse.json(
                {error: "Invalid id"}, 
                {status: 400}
            )
        }
        const deletedRestaurant = deleteRestaurant(id)
        
        if(!deletedRestaurant) {
            return NextResponse.json({error: "Restaurant not found"}, {status: 404})
        }
        return NextResponse.json({success: true})

    }catch(error) {
        return NextResponse.json({error: "Failed to delete restaurant"}, {status: 500})
    }
}