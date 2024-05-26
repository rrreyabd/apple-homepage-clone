import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import MovieCarousel from "./Components/MovieCarousel";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import { heroPlaceholder, productPlaceholder } from "./lib/data";

function App() {
  return (
    <div className="w-full flex justify-center">
      <div className="font-sf-text w-full max-w-[1600px]">
        <Navbar />
        {heroPlaceholder &&
          heroPlaceholder.map((data, i) => <Hero data={data} key={i} />)}

        <div className="sm:px-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {productPlaceholder &&
            productPlaceholder.map((data, i) => (
              <Product data={data} key={i} />
            ))}
        </div>

        <MovieCarousel />
        <Footer />
      </div>
    </div>
  );
}

export default App;
