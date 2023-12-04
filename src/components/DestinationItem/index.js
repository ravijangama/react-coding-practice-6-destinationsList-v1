// Write your code here
import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  render() {
    const {eachDest} = this.props
    const {imgUrl, name} = eachDest
    const jsxElement = (
      <li>
        <img src={imgUrl} alt="search icon" />
        <p>{name}</p>
      </li>
    )
    return jsxElement
  }
}
export default DestinationItem
