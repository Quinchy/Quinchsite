import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [width, setWidth] = useState('25rem');

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } 
    else {
      setScrolled(false);
    }
  };

  const updateWidth = useCallback(() => {
    if (window.innerWidth >= 1024) {
      setWidth(scrolled ? '40rem' : '45rem');
    } 
    else if (window.innerWidth >= 768) {
      setWidth(scrolled ? '33rem' : '38rem');
    } 
    else if (window.innerWidth >= 640) {
      setWidth(scrolled ? '28rem' : '33rem');
    } 
    else if (window.innerWidth >= 512) {
      setWidth(scrolled ? '23rem' : '28rem');
    } 
    else {
      setWidth(scrolled ? '20rem' : '25rem');
    }
  }, [scrolled]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    updateWidth(); // Update width on initial load

    // Add resize event listener to update width on window resize
    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateWidth);
    };
  }, [scrolled, updateWidth]); // Add updateWidth to the dependency array

  return (
    <motion.div
      initial={{ 
        backgroundColor: 'var(--color-background)', 
        width: '25rem', 
        boxShadow: 'none',
        marginTop: 0,
        marginBottom: 0,
      }}
      animate={{
        backgroundColor: scrolled ? 'var(--color-background-opacity2)' : 'var(--color-background)',
        width: width,
        boxShadow: scrolled ? '0px 4px 15px rgba(0, 0, 0, 0.7)' : 'none',
        marginTop: scrolled ? '0.5rem' : 0,
        marginBottom: scrolled ? '0.5rem' : 0,
      }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}
      className="fixed top-0 left-1/2 transform -translate-x-1/2 z-[5] py-2 rounded-2xl"
    >
      <div className="flex justify-center items-center xl:px-[15rem] gap-4 sm:gap-12 md:gap-16 lg:gap-24 text-lg tracking-tighter font-semibold text-[--color-main-light]">
        <a href="#" className="px-4 md:px-6 py-3 rounded-3xl hover:bg-[--color-main-light-opacity2] ease-in-out duration-300">home</a>
        <a href="#about-section" className="px-4 md:px-6 py-3 rounded-3xl hover:bg-[--color-main-light-opacity2] ease-in-out duration-300">about</a>
        <a href="#projects-section" className="px-4 md:px-6 py-3 rounded-3xl hover:bg-[--color-main-light-opacity2] ease-in-out duration-300">projects</a>
      </div>
    </motion.div>
  );
};

export default Navbar;