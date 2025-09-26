import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, User } from "lucide-react";
import  Navbar  from "./Navbar";
export const SignupHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full verde">
      <div className="flex items-center justify-between px-4 h-16">
        
        {/* Logo + testo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center hover:scale-105 transition-transform shadow-md">
            <Calendar className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white tracking-wide">
              Book <span className="text-green-300">IT!</span>
            </h1>
            <p className="text-xs text-white/80 -mt-1">Quick & Easy</p>
          </div>
        </div>

        {/* Pulsante utente */}
        <Link to="/Signup">
          <Button
            variant="ghost"
            className="text-white hover:bg-white/10 rounded-full px-3"
          >
            <User className="h-5 w-5 mr-1" />
            Registrati
          </Button>
        </Link>
        <Navbar/>
      </div>
    </header>
  );
};
