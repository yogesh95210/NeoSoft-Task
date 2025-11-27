import ProductCard from "@/Component/ProductCard";


export default function Home() {
 const product = {
  image: 'https://images.unsplash.com/photo-1606813902911-0d6e5979cbbf?auto=format&fit=crop&w=800&q=80',
  title: 'Wireless Bluetooth Headphones',
  description: 'Experience crystal-clear sound and deep bass with our wireless Bluetooth headphones. Perfect for music, calls, and travel — with up to 20 hours of battery life.',
};


  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <ProductCard
        image={product.image}
        title={product.title}
        description={product.description}
      />
    </main>
  );
}
