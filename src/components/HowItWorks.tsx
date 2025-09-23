import { Search, Calendar, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Trova l'attività",
    description: "Cerca tra barbieri, panetterie, ristoranti e altri servizi nella tua zona",
    color: "text-primary"
  },
  {
    icon: Calendar,
    title: "Prenota il tuo slot",
    description: "Scegli l'orario che preferisci tra quelli disponibili in tempo reale",
    color: "text-secondary"
  },
  {
    icon: CheckCircle,
    title: "Vai diretto al tuo turno",
    description: "Ricevi conferma e presentati all'orario prenotato. Niente più code!",
    color: "text-success"
  }
];

export const HowItWorks = () => {
  return (
    <section id="come-funziona" className="py-20 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Come Funziona
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tre semplici passi per eliminare l'attesa e goderti il tuo tempo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-background shadow-lg border flex items-center justify-center group-hover:shadow-xl transition-shadow">
                  <step.icon className={`h-8 w-8 ${step.color}`} />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border"></div>
                )}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};