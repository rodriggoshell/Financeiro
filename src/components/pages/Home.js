import styles from '../layout/styles/Home.module.css';
import cofre from '../../assets/savings.svg';

import LinkButton from '../layout/LinkButton';

function Home(){
    return(
      <section className={styles.home_container}>
        <h1>Bem-Vindo ao <span>Costs</span></h1>
        <p>Comece a gerenciar os seus projetos agora mesmo!</p>
        <LinkButton to="/projetos" text="Criar Projetos" />
        <img src={cofre} alt="um cofre de um porco" />
      </section>
    );
}

export default Home;
