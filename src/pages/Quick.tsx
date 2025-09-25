import { MobileHeader } from "@/components/MobileHeader";
import { Footer } from "@/components/Footer";

const Quick = () => {
  return (
    <div>
      <MobileHeader />
      <section className="px-4 py-8">
        <h1 className="text-2xl font-bold text-center">Quick Pickup Page</h1>
        <p className="text-center mt-4">Questa è la pagina dedicata al Quick Pickup.</p>
      </section>
      <Footer />
    </div>
  );
};

export default Quick;
