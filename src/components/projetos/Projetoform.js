import styles from '../layout/styles/Projetoform.module.css';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

function Projetoform({btnText}) {
    return(
      <form className={styles.form}>
        <div> 
          <Input type="text" text="Nome do projeto"
            name="name" placeholder="Insira o nome do projeto"
          />
        </div>
        <div>
          <Input type="number" text="Orçamento do projeto"
            name="valor total" placeholder="Insira orçamento total"
          />
        </div>
        <div>
          <Select name="categoria_id" text="Selecione a categoria" />
        </div>
        <div>
          <SubmitButton text={btnText}/>
        </div>
      </form>
    );
}

export default Projetoform;
