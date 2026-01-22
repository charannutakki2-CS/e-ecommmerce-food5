import pizzaImg from "@/assets/pizza.jpg";
import sushiImg from "@/assets/sushi.jpg";
import saladImg from "@/assets/salad.jpg";
import tacosImg from "@/assets/tacos.jpg";
import dessertImg from "@/assets/dessert.jpg";
import heroBurger from "@/assets/hero-burger.jpg";

const categories = [
  { name: "Burgers", image: heroBurger, count: 24 },
  { name: "Pizza", image: pizzaImg, count: 18 },
  { name: "Sushi", image: sushiImg, count: 32 },
  { name: "Salads", image: saladImg, count: 15 },
  { name: "Tacos", image: tacosImg, count: 21 },
  { name: "Desserts", image: dessertImg, count: 28 },
];

const Categories = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Browse by <span className="text-gradient">Category</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our wide variety of cuisines and find your perfect meal
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <a
              key={category.name}
              href="#"
              className="group relative overflow-hidden rounded-2xl aspect-square card-shadow hover:card-shadow-hover transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-semibold text-card text-lg">{category.name}</h3>
                <p className="text-card/70 text-sm">{category.count} items</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
