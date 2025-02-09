import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Main Navigation */}
      <nav className='w-full flex items-center justify-between py-5 bg-black bg-opacity-95 border-b-2 outline-4 border-gray-500 backdrop-blur-sm'>
        <div className='flex flex-shrink-0 items-center'>
          <h2 className='text-white mx-1 text-2xl font-bold'>Vishal Hadiyal</h2>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
