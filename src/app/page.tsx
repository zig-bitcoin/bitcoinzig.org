import Header from "../components/Header";
import Hero from "../components/Hero";
import WhyZig from "../components/WhyZig";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <Hero />
      <WhyZig />
      <Footer />
    </main>
  );
}
