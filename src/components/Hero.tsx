import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleQuickPickup = () => {
    navigate("/quick-pickup"); // pagina dedicata Quick Pickup
  };

  const handleTimeReservation = () => {
    navigate("/time-reservation"); // pagina dedicata Time Reservation
  };

  return (
    <section className="relative px-4 py-8 gradient-hero overflow-hidden bg-[#8E44AD]">
      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center animate-fade-in">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-tight">
            <span className="text-quick-pickup">Ritira</span> e{" "}
            <span className="text-time-slot">Prenota</span>{" "}
            <span className="text-primary">Smart</span>
          </h1>

          <div className="flex flex-col gap-3 mb-6">
            <Button
              variant="quick-pickup"
              size="lg"
              className="group h-14 text-base"
              onClick={handleQuickPickup}
              disabled={loading}
            >
              🛒 Quick Pickup
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="time-slot"
              size="lg"
              className="group h-14 text-base"
              style={{ color: "black" }}
              onClick={handleTimeReservation}
              disabled={loading}
            >
              ⏰ Time Reservation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="flex items-center space-x-2 text-quick-pickup p-3 rounded-xl bg-quick-pickup/10">
              <Clock className="h-4 w-4" />
              <div>
                <div className="font-medium">Ritira Subito</div>
                <div className="text-muted-foreground">Ordini pronti</div>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-time-slot p-3 rounded-xl bg-time-slot/10">
              <MapPin className="h-4 w-4" />
              <div>
                <div className="font-medium">Slot Garantito</div>
                <div className="text-muted-foreground">Orario fisso</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
