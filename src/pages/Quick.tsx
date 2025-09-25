import { MobileHeader } from "@/components/MobileHeader";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { ListaQuick } from "@/components/ListaQuick.";

const Quick = () => {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <div className="flex flex-col min-h-screen">
      <MobileHeader />

      <section className="px-4 py-8 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-center">Quick Pickup</h1>
        <p className="text-center mt-4 mb-6">
          Seleziona la data e scegli l’attività per il ritiro veloce.
        </p>

        {/* Selezione data */}
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="border rounded px-4 py-2 mb-6 w-full max-w-xs"
        />

        {/* Lista attività */}
        {selectedDate ? (
          <ListaQuick />
        ) : (
          <p className="text-sm text-muted-foreground">
            Seleziona prima la data per visualizzare le attività disponibili.
          </p>
        )}
      </section>

      <Navbar />
    </div>
  );
};

export default Quick;
