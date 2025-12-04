
export type Restaurant = {
    id: string
    name: string
    type: string
    image: string
    location: string
    rating?: number
    price: string
    reviews?: number
    description?: string
  }

  export type NewRestaurantFormData = {
    name: string
    type: string
    image: string
    location: string
    rating?: number
    price: "$" | "$$" | "$$$"
    description?: string
  }