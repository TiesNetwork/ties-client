import { clipboard } from 'electron';

/** Components **/
import Button from './Button';
import Icon from './Icon';

function Copy({ className, label, value }) {
  return (
    <Button
      className={classNames(className, styles.Copy)}
      color={Button.COLOR.CUSTOM}
      onClick={() => clipboard.writeText(value)}
    >
      <Icon
        className={styles.CopyIcon}
        type={Icon.TYPE.COPY}
      />

      <div className={styles.CopyContainer}>
        {label || value}
      </div>
    </Button>
  )
}

export default Copy;
