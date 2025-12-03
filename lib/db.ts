import {Restaurant} from  "@/types/restaurant"

let restaurants: Restaurant[] = [
    {
        id: '1',
        name: 'Pallas',
        type: 'Mexican',
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        location: '123 Main St',
        priceRange: '$$',
        rating: 4.5,
        reviews: 120,
        description: 'A delicious Mexican restaurant with a cozy atmosphere.'
    },
    {
        id: '2',
        name: 'Pallas',
        type: 'Mexican',
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        location: '123 Main St',
        priceRange: '$$',
        rating: 4.5,
        reviews: 120,
        description: 'A delicious Mexican restaurant with a cozy atmosphere.'
    },
    {
        id: '3',
        name: 'Pallas',
        type: 'Mexican',
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        location: '123 Main St',
        priceRange: '$$',
        rating: 4.5,
        reviews: 120,
        description: 'A delicious Mexican restaurant with a cozy atmosphere.'
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
    updates: Partial<Restaurant>
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
    