// first commit
'use client'
import {useQuery} from '@tanstack/react-query'
import RestaurantCard from '@/components/restaurant-card'
import {Button} from '@/components/ui/button'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { restaurantSchema } from '@/lib/schemas/restaurant'
import {NewRestaurantForm} from '@/components/new-restaurant-form'
import {NewRestaurantFormData} from '@/types/restaurant'
import { toast } from "sonner"
import {Skeleton} from '@/components/ui/skeleton'
import {useQueryClient} from '@tanstack/react-query'

export default function Home() {

  const [openModal, setOpenModal] = useState(false)
  const queryClient = useQueryClient()
  const form = useForm({
    resolver: zodResolver(restaurantSchema),
    defaultValues: {
      name: "",
      type: "",
      image: "",
      location: "",
      rating: undefined,
      price: "$$",
      description: ""
    }
  })
  const {data: restaurants, isLoading, error} = useQuery({
    queryKey: ['restaurants'],
    queryFn: async () => {
      const response = await fetch('/apis/restaurants');
      if (!response.ok) {
        throw new Error('Failed to fetch restaurants');
      }
      return response.json();
    },
    staleTime: 5 * 60 * 1000 // 5 minute
  })

  const onSubmit = async (data: NewRestaurantFormData) => {

    try {
      const response = await fetch('/apis/restaurants', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const {restaurant} = await response.json();
      
      if (!response.ok || !restaurant) {
          throw new Error(`Failed to add restaurant`);
      }

      if(restaurant) {
        form.reset();
        queryClient.invalidateQueries({ queryKey: ['restaurants'] });
        toast.success("Restaurant added successfully!");
      } 
      setOpenModal(false);

    }catch(error){
      toast.error(`${error}`)
      console.log(error)
    }
  };

  const openForm = () => {
    setOpenModal(true)
  }

  const deleteRestaurant = async (id: string) => {
    try {
      const response = await fetch(`/apis/restaurants/${id}`, {
        method: 'DELETE',
      })

      if(!response.ok) {
        throw new Error(`Failed to delete restaurant`);
      }
            
      if(response.ok) {
        const {success} = await response.json()
        if(success) {
          toast.success("Restaurant deleted successfully!")
          queryClient.invalidateQueries({ queryKey: ['restaurants'] });
        }else{
          throw new Error(`Failed to delete restaurant`);
        }
      }
    }catch(error){
      toast.error(`${error}`)
      console.log(error)
    }
  }


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
    <>
      <div className="flex flex-col min-h-screen items-center justify-center px-4">
        <h1 className="text-4xl font-bold mb-8 text-slate-700">MY RESTAURANT LIST</h1>
        
        <div className="w-full max-w-7xl">
          <div className="flex justify-end mb-6">
            <Button onClick={openForm}variant="outline" className="border-orange-600 hover:bg-orange-600 hover:text-white">Add new restaurant</Button>
          </div>
          
          {restaurants && restaurants.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {restaurants.map((restaurant) => (
              <RestaurantCard 
                key={restaurant.id} 
                item={restaurant}
                deleteRestaurant={deleteRestaurant}
              />
            ))}
          </div>
          ) : (
            <p className="text-2xl text-slate-700 text-center">No restaurants found.</p>
          )}
        </div>
      </div>
      {openModal && (
        <NewRestaurantForm form={form} setOpenModal={setOpenModal} onSubmit={onSubmit}/>
      )}
    </>
  );
}
