import { updateRestaurant, deleteRestaurant } from "@/lib/db"

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    const body = await request.json()
    return updateRestaurant(params.id, body)
}