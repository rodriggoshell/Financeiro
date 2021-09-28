import styles from '../layout/styles/Projetos.module.css';
import Projetoform from '../projetos/Projetoform';

function Projetos() {
    return(
      <div className={styles.novo_projeto}>
        <h1>Criar Projeto</h1>
        <p>Crie seu projeto para depois adicionar os serviços</p>
        <Projetoform btnText="Criar Projeto"/>
      </div>
    );
}


export default Projetos;
