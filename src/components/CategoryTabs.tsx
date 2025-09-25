import { Button } from "@/components/ui/button";
import { ShoppingBag, Clock } from "lucide-react";

interface CategoryTabsProps {
  activeTab: "quick-pickup" | "time-slot";
  onTabChange: (tab: "quick-pickup" | "time-slot") => void;
}

export const CategoryTabs = ({ activeTab, onTabChange }: CategoryTabsProps) => {
  return (
    <div className="px-4 py-3 bg-muted/20">
      <div className="flex space-x-2">
        {/* Quick Pickup */}
        <Button
          size="sm"
          onClick={() => onTabChange("quick-pickup")}
          className={`flex-1 h-12 text-sm font-medium ${
            activeTab === "quick-pickup"
              ? "bg-[#045B5A] text-white hover:bg-[#045B5A]"
              : "bg-white text-black border hover:bg-muted/40"
          }`}
        >
          <ShoppingBag className="h-4 w-4 mr-2" />
          <div className="text-left">
            <div>Quick Pickup</div>
            <div className="text-xs opacity-75">Ritira e vai</div>
          </div>
        </Button>

        {/* Time Reservation */}
        <Button
          size="sm"
          onClick={() => onTabChange("time-slot")}
          className={`flex-1 h-12 text-sm font-medium ${
            activeTab === "time-slot"
              ? "bg-[#045B5A] text-white hover:bg-[#045B5A]"
              : "bg-white text-black border hover:bg-muted/40"
          }`}
        >
          <Clock className="h-4 w-4 mr-2" />
          <div className="text-left">
            <div>Time Reservation</div>
            <div className="text-xs opacity-75">Prenota slot</div>
          </div>
        </Button>
      </div>
    </div>
  );
};
