import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Star, Users } from "lucide-react";

interface BusinessCardProps {
  id: string;
  name: string;
  category: string;
  image: string;
  rating: number;
  reviewCount: number;
  address: string;
  nextSlot: string;
  waitTime: string;
  isOpen: boolean;
}

export const BusinessCard = ({ 
  name, 
  category, 
  image, 
  rating, 
  reviewCount, 
  address, 
  nextSlot, 
  waitTime,
  isOpen 
}: BusinessCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer gradient-card border-0">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3">
            <Badge variant={isOpen ? "default" : "secondary"} className="bg-background/90 text-foreground">
              {isOpen ? "Aperto" : "Chiuso"}
            </Badge>
          </div>
          <div className="absolute bottom-3 left-3">
            <Badge variant="outline" className="bg-background/90 text-foreground">
              {category}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
              {name}
            </h3>
            <div className="flex items-center space-x-1 mt-1">
              <Star className="h-4 w-4 fill-warning text-warning" />
              <span className="text-sm font-medium text-foreground">{rating}</span>
              <span className="text-sm text-muted-foreground">({reviewCount})</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span className="truncate">{address}</span>
            </div>
            
            {isOpen && (
              <>
                <div className="flex items-center space-x-2 text-sm">
                  <Clock className="h-4 w-4 text-secondary" />
                  <span className="text-foreground font-medium">Prossimo: {nextSlot}</span>
                </div>
                
                <div className="flex items-center space-x-2 text-sm">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">Attesa stimata: {waitTime}</span>
                </div>
              </>
            )}
          </div>

          <Button 
            variant={isOpen ? "booking" : "outline"} 
            className="w-full mt-4"
            disabled={!isOpen}
          >
            {isOpen ? "Prenota Ora" : "Momentaneamente Chiuso"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};