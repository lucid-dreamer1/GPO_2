import { useState, useMemo } from "react";
import { MobileBusinessCard } from "./MobileBusinessCard";
import { CategoryTabs } from "./CategoryTabs";
import { mockBusinesses } from "@/data/mockBusinesses";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";

type TabType = "quick-pickup" | "time-slot";

export const ListaTime = () => {
  const [activeTab, setActiveTab] = useState<TabType>("time-slot");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBusinesses = useMemo(() => {
    return mockBusinesses.filter((business) => {
      const matchesType = business.type === activeTab;
      const matchesSearch =
        business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        business.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesType && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <section className="pb-6">
      {/* Category Tabs */}

      {/* Search */}
      <div className="px-4 py-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={`Cerca ${activeTab === "quick-pickup" ? "per ritiro" : "per prenotazione"}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-12 rounded-xl"
          />
        </div>
      </div>

      {/* Results */}
      <div className="px-4">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-medium text-foreground">
            {filteredBusinesses.length} {activeTab === "quick-pickup" ? "pickup" : "slot"} disponibili
          </p>
          <p className="text-xs text-muted-foreground">
            {activeTab === "quick-pickup" ? "🛒 Ritira e vai" : "⏰ Prenota orario"}
          </p>
        </div>

        {/* Business List */}
        <div className="space-y-3">
          {filteredBusinesses.map((business) => (
            <MobileBusinessCard key={business.id} {...business} />
          ))}
        </div>

        {/* Empty State */}
        {filteredBusinesses.length === 0 && (
          <div className="text-center py-12">
            <Filter className="h-8 w-8 mx-auto text-muted-foreground opacity-50 mb-4" />
            <p className="text-sm text-muted-foreground">
              Nessuna attività trovata per "{searchQuery}"
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
