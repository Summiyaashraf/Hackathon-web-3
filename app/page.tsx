'use client';
import { Hero, Navbar } from './components';
import About from './about/page';
import Contact from './contact/page';
import Header from './components/Header';
import ProductsList from './components/ProductList';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Header />
      <Hero />
      <ProductsList />
      <About />
      <Contact />
    </div>
  );
}

