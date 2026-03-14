import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import HomePage from "@/components/pages/home-page";

export default function Page() {
  return (
    <>
      <Navigation />
      <main>
        <HomePage />
      </main>
      <Footer />
    </>
  );
}
