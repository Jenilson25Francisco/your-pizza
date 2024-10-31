import { CartButton } from "@/components/cart-button";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="mt-80">
      <Header />
      <CartButton />
      <Footer />
    </div>
  );
}
