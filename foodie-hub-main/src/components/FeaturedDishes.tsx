import { Star, Plus, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import pizzaImg from "@/assets/pizza.jpg";
import sushiImg from "@/assets/sushi.jpg";
import saladImg from "@/assets/salad.jpg";
import tacosImg from "@/assets/tacos.jpg";
import dessertImg from "@/assets/dessert.jpg";
import heroBurger from "@/assets/hero-burger.jpg";

const dishes = [
  {
    id: 1,
    name: "Classic Cheeseburger",
    description: "Juicy beef patty with melted cheddar, fresh veggies, and special sauce",
    price: 12.99,
    rating: 4.9,
    reviews: 324,
    time: "20-25",
    image: heroBurger,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Margherita Pizza",
    description: "Traditional Italian pizza with fresh mozzarella, basil, and tomato sauce",
    price: 16.99,
    rating: 4.8,
    reviews: 256,
    time: "25-30",
    image: pizzaImg,
    badge: null,
  },
  {
    id: 3,
    name: "Premium Sushi Platter",
    description: "Assorted fresh salmon nigiri, maki rolls, and wasabi",
    price: 24.99,
    rating: 4.9,
    reviews: 412,
    time: "15-20",
    image: sushiImg,
    badge: "Popular",
  },
  {
    id: 4,
    name: "Garden Fresh Salad",
    description: "Mixed greens with grilled chicken, avocado, and honey vinaigrette",
    price: 11.99,
    rating: 4.7,
    reviews: 189,
    time: "10-15",
    image: saladImg,
    badge: "Healthy",
  },
  {
    id: 5,
    name: "Authentic Street Tacos",
    description: "Three soft tortillas with seasoned beef, cilantro, and lime",
    price: 13.99,
    rating: 4.8,
    reviews: 278,
    time: "15-20",
    image: tacosImg,
    badge: null,
  },
  {
    id: 6,
    name: "Chocolate Lava Cake",
    description: "Rich molten chocolate cake with vanilla ice cream",
    price: 8.99,
    rating: 4.9,
    reviews: 521,
    time: "10-15",
    image: dessertImg,
    badge: "Sweet Treat",
  },
];

const FeaturedDishes = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Featured <span className="text-gradient">Dishes</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Our most popular dishes loved by thousands of customers
            </p>
          </div>
          <Button variant="outline" className="rounded-full px-6 self-start md:self-auto">
            View All Menu
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {dishes.map((dish, index) => (
            <div
              key={dish.id}
              className="group bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {dish.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                    {dish.badge}
                  </span>
                )}
                <Button
                  size="icon"
                  className="absolute bottom-4 right-4 h-12 w-12 rounded-full hero-gradient text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Plus className="h-6 w-6" />
                </Button>
              </div>
              
              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-accent fill-accent" />
                    <span className="font-semibold text-foreground">{dish.rating}</span>
                  </div>
                  <span className="text-muted-foreground text-sm">({dish.reviews})</span>
                  <span className="text-muted-foreground">•</span>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Clock className="h-4 w-4" />
                    {dish.time} min
                  </div>
                </div>
                
                <h3 className="font-display font-bold text-xl mb-2 text-foreground">
                  {dish.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {dish.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gradient">
                    ${dish.price.toFixed(2)}
                  </span>
                  <Button variant="outline" size="sm" className="rounded-full">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
