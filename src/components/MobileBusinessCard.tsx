import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Star, Timer, Calendar } from "lucide-react";
import { Business } from "@/data/mockBusinesses";

interface MobileBusinessCardProps extends Business {}

export const MobileBusinessCard = ({ 
  name, 
  category, 
  type,
  image, 
  rating, 
  reviewCount, 
  address, 
  nextSlot, 
  waitTime,
  isOpen,
  pickupTime,
  availableSlots
}: MobileBusinessCardProps) => {
  const getButtonVariant = () => {
    if (!isOpen) return "outline";
    return type === "quick-pickup" ? "quick-pickup" : "time-slot";
  };

  const getButtonText = () => {
    if (!isOpen) return "Chiuso";
    return type === "quick-pickup" ? "Ordina Ritiro" : "Prenota Slot";
  };

  const getIcon = () => {
    return type === "quick-pickup" ? Timer : Calendar;
  };

  const Icon = getIcon();

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border border-border/50 bg-card/50 backdrop-blur">
      <CardContent className="p-0">
        <div className="flex space-x-3 p-3">
          {/* Image */}
          <div className="relative flex-shrink-0">
            <div className="w-16 h-16 rounded-xl overflow-hidden">
              <img 
                src={image} 
                alt={name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute -top-1 -right-1">
              <Badge variant={isOpen ? "default" : "secondary"} className="text-xs px-1.5 py-0.5">
                {isOpen ? "🟢" : "⭕"}
              </Badge>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-sm text-foreground truncate">
                  {name}
                </h3>
                <div className="flex items-center space-x-2 mt-0.5">
                  <Badge variant="outline" className="text-xs px-2 py-0">
                    {category}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 fill-warning text-warning" />
                    <span className="text-xs font-medium">{rating}</span>
                    <span className="text-xs text-muted-foreground">({reviewCount})</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-1 mb-2 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3 flex-shrink-0" />
              <span className="truncate">{address}</span>
            </div>
            
            {isOpen && (
              <div className="flex items-center space-x-1 mb-3 text-xs">
                <Icon className={`h-3 w-3 ${type === "quick-pickup" ? "text-quick-pickup" : "text-time-slot"}`} />
                <span className="font-medium text-foreground">{nextSlot}</span>
                <span className="text-muted-foreground">• {waitTime}</span>
              </div>
            )}

            <Button 
              variant={getButtonVariant()} 
              size="sm"
              className="w-full h-8 text-xs font-medium"
              disabled={!isOpen}
            >
              {getButtonText()}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};