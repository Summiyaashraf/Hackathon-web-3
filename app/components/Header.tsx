// components/Header.tsx

import Link from 'next/link';

const Header = () => {
  return (
    <header className="relative w-full h-[400px] bg-cover bg-center" >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Ruhi Resin Art</h1>
        <p className="text-xl mb-6">Unique and handcrafted resin art pieces that transform your space.</p>
        
        {/* Use Link directly without wrapping an <a> tag */}
        <Link href="/contact" className="bg-blue-600 px-6 py-2 rounded-md text-white font-semibold hover:bg-blue-700">
          Order Now
        </Link>
      </div>
    </header>
  );
};

export default Header;
