import Style from './avatar.scss'

class Avatar extends React.Component {
  render() {
    return (
      <div className={classNames(this.props.className, Style.Avatar)} />
    )
  }
}

Avatar.propTypes = {
  className: PropTypes.string
}

export default Avatar
