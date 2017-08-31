/** Components **/
import Recipient from '../../../Recipient';

const FormRecipientsItem = props => (
  <div className={styles.FormRecipientsItem}>
    <Recipient {...props} />
  </div>
);

export default FormRecipientsItem
