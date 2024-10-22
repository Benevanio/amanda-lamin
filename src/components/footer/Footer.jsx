
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <p>&copy; {new Date().getFullYear()} @psi_amandaml. Todos os direitos reservados.</p>
        <div className={styles.socialIcons}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className={styles.icon} />
          </a>
          <a href="https://www.instagram.com/psi_amandaml/profilecard/?igsh=MXA0YTZncGhyODYzbQ==" target="_blank" rel="noopener noreferrer">
            <FaInstagram className={styles.icon} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className={styles.icon} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={styles.icon} />
          </a>
        </div>
      </div>
    </footer>
  );
};
