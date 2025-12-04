import {Restaurant} from  "@/types/restaurant"
import {restaurantSchema} from "@/lib/schemas/restaurant"
import {z} from "zod"

type RestaurantUpdate = z.infer<typeof restaurantSchema>

let restaurants: Restaurant[] = [
    {
        id: '1',
        name: 'La Mesa Dorada',
        type: 'Mexican',
        image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        location: '847 Valencia Street, San Francisco, CA',
        price: '$$$',
        rating: 4.8,
        description: 'Authentic Mexican cuisine with handcrafted tortillas and premium tequila selection in a vibrant, colorful atmosphere.'
    },
    {
        id: '2',
        name: 'Sakura Sushi Bar',
        type: 'Japanese',
        image: 'https://images.unsplash.com/photo-1556040220-4096d522378d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        location: '1205 Pine Street, Seattle, WA',
        price: '$$$$',
        rating: 4.9,
        description: 'Traditional omakase experience with the freshest fish flown in daily from Tokyo\'s Tsukiji market.'
    },
    {
        id: '3',
        name: 'Nonna\'s Kitchen',
        type: 'Italian',
        image: 'https://images.unsplash.com/photo-1651981075280-9a9e01acbff0?q=80&w=1313&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        location: '342 Mulberry Street, New York, NY',
        price: '$$',
        rating: 4.6,
        description: 'Family-owned trattoria serving homemade pasta and wood-fired pizzas using recipes passed down for generations.'
    },
    {
        id: '4',
        name: 'The Golden Spoon',
        type: 'French',
        image: 'https://images.unsplash.com/photo-1652690772703-0461a655643d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        location: '789 Bourbon Street, New Orleans, LA',
        price: '$$$$',
        rating: 4.7,
        description: 'Elegant French bistro featuring classic dishes with a modern Louisiana twist and an extensive wine cellar.'
    },
    {
        id: '5',
        name: 'Spice Route',
        type: 'Indian',
        image: 'https://images.unsplash.com/photo-1652465485557-0e4fb899f3b8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        location: '156 Devon Avenue, Chicago, IL',
        price: '$$',
        rating: 4.4,
        description: 'Aromatic Indian cuisine with traditional tandoor cooking and a diverse menu spanning multiple regional specialties.'
    },
    {
        id: '6',
        name: 'Blue Harbor Grill',
        type: 'Seafood',
        image: 'https://images.unsplash.com/photo-1625861910621-e9385ba1d993?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        location: '2890 Ocean Drive, Miami, FL',
        price: '$$$',
        rating: 4.5,
        description: 'Waterfront dining featuring the freshest local catch with panoramic views of Biscayne Bay and innovative preparations.'
    },
    {
        id: '7',
        name: 'Bangkok Street',
        type: 'Thai',
        image: 'https://images.unsplash.com/photo-1652690772837-4f270f7f87a2?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        location: '445 University Avenue, Austin, TX',
        price: '$',
        rating: 4.3,
        description: 'Authentic Thai street food in a casual setting with bold flavors and traditional recipes from Bangkok\'s markets.'
    },
    {
        id: '8',
        name: 'The Copper Kettle',
        type: 'American',
        image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1547&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        location: '1567 Main Street, Nashville, TN',
        price: '$$',
        rating: 4.2,
        description: 'Farm-to-table American cuisine featuring locally sourced ingredients and craft cocktails in a rustic, welcoming atmosphere.'
    }
]


export function getRestaurants() {
    return restaurants
}


export function addRestaurant(restaurant: Omit<Restaurant, 'id'>) {
    
    const newRestaurant: Restaurant = {
        id: crypto.randomUUID(),
        ...restaurant
    }
    restaurants.push(newRestaurant)
    return newRestaurant 
}


export function updateRestaurant(
    id: string,
    updates: RestaurantUpdate
): Restaurant | undefined {
    restaurants = restaurants.map((restaurant) => {
        return restaurant.id === id ? {...restaurant, ...updates} : restaurant
    })
 
    return restaurants.find((restaurant) => restaurant.id === id)
}


export function deleteRestaurant(id: string): boolean {
    restaurants = restaurants.filter((restaurant) => restaurant.id !== id)
    return true
}
    