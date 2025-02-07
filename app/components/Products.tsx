'use client';

import Card from './Card';

// Define Product Type
interface Product {
  _id: string;
  name: string;
  price: number;  
  images: Array<{ 
    _id: string; 
    asset: { 
      _type: string; 
      url: string;
      _ref?: string;  // 🛠️ Make _ref optional to avoid type mismatches
    }; 
  }>;
  slug: { current: string };  
}

const Products = ({ products }: { products: Product[] }) => {
  return (
    <div className="bg-pink-200 w-full py-12">
      <div className="container mx-auto px-4">
        <div className="py-4">
          <h1 className="text-3xl font-bold">Best Products To Save Memories</h1>
          <h1>Enjoy Up For Beautiful Gifts 😍</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mt-6">
          {products.map((product, index) => (
            <Card key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
