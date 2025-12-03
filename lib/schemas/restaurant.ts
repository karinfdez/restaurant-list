
import {z} from "zod"

// For POST request validation
export const restaurantSchema = z.object({
    name: z.string().min(1, "Name is required"),
    type: z.string().min(1, "Type is required"),
    image: z.url("Image must be a valid URL"),
    location: z.string().min(1, "Location is required"),
    rating: z.number().min(0).max(5).optional(),
    price: z.enum(["$$", "$$$", "$$$$"]),
    description: z.string().optional()
})

// For PATCH request validation(every field is optional)

export const updateRestaurantSchema = restaurantSchema.partial()


