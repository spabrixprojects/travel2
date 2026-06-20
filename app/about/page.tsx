import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

export default function AboutPage() {
  return (
    <div className="min-h-screen transition-colors duration-300 w-full max-w-full">
      <Navigation />
      <div className="pt-32 pb-16 min-h-[60vh]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-playfair font-bold text-center mb-12">About Us</h1>
          <p className="text-lg text-center max-w-2xl mx-auto mb-16 text-gray-600 dark:text-gray-300">
            Triplora is your premier travel partner, dedicated to providing unforgettable experiences and exclusive deals to the world's most breathtaking destinations.
          </p>
          <FAQ />
        </div>
      </div>
      <Footer />
    </div>
  );
}
