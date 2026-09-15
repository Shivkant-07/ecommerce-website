import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeatureProducts';
import PromoBanner from '../components/PromoBanner';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <PromoBanner />
      <Footer />
    </div>
  );
}