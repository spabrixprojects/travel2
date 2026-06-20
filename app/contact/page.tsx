import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen transition-colors duration-300 w-full max-w-full">
      <Navigation />
      <div className="pt-24 pb-16">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
