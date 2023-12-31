// Write your code here
import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  render() {
    const {eachDest} = this.props
    const {imgUrl, name} = eachDest
    const jsxElement = (
      <li className="li-container">
        <img src={imgUrl} alt={name} className="dest-image" />
        <p className="dest-name">{name}</p>
      </li>
    )
    return jsxElement
  }
}
export default DestinationItem
