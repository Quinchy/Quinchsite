import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [width, setWidth] = useState('25rem'); // Set initial width based on the mobile default

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const updateWidth = () => {
    if (window.innerWidth >= 1024) {
      setWidth(scrolled ? '40rem' : '45rem');
    } else {
      setWidth(scrolled ? '20rem' : '25rem');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    updateWidth(); // Update width on initial load

    // Add resize event listener to update width on window resize
    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateWidth);
    };
  }, [scrolled]); // Dependency array includes scrolled to update the width on scroll

  return (
    <motion.div
      initial={{ 
        backgroundColor: 'var(--color-background)', 
        width: '25rem', 
        boxShadow: 'none',
        marginTop: 'none',
        marginBottom: 'none',
      }}
      animate={{
        backgroundColor: scrolled ? 'var(--color-background-opacity2)' : 'var(--color-background)',
        width: width,
        boxShadow: scrolled ? '0px 4px 15px rgba(0, 0, 0, 0.7)' : 'none',
        marginTop: scrolled ? '0.5rem' : 'none',
        marginBottom: scrolled ? '0.5rem' : 'none',
        transition: {
          duration: 0.3,
          backgroundColor: { duration: 0.3 },
          width: { duration: 0.3 },
          boxShadow: { duration: 0.3 },
          marginTop: { duration: 0.3 },
          marginBottom: { duration: 0.3 },
          ease: 'easeInOut',
        },
      }}
      className="fixed top-0 left-1/2 transform -translate-x-1/2 z-[5] py-2 rounded-2xl"
    >
      <div className="flex justify-center items-center md:px-[15rem] gap-4 md:gap-20 text-lg tracking-tighter font-semibold text-[--color-main-light]">
        <a href="" className="px-4 md:px-6 py-3 md:rounded-3xl hover:bg-[--color-main-light-opacity2] ease-in-out duration-300">home</a>
        <a href="" className="px-4 md:px-6 py-3 rounded-3xl hover:bg-[--color-main-light-opacity2] ease-in-out duration-300">about</a>
        <a href="" className="px-4 md:px-6 py-3 rounded-3xl hover:bg-[--color-main-light-opacity2] ease-in-out duration-300">projects</a>
      </div>
    </motion.div>
  );
};

export default Navbar;
