import {Restaurant} from '@/types/restaurant'
import {Card, CardContent} from '@/components/ui/card'
import {Button} from '@/components/ui/button'
import {Edit} from 'lucide-react'
import Image from 'next/image'
import {DeleteDialog} from '@/components/ui/dialog'

interface RestaurantCardProps {
  item: Restaurant
  deleteRestaurant: (id: string) => void
  editRestaurant: (restaurant: Restaurant) => void
}

export default function RestaurantCard({item, deleteRestaurant, editRestaurant}: RestaurantCardProps) {
    return (
        <Card className="group relative overflow-hidden cursor-pointer h-80">
            <CardContent className="p-0 h-full relative">
                {/* Full background image */}
                <Image 
                    src={item.image}
                    alt={item.name} 
                    fill
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition-transform duration-300"
                />
                
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                
                {/* Rating badge */}
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                    <span>⭐</span>
                    <span>{item.rating}</span>
                </div>
                
                {/* Price range badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-black px-2 py-1 rounded-full text-xs font-medium">
                    {item.price}
                </div>
                
                {/* Restaurant title */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4 min-h-[100px]">
                    <h3 className="text-white font-bold text-lg text-shadow-lg">{item.name}</h3>
                    <p className="text-white/90 text-sm text-shadow-sm">{item.type} • {item.location}</p>
                </div>
                
                {/* Edit and detete buttons */}
                <div className="absolute bottom-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                    <Button 
                        size="sm" 
                        variant="secondary"
                        className="h-8 px-2 hover:bg-blue-700 text-white text-xs"
                        onClick={(e) => {
                            e.stopPropagation();
                            editRestaurant(item);
                        }}
                    >
                        <Edit className="h-3 w-3" />
                    </Button>
                    <DeleteDialog 
                        restName={item.name}
                        onConfirm={() => deleteRestaurant(item.id)}
                    />
                </div>
                
                {/* Sliding description overlay */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm text-white p-4 flex flex-col justify-center items-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                    <div className="text-center">
                        <h3 className="font-bold text-xl mb-2">{item.name}</h3>
                        <p className="text-white/90 text-sm mb-3">{item.type} • {item.location}</p>
                        <p className="text-white/80 text-sm leading-relaxed mb-4">{item.description}</p>
                        <div className="flex items-center justify-center gap-4 text-sm">
                            {item.reviews && (
                                <>
                                     <div className="flex items-center gap-1">
                                        <span>⭐</span>
                                        <span>{item.rating}</span>
                                        <span className="text-white/60">({item.reviews} reviews)</span>
                                     </div>
                                    <span className="text-white/60">•</span>
                                </>
                               
                            )}
                            
                            <span className="font-medium">{item.price}</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}