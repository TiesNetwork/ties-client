import { Component } from 'react'
import { Link as RouterLink } from 'react-router-dom'

export default class Link extends Component {
  render() {
    return (
      <RouterLink {...this.props} />
    )
  }
}
