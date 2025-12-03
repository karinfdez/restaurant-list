import {Restaurant} from  "@/types/restaurant"

let restaurants: Restaurant[] = []


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
    