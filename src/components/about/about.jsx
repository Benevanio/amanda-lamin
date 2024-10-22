import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { MdMarkEmailUnread } from "react-icons/md";
import Styles from './about.module.css'; // Importar o CSS correspondente

export const About = () => { 
  return (
    <section className={Styles.aboutContainer}>
      <h2 className={Styles.title}>Sobre Mim</h2>
      
      <div className={Styles.cardsContainer}>
        {/* Card de Serviços */}
        <div className={Styles.card}>
          <h3>Serviços Oferecidos</h3>
          <p>
            Sou psicanalista, oferecendo atendimentos individuais e rodas de conversas para empresas sobre saúde mental.
          </p>
          <p><strong>Benefícios do Atendimento Online:</strong></p>
          <ul>
            <li>Flexibilidade de horário e local</li>
            <li>Redução de custos</li>
            <li>Atendimento seguro e protegido</li>
            <li>Ajuda com a timidez</li>
          </ul>
        </div>

        {/* Card de Formação */}
        <div className={Styles.card}>
          <h3>Formação</h3>
          <p>
            Psicóloga formada há 5 anos pelo Centro Universitário Estácio de São José.
            <br />
            Psicanalista em fase final da formação pelo CETEP - Centro de Estudos de Terapia e Psicanálise de Florianópolis.
          </p>
        </div>

        {/* Card de Contato */}
        <div className={Styles.card}>
          <h3>Contato</h3>
          <p>
            WhatsApp: <a href="https://wa.me/5548991151734" rel="noopener noreferrer" target="_blank">
                <IoIosContact className={Styles.icon} /> 
            </a>
          </p>
          <p>
            Email: <a href="mailto:amandamlamim@gmail.com" rel="noopener noreferrer">
                <MdMarkEmailUnread className={Styles.icon} />
            </a>
          </p>
          <p>
            Instagram: <a href="https://www.instagram.com/psi_amandaml/" rel="noopener noreferrer" target="_blank">
                <FaInstagram className={Styles.icon} />
            </a>
          </p>
        </div>

        {/* Card de Chamada para Ação */}
        <div className={Styles.card}>
          <h3>Marque uma Consulta</h3>
          <p>Agende uma consulta ou palestra sobre saúde mental diretamente comigo!</p>
        </div>
      </div>
    </section>
  );
};
