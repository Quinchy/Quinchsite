// components/ui/navbar.tsx

import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
    initial={{ backgroundColor: 'var(--color-background)', width: '25rem', boxShadow: 'none' }}
    animate={{
        backgroundColor: scrolled ? 'var(--color-background-opacity2)' : 'var(--color-background)',
        width: scrolled ? '20rem' : '25rem',
        boxShadow: scrolled ? '0px 4px 15px rgba(0, 0, 0, 0.7)' : 'none',
        transition: {
            duration: 0.3,
            backgroundColor: { duration: 0.3 },
            width: { duration: 0.3 },
            boxShadow: { duration: 0.3 },
            ease: 'easeInOut',
        },
    }}
    className="fixed mt-2 top-0 left-1/2 transform -translate-x-1/2 z-[5] py-5 rounded-xl"
>
    <div className="container mx-auto">
        <div className="flex justify-center items-center gap-4 text-lg tracking-tighter font-semibold text-[--color-main-light]">
            <a href="" className="px-4">Home</a>
            <a href="" className="px-4">About</a>
            <a href="" className="px-4">Projects</a>
        </div>
    </div>
</motion.div>

  );
};

export default Navbar;
