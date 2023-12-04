// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  render() {
    const {destinationsList} = this.props
    const jsxElement = (
      <div>
        <h1>Destination Search</h1>
        <input type="search" placeholder="search" />
        <ul>
          {destinationsList.map(eachDest => (
            <DestinationItem eachDest={eachDest} key={eachDest.id} />
          ))}
        </ul>
      </div>
    )
    return jsxElement
  }
}
export default DestinationSearch
