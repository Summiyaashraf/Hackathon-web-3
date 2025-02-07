"use client";

import { useParams } from 'next/navigation';
import { Navbar, ProductDetails } from '../../components';
import React, { useEffect, useState } from 'react';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';

// Define the updated Product type with images as an array of objects
interface Product {
  _id: string;
  name: string;
  slug: { current: string };
  title: string;
  price: number;
  description: string;
  images: { _id: string; asset: { _type: string; url: string } }[]; // Updated images field type
}

const ProductPage = () => {
  const { slug } = useParams(); // useParams directly use karein
  const [product, setProduct] = useState<Product | null>(null); // Updated state type

  useEffect(() => {
    const fetchProduct = async () => {
      const products: Product[] = await client.fetch(groq`*[_type=="product"]`);
      const foundProduct = products.find((p) => p.slug.current === slug);
      setProduct(foundProduct || null);
    };

    fetchProduct();
  }, [slug]);

  if (!product) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <ProductDetails product={product} />
    </>
  );
};

export default ProductPage;
