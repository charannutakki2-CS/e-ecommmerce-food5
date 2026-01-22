import { ArrowRight, Clock, Truck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBurger from "@/assets/hero-burger.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <Star className="h-4 w-4 text-primary fill-primary" />
              <span className="text-sm font-medium text-primary">#1 Food Delivery App</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight">
              Delicious Food,{" "}
              <span className="text-gradient">Delivered</span> to Your Door
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              Order from your favorite restaurants and get fresh, hot meals delivered in minutes. 
              Quality food, exceptional service.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="hero-gradient text-primary-foreground font-semibold text-lg px-8 py-6 rounded-full hover:opacity-90 transition-opacity">
                Order Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="font-semibold text-lg px-8 py-6 rounded-full border-2">
                View Menu
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">30 min</p>
                  <p className="text-sm text-muted-foreground">Avg. Delivery</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Free Delivery</p>
                  <p className="text-sm text-muted-foreground">On orders $25+</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Star className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-bold text-foreground">4.9 Rating</p>
                  <p className="text-sm text-muted-foreground">50K+ Reviews</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative lg:pl-8" style={{ animationDelay: "0.2s" }}>
            <div className="relative animate-float">
              <div className="absolute inset-0 hero-gradient rounded-3xl blur-3xl opacity-30 scale-95" />
              <img
                src={heroBurger}
                alt="Delicious gourmet burger with melted cheese and fresh vegetables"
                className="relative rounded-3xl card-shadow-hover w-full object-cover aspect-[4/3]"
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 md:bottom-8 md:-left-8 bg-card rounded-2xl p-4 card-shadow animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full hero-gradient flex items-center justify-center">
                  <span className="text-xl">🍔</span>
                </div>
                <div>
                  <p className="font-bold text-foreground">Classic Burger</p>
                  <p className="text-primary font-semibold">$12.99</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
