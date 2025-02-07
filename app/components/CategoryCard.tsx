import Image from "next/image";

interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
}

const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <Image
        src={category.image}
        alt={category.name}
        width={300} // Adjust as needed
        height={160} // Adjust as needed
        className="w-full h-40 object-cover rounded-lg"
        priority // Ensures optimized loading
      />
      <h2 className="text-xl font-bold mt-2">{category.name}</h2>
      <p className="text-gray-600">{category.description}</p>
    </div>
  );
};

export default CategoryCard;
