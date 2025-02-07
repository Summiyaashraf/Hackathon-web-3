import Link from "next/link";
import CategoryCard from "../components/CategoryCard";

const categories = [
  {
    id: "wall-clock",
    name: "Wall Clock",
    image: "/clock.jpeg",
    description: "Beautiful handmade resin wall Clock to decorate your Wall.",
  },
  {
    id: "jewelry",
    name: "Jewelry",
    image: "/Jewllery (2).jpeg",
    description: "Elegant resin jewelry pieces, perfect for any occasion.",
  },
  {
    id: "home-decor",
    name: "Home Décor",
    image: "/home-decor (2).jpeg",
    description: "Unique resin home décor items to enhance your living space.",
  },
  {
    id: "customized-items",
    name: "Customized Items",
    image: "/customize-item.jpeg",
    description: "Personalized resin art products made just for you.",
  },
  {
    id: "quran-holder", 
    name: "QURAN Holder",
    image: "/Quran holder.jpeg",
    description: "Elegant customized Quran holder, designed with love and devotion for a sacred touch!",
  },
  {
    id: "jewelry-box",
    name: "Jewelry Box",
    image: "/Jewllery Box.jpeg",
    description: "Elegant customized jewelry box to keep your treasures safe in style!",
  },
  {
    id: "customize-pen",  
    name: "Customize Pen",
    image: "/Pen.jpeg",
    description: "Personalized pens crafted with elegance, perfect for gifts and daily use!",
  },
  {
    id: "book-mark", 
    name: "Book Mark",
    image: "/Book mark.jpeg",
    description: "Personalized bookmark, adding a unique touch to your reading experience!",
  },
];

export default function CategoriesPage() {
  return (
    <div className="container mx-auto py-12 pt-[90px]">
      <h1 className="text-3xl font-bold text-center mb-8">Our Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link key={category.id} href={`/category/${category.id}`}>
            <CategoryCard category={category} />
          </Link>
        ))}
      </div>
    </div>
  );
}
