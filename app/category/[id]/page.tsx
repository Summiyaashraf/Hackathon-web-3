"use client";
import { useParams } from "next/navigation";
import Image from "next/image";

const categories = {
  "wall-clock": {
    name: "Wall Clock",
    description: "Beautiful handmade resin wall Clock to decorate your Wall.",
    image: "/clock.jpeg", 
  },
  "jewelry": {
    name: "Jewelry",
    description: "Elegant resin jewelry pieces, perfect for any occasion.",
    image: "/Jewllery (2).jpeg", 
  },
  "home-decor": {
    name: "Home Décor",
    description: "Unique resin home décor items to enhance your living space.",
    image: "/home-decor (2).jpeg", 
  },
  "customized-items": {
    name: "Customized Items",
    description: "Personalized resin art products made just for you.",
    image: "/customize-item.jpeg",
  },
  "quran-holder": { 
    name: "QURAN Holder",
    description: "Elegant customized Quran holder, designed with love and devotion for a sacred touch!",
    image: "/Quran holder.jpeg", 
  },
  "jewelry-box": { 
    name: "Jewelry Box",
    description: "Elegant customized jewelry box to keep your treasures safe in style!",
    image: "/Jewllery Box.jpeg", 
  },
  "customize-pen": { 
    name: "Customize Pen",
    description: "Personalized pens crafted with elegance, perfect for gifts and daily use!",
    image: "/Pen.jpeg", 
  },
  "book-mark": { 
    name: "Book Mark",
    description: "Personalized bookmark, adding a unique touch to your reading experience!",
    image: "/Book mark.jpeg",
  },
};

  

export default function CategoryPage() {
  const params = useParams();
  const category = categories[params.id as keyof typeof categories];

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-red-600">Category Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
      <Image
        src={category.image}
        alt={category.name}
        width={400} 
        height={300}
        className="rounded-lg shadow-lg mb-4"
      />
      <p className="text-gray-600 text-lg">{category.description}</p>
    </div>
  );
}
