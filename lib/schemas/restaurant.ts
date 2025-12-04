
import {z} from "zod"

// For POST request validation
export const restaurantSchema = z.object({
    name: z.string().min(1, "Name is required"),
    type: z.string().min(1, "Type is required"),
    image: z.string().url("Please enter a valid image URL"),
    location: z.string().min(1, "Location is required"),
    rating: z.number().min(0, "Rating must be at least 0").max(5, "Rating cannot exceed 5").optional(),
    price: z.enum(["$", "$$", "$$$"]),
    description: z.string().optional()
})