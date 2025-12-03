import {Restaurant} from  "@/types/restaurant"

let restaurants: Restaurant[] = [
    {
        id: '1',
        name: 'La Mesa Dorada',
        type: 'Mexican',
        image: '/images/rest-1.jpg',
        location: '847 Valencia Street, San Francisco, CA',
        priceRange: '$$$',
        rating: 4.8,
        reviews: 290,
        description: 'Authentic Mexican cuisine with handcrafted tortillas and premium tequila selection in a vibrant, colorful atmosphere.'
    },
    {
        id: '2',
        name: 'Sakura Sushi Bar',
        type: 'Japanese',
        image: '/images/rest-2.jpg',
        location: '1205 Pine Street, Seattle, WA',
        priceRange: '$$$$',
        rating: 4.9,
        reviews: 456,
        description: 'Traditional omakase experience with the freshest fish flown in daily from Tokyo\'s Tsukiji market.'
    },
    {
        id: '3',
        name: 'Nonna\'s Kitchen',
        type: 'Italian',
        image: '/images/rest-3.jpg',
        location: '342 Mulberry Street, New York, NY',
        priceRange: '$$',
        rating: 4.6,
        reviews: 782,
        description: 'Family-owned trattoria serving homemade pasta and wood-fired pizzas using recipes passed down for generations.'
    },
    {
        id: '4',
        name: 'The Golden Spoon',
        type: 'French',
        image: '/images/rest-4.jpg',
        location: '789 Bourbon Street, New Orleans, LA',
        priceRange: '$$$$',
        rating: 4.7,
        reviews: 234,
        description: 'Elegant French bistro featuring classic dishes with a modern Louisiana twist and an extensive wine cellar.'
    },
    {
        id: '5',
        name: 'Spice Route',
        type: 'Indian',
        image: '/images/rest-5.jpg',
        location: '156 Devon Avenue, Chicago, IL',
        priceRange: '$$',
        rating: 4.4,
        reviews: 567,
        description: 'Aromatic Indian cuisine with traditional tandoor cooking and a diverse menu spanning multiple regional specialties.'
    },
    {
        id: '6',
        name: 'Blue Harbor Grill',
        type: 'Seafood',
        image: '/images/rest-6.jpg',
        location: '2890 Ocean Drive, Miami, FL',
        priceRange: '$$$',
        rating: 4.5,
        reviews: 389,
        description: 'Waterfront dining featuring the freshest local catch with panoramic views of Biscayne Bay and innovative preparations.'
    },
    {
        id: '7',
        name: 'Bangkok Street',
        type: 'Thai',
        image: '/images/rest-7.jpg',
        location: '445 University Avenue, Austin, TX',
        priceRange: '$',
        rating: 4.3,
        reviews: 623,
        description: 'Authentic Thai street food in a casual setting with bold flavors and traditional recipes from Bangkok\'s markets.'
    },
    {
        id: '8',
        name: 'The Copper Kettle',
        type: 'American',
        image: '/images/rest-8.jpg',
        location: '1567 Main Street, Nashville, TN',
        priceRange: '$$',
        rating: 4.2,
        reviews: 445,
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
    