// first commit
'use client'
import {useQuery} from '@tanstack/react-query'
import {getRestaurants} from '@/lib/db'
import {Restaurant} from '@/types/restaurant'
import {Skeleton} from '@/components/ui/skeleton'

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
      <h1>Restaurant List</h1>
      <div className="mt-4">
        {restaurants && restaurants.length > 0 ? (
          <ul>
            {restaurants.map((restaurant: Restaurant) => (
              <li key={restaurant.id} className="mb-2">
                {restaurant.name}
              </li>
            ))}
          </ul>
        ) : (
          <p>No restaurants found.</p>
        )}
      </div>
    </div>
  );
}
