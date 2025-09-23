import { MobileHeader } from "@/components/MobileHeader";
import { Hero } from "@/components/Hero";
import { BusinessList } from "@/components/BusinessList";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <MobileHeader />
      <main className="pb-20">
        <div className="pt-4 pb-6">
          <Hero />
        </div>
        <BusinessList />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
