/** Components **/
import Dialog from './components/Item';

function SidebarMessages({ dialogs }) {
  return (
    <div>
      {dialogs && dialogs.length > 0 && (
        <div className={styles.SidebarMessagesContainer}>
          {dialogs.map(dialog => <Dialog {...dialog} key={dialog.address} />)}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  dialogs: _.values(state.entities.dialogs)
});

export default withRouter(connect(mapStateToProps)(SidebarMessages));
