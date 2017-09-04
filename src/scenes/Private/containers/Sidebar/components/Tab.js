function SidebarTab({ onClick, selected, title }) {
  return (
    <div
      className={classNames(styles.SidebarTab, selected && styles.SidebarTabSelected)}
      onClick={() => onClick(title)}
    >
      <div className={styles.SidebarTabTitle}>
        {title}
      </div>
    </div>
  );
}

export default SidebarTab;
