import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import ChatWidget from "@/components/ChatWidget";
import { useStore } from "@/lib/store";
import { electronicsProducts } from "@/data/products";
import { toast } from "sonner";

const Electronics = () => {
  const { addToCart, getTotalItems } = useStore();

  const handleAddToCart = (product: any) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header cartItemCount={getTotalItems()} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Electronics</h1>
          <p className="text-muted-foreground">Latest gadgets and devices</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {electronicsProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </main>

      <ChatWidget />
    </div>
  );
};

export default Electronics;
