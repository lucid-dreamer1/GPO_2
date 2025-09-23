import { Button } from "@/components/ui/button";
import { Calendar, User, Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
            <Calendar className="h-5 w-5 text-primary-foreground" />
          </div>
          <h1 className="text-xl font-bold text-primary">Book IT!</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#come-funziona" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Come Funziona
          </a>
          <a href="#attivita" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Attività
          </a>
          <a href="#per-attivita" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Per Attività
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="hidden md:inline-flex">
            <User className="h-4 w-4 mr-2" />
            Accedi
          </Button>
          <Button variant="hero" size="sm">
            Prenota Ora
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};