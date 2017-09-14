/** Components **/
import Icon from '../../Icon';

function FormCheckbox({ checked, id, label, name, onChange, value }) {
  return (
    <div className={styles.FormCheckbox}>
      <label
        className={styles.FormCheckboxLabel}
        htmlFor={id}
      >
        <div className={styles.FormCheckboxControl}>
          {!!value && (
            <Icon
              className={styles.FormCheckboxControlIcon}
              type={Icon.TYPE.CHECK}
            />
          )}
        </div>

        {label || name}

        <input
          checked={checked}
          className={styles.FormCheckboxInput}
          id={id}
          name={name}
          onChange={onChange}
          type="checkbox"
          value={!!value}
        />
      </label>
    </div>
  );
}

export default FormCheckbox
