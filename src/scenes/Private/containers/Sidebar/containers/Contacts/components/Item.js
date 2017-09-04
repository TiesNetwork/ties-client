import Personal from '../../../../../../../components/Personal';

function SidebarContactsItem(props) {
  return (
    <div
      className={styles.SidebarContactsItem}
      onClick={props.onClick}
    >
      <Personal {...props} size={Personal.SIZE.SMALL} />
    </div>
  )
}

export default SidebarContactsItem;
