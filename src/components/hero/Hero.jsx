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
       Sou Amanda Lamin, psicanalista especializada em atendimentos individuais e
       rodas de conversa voltadas  para empresas.
       Meu objetivo é promover a saúde mental e o bem-estar emocional de cada pessoa.
       </p>
       <a href="amandamlamim@gmail.com">Entre em contato!!</a>
    </div>
   < img src={getImagURL('logo.png')} alt="hero"  />
   <div className={Styles.topBlur} />
    <div className={Styles.bottomBlur} />
  </section>
  );
};
