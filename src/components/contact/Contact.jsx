// src/components/contact/Contact.jsx
import React from 'react';
import { FaEnvelope, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Importando ícones
import styles from './Contact.module.css';

export const Contact = () => {
  // Informações em base64
  const whatsappNumberBase64 = btoa("48991151734"); // Número sem espaços
  const emailBase64 = btoa("amandamlamim@gmail.com"); 
  const instagramHandleBase64 = btoa("psi_amandaml"); // Removido o "@" para formar a URL

  // Decodificando os dados em base64
  const whatsappNumber = atob(whatsappNumberBase64);
  const email = atob(emailBase64);
  const instagramHandle = atob(instagramHandleBase64);

  return (
    <div className={styles.contactContainer}>
      <h1>Contato</h1>
      <p>Você pode entrar em contato conosco através dos seguintes canais:</p>
      <div className={styles.cardContainer}>
        <div className={styles.contactCard}>
          <FaWhatsapp className={styles.icon} /> {/* Ícone do WhatsApp */}
          <h2>WhatsApp</h2>
          <p>
            <a 
              href={`https://wa.me/${whatsappNumber}`} // Formato correto para WhatsApp
              target="_blank" 
              rel="noopener noreferrer"
            >
              Enviar Mensagem
            </a>
          </p>
        </div>
        <div className={styles.contactCard}>
          <FaEnvelope className={styles.icon} /> {/* Ícone de E-mail */}
          <h2>E-mail</h2>
          <p>
            <a 
              href={`mailto:${email}`} 
              rel="noopener noreferrer"
            >
              {email}
            </a>
          </p>
        </div>
        <div className={styles.contactCard}>
          <FaInstagram className={styles.icon} /> {/* Ícone do Instagram */}
          <h2>Instagram</h2>
          <p>
            <a 
              href={`https://instagram.com/${instagramHandle}`} // URL do Instagram
              target="_blank" 
              rel="noopener noreferrer"
            >
              @{instagramHandle}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
