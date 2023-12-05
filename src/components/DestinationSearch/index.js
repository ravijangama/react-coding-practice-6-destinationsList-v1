// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeInputChar = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachDest =>
      eachDest.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const jsxElement = (
      <div className="main-container">
        <div className="bg-container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-container">
            <input
              type="search"
              placeholder="search"
              className="user-input"
              onChange={this.onChangeInputChar}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
              alt="search icon"
              className="search-image"
              value={searchInput}
            />
          </div>
          <ul className="ul-container">
            {searchResults.map(eachDest => (
              <DestinationItem eachDest={eachDest} key={eachDest.id} />
            ))}
          </ul>
        </div>
      </div>
    )
    return jsxElement
  }
}
export default DestinationSearch

