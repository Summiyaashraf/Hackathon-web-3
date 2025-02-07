"use client";

import { useParams } from 'next/navigation';
import { Navbar, ProductDetails } from '../../components';
import React, { useEffect, useState } from 'react';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';

const ProductPage = () => {
  const { slug } = useParams(); // useParams directly use karein
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const products = await client.fetch(groq`*[_type=="product"]`);
      const foundProduct = products.find((p: any) => p.slug.current === slug);
      setProduct(foundProduct);
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
