import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

// Define Product Type
interface Product {
  name: string;
  price: number;
  slug: { current: string };
  images?: Array<{
    _id: string;
    asset: {
      _type: string;
      url: string;
      _ref?: string;  // 🛠️ _ref is now optional to avoid errors
    };
  }>;
}

interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
  const cartItem = {
    name: product.name,
    price: product.price,
    quantity: 1,
    image:
      Array.isArray(product.images) && product.images.length > 0
        ? urlForImage(product.images[0].asset).url()
        : "/default-image.jpg", // Fallback image
  };

  return (
    <div className="bg-white pt-10 drop-shadow-md rounded-lg overflow-hidden p-4">
      <Link href={`/product/${product.slug.current}`}>  {/* ✅ Fixed template literal issue */}
        <Image
          src={cartItem.image}
          alt={product.name}
          width={220}
          height={100}
          className="object-cover h-32 mx-auto"
          priority={false}
        />
        <div className="text-center py-4">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <h1 className="text-xl text-gray-500 font-bold">${product.price}</h1>
        </div>
      </Link>
    </div>
  );
};

export default Card;
