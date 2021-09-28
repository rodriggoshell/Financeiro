import styles from '../layout/styles/Select.module.css';

function Select({ text, name, options, hundleOnChange, value }) {
    return(
      <div className={styles.form_controle}>
        <label htmlFor={name}>{text}:</label>
        <select name={name} id={name}>
          <option>Selecione uma opção</option>
        </select>
      </div>
    );
}

export default Select;
