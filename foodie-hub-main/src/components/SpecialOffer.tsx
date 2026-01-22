import { ArrowRight, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";

const SpecialOffer = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl hero-gradient p-8 md:p-12 lg:p-16">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-background/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-background/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/20 rounded-full">
                <Timer className="h-4 w-4 text-primary-foreground" />
                <span className="text-sm font-medium text-primary-foreground">Limited Time Offer</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground leading-tight">
                Get 30% Off Your First Order!
              </h2>
              
              <p className="text-primary-foreground/80 text-lg max-w-lg">
                New to Tastify? Enjoy a special welcome discount on your first order. 
                Use code <span className="font-bold text-primary-foreground">WELCOME30</span> at checkout.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="font-semibold text-lg px-8 py-6 rounded-full">
                  Order Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            
            {/* Countdown or promo visual */}
            <div className="flex justify-center lg:justify-end">
              <div className="grid grid-cols-3 gap-4 md:gap-6">
                {[
                  { value: "02", label: "Days" },
                  { value: "14", label: "Hours" },
                  { value: "36", label: "Mins" },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="bg-background/20 backdrop-blur-sm rounded-2xl p-4 md:p-6">
                      <span className="text-4xl md:text-5xl font-bold text-primary-foreground">
                        {item.value}
                      </span>
                    </div>
                    <p className="mt-2 text-primary-foreground/80 font-medium">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
