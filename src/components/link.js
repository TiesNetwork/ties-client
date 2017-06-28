import { Link as RouterLink } from 'react-router-dom'

export default class Link extends React.Component {
  render() {
    return (
      <RouterLink {...this.props} />
    )
  }
}
