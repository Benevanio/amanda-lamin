import React, { useEffect, useState } from 'react';
import { IoIosMenu } from "react-icons/io";
import { getImagURL } from '../../utils/utils';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.Navbar}>
      <img src={getImagURL('logo.png')} alt="menu" className={styles.logo} />
      <div className={styles.menu}>
        {isMobile && ( 
          <IoIosMenu className={styles.menuIcon} onClick={toggleMenu} />
        )}
        <ul className={`${styles.menuItems} ${menuOpen ? styles.active : ''}`}>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#">Serviços</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </div>
    </nav>
  );
};
