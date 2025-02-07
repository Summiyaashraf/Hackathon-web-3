// components/ProductsList.tsx
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import Products from './Products';

const fetchProducts = async () => {
    return await client.fetch(groq`*[_type=="product"]`);
};

const ProductsList = async () => {
    const products = await fetchProducts();

    return <Products products={products} />;
};

export default ProductsList;
