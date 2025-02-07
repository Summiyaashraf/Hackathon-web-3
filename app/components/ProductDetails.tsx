"use client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

// Define Product Interface
interface Product {
  _id: string;
  name: string;
  price: number;
  images: Array<{ _id: string; asset: { _type: string; url: string } }>;
  quantity?: number;
}

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [selectedResin, setSelectedResin] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [customText, setCustomText] = useState<string>("");
  const [index, setIndex] = useState(0);

  // Safe context usage with null check
  const cartContext = useContext(CartContext);
  if (!cartContext) return <p>Loading...</p>;

  const { cartItems, addProduct, qty } = cartContext;

  console.log(cartItems);

  return (
    <div className="product-details-section">
      <div className="product-details-container">
        {/* Left Side */}
        <div>
          {/* TOP Image */}
          <div className="h-[450px] flex items-center mb-[25px]">
            <Image
              loader={() => urlForImage(product.images[index].asset).url()}
              src={urlForImage(product.images[index].asset).url()}
              alt={product.name || "Product Image"} // ✅ Safe fallback for accessibility
              width={350}
              height={350}
              className="object-cover mx-auto"
            />
          </div>

          {/* Thumbnail Images */}
          <div className="small-images-container">
            {product.images.map((item, i) => (
              <Image
                key={item._id || `thumb-${i}`}
                loader={() => urlForImage(item.asset).url()}
                src={urlForImage(item.asset).url()}
                alt={`${product.name} Thumbnail ${i + 1}`} // ✅ Better alt text for thumbnails
                width={220}
                height={100}
                className="object-cover h-32 mx-auto border rounded-xl hover:cursor-pointer"
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-8 md:pt-7">
          <div className="flex flex-col gap-4">
            <div className="text-3xl font-bold">{product.name}</div>
            <div className="text-xl font-medium">Rs. {product.price}</div>
          </div>

          {/* Resin Type Selection */}
          <div className="flex gap-4 items-center">
            <h3>Resin Type</h3>
            <select
              value={selectedResin}
              onChange={(e) => setSelectedResin(e.target.value)}
              className="border p-2"
            >
              <option value="Clear">Clear Resin</option>
              <option value="Epoxy">Epoxy Resin</option>
              <option value="UV">UV Resin</option>
            </select>
          </div>

          {/* Resin Color Selection */}
          <div className="flex gap-4 items-center">
            <h3>Color</h3>
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="border p-2"
            >
              <option value="Transparent">Transparent</option>
              <option value="Golden">Golden</option>
              <option value="Silver">Silver</option>
              <option value="Blue">Blue</option>
              <option value="Red">Red</option>
              <option value="Pink">Pink</option>
              <option value="Yellow">Yellow</option>
              <option value="Orange">Orange</option>
              <option value="Black">Black</option>
              <option value="Sky">Sky</option>
              <option value="Purple">Purple</option>
              <option value="Green">Green</option>
            </select>
          </div>

          {/* Custom Text Option */}
          <div>
            <h1>Add Your Text</h1>
            <input
              type="text"
              placeholder="Enter your text here..."
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              className="border p-2"
            />
          </div>

          {/* Add To Cart Button with Quantity Fix */}
          <button
            className="btn add-to-cart"
            onClick={() => addProduct({ ...product, quantity: qty }, qty)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
