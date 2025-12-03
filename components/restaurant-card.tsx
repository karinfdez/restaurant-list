import {Restaurant} from '@/types/restaurant'
import {Card, CardContent} from '@/components/ui/card'
import Image from 'next/image'

interface RestaurantCardProps {
  item: Restaurant
}

export default function RestaurantCard({item}: RestaurantCardProps) {
    return (
        <Card className="group relative overflow-hidden cursor-pointer h-80">
            <CardContent className="p-0 h-full relative">
                {/* Full background image */}
                <Image 
                    src={item.image} 
                    alt={item.name} 
                    fill
                    className="object-cover transition-transform duration-300"
                />
                
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                
                {/* Rating badge - top right */}
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                    <span>⭐</span>
                    <span>{item.rating}</span>
                </div>
                
                {/* Price range badge - top left */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-black px-2 py-1 rounded-full text-xs font-medium">
                    {item.priceRange}
                </div>
                
                {/* Restaurant title - bottom overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/20 to-transparent p-4">
                    <h3 className="text-white font-bold text-lg">{item.name}</h3>
                    <p className="text-white/80 text-sm">{item.type} • {item.location}</p>
                </div>
                
                {/* Sliding description overlay - hidden by default, slides up on hover */}
                <div className="absolute inset-0 bg-black/10 backdrop-blur-sm text-white p-4 flex flex-col justify-center items-center translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-in-out">
                    <div className="text-center">
                        <h3 className="font-bold text-xl mb-2">{item.name}</h3>
                        <p className="text-white/90 text-sm mb-3">{item.type} • {item.location}</p>
                        <p className="text-white/80 text-sm leading-relaxed mb-4">{item.description}</p>
                        <div className="flex items-center justify-center gap-4 text-sm">
                            <div className="flex items-center gap-1">
                                <span>⭐</span>
                                <span>{item.rating}</span>
                                <span className="text-white/60">({item.reviews} reviews)</span>
                            </div>
                            <span className="text-white/60">•</span>
                            <span className="font-medium">{item.priceRange}</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}