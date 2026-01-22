import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedDishes from "@/components/FeaturedDishes";
import SpecialOffer from "@/components/SpecialOffer";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <FeaturedDishes />
        <SpecialOffer />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
