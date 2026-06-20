import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Packages from "@/components/Packages";

export default function ServicesPage() {
  return (
    <div className="min-h-screen transition-colors duration-300 w-full max-w-full">
      <Navigation />
      <div className="pt-24 pb-16">
        <Packages />
      </div>
      <Footer />
    </div>
  );
}
