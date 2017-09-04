/** Components **/
import Input from './Input';

function FormSelect(props) {
  return (
    <div className={styles.FormSelect}>
      <Input {...props} readOnly />

      <select
        className={styles.FormSelectControl}
        onChange={props.onChange}
        value={props.value}
      >
        {props.children}
      </select>

      <div className={styles.FormSelectCaret} />
    </div>
  );
}

export default FormSelect;
