import React from 'react';
import { getImagURL } from '../../utils/utils';
import Styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={Styles.container}>
      <div className={Styles.content}>
        <h1 className={Styles.title}>
          Bem-vindo ao Meu Consultório Virtual
        </h1>
        <p className={Styles.description}>
        Sou Amanda Mazzuchetti Lamim, psicóloga e psicanalista em formação, especializada em atendimentos individuais. Acredito no poder do autoconhecimento e na transformação que a terapia pode trazer. Meu objetivo é ajudá-lo(a) a descobrir novas perspectivas e viver com mais segurança e autenticidade. Vamos juntos nessa jornada!
        </p>
        
        <a 
          href="https://wa.me/5548991151734" 
          className={Styles.contactButton} 
          target="_blank" 
          rel="noopener noreferrer" 
        >
          Entre em contato!!
        </a>
      </div>
      <img src={getImagURL('1.png')} alt="hero" className={Styles.heroIMG} />
      <div className={Styles.bottomBlur} />
    </section>
  );
};
