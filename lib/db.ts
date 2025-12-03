import {Restaurant} from  "@/types/restaurant"

let restaurants: Restaurant[] = [
    {
        id: '1',
        name: 'Pallas',
        type: 'Mexican',
        image: '/images/rest-1.jpg',
        location: '123 Main St',
        priceRange: '$$$',
        rating: 4.8,
        reviews: 290,
        description: 'A delicious Mexican restaurant with a cozy atmosphere.'
    },
    {
        id: '2',
        name: 'Pallas',
        type: 'Mexican',
        image: '/images/rest-2.jpg',
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
        image: '/images/rest-3.jpg',
        location: '123 Main St',
        priceRange: '$$',
        rating: 4.5,
        reviews: 120,
        description: 'A delicious Mexican restaurant with a cozy atmosphere.'
    },
    {
        id: '4',
        name: 'Pallas',
        type: 'Mexican',
        image: '/images/rest-4.jpg',
        location: '123 Main St',
        priceRange: '$$',
        rating: 4.5,
        reviews: 120,
        description: 'A delicious Mexican restaurant with a cozy atmosphere.'
    },
    {
        id: '5',
        name: 'Pallas',
        type: 'Mexican',
        image: '/images/rest-5.jpg',
        location: '123 Main St',
        priceRange: '$$',
        rating: 4.5,
        reviews: 120,
        description: 'A delicious Mexican restaurant with a cozy atmosphere.'
    },
    {
        id: '6',
        name: 'Pallas',
        type: 'Mexican',
        image: '/images/rest-6.jpg',
        location: '123 Main St',
        priceRange: '$$',
        rating: 4.5,
        reviews: 120,
        description: 'A delicious Mexican restaurant with a cozy atmosphere.'
    },
    {
        id: '7',
        name: 'Pallas',
        type: 'Mexican',
        image: '/images/rest-7.jpg',
        location: '123 Main St',
        priceRange: '$$',
        rating: 4.5,
        reviews: 120,
        description: 'A delicious Mexican restaurant with a cozy atmosphere.'
    },
    {
        id: '8',
        name: 'Pallas',
        type: 'Mexican',
        image: '/images/rest-8.jpg',
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
    