
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <p>&copy; {new Date().getFullYear()} @psi_amandaml. Todos os direitos reservados.</p>
        <div className={styles.socialIcons}>
          <a href="https://www.instagram.com/psi_amandaml/profilecard/?igsh=MXA0YTZncGhyODYzbQ==" target="_blank" rel="noopener noreferrer">
            <FaInstagram className={styles.icon} />
          </a>
        </div>
      </div>
    </footer>
  );
};
