import React from 'react';
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
        <div className={Styles.card}>
          <h3>Marque uma Consulta</h3>
          <p>Agende uma consulta ou palestra sobre saúde mental diretamente comigo!</p>
        </div>
      </div>
    </section>
  );
};
