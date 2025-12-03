// first commit
'use client'
import {useQuery} from '@tanstack/react-query'
import {getRestaurants} from '@/lib/db'
import {Skeleton} from '@/components/ui/skeleton'
import RestaurantCard from '@/components/restaurant-card'

export default function Home() {

  const {data: restaurants, isLoading, error} = useQuery({
    queryKey: ['restaurants'],
    queryFn: () => getRestaurants(),
    staleTime: 5 * 60 * 1000 // 5 minute
  })

  if (isLoading) {
    return (
      <Skeleton className="h-9 w-full" />
    )
  }

  if (error) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center">
        <p>Error loading restaurants: {error.message}</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">My Restaurant List</h1>
      <div className="mt-4">
        {restaurants && restaurants.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {restaurants.map((restaurant) => (
            <RestaurantCard 
              key={restaurant.id} 
              item={restaurant}
            />
          ))}
        </div>
        ) : (
          <p>No restaurants found.</p>
        )}
      </div>
    </div>
  );
}
