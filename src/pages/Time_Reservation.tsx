import { MobileHeader } from "@/components/MobileHeader";
import { Footer } from "@/components/Footer";

const Time_Reservation = () => {
  return (
    <div>
      <MobileHeader />
      <section className="px-4 py-8">
        <h1 className="text-2xl font-bold text-center">Time Reservation Page</h1>
        <p className="text-center mt-4">Questa è la pagina dedicata alla Time Reservation.</p>
      </section>
      <Footer />
    </div>
  );
};

export default Time_Reservation;
