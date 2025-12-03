import { getRestaurants, addRestaurant } from "@/lib/db"
import {restaurantSchema} from "@/lib/schemas/restaurant"
import {NextResponse} from "next/server"

export async function GET() {
    return getRestaurants()
}


export async function POST(request: Request) {

    try {
        const body = await request.json()
        const validatedData = restaurantSchema.safeParse(body)

        if(!validatedData.success) {
            return NextResponse.json(
                { error: validatedData.error.flatten().fieldErrors },
                { status: 400 }
            )
        }

        const { price, ...rest } = validatedData.data
        const restaurant = addRestaurant({
            ...rest,
            priceRange: price
        })
        return NextResponse.json({restaurant}, {status: 201})
    }catch (error) {
        return NextResponse.json({error: "Failed to add restaurant"}, {status: 500})
    }
}