import {Component} from 'react'
import PasswordItem from '../PasswordItem'
import NoPasswords from '../NoPasswords'
// import PasswordItem from '../PasswordItem'
import './index.css'

// first implement header
// next show passwords select element
// password items display and if no passwords show no passwords element

class PasswordContainer extends Component {
  state = {isTrue: false, length: ''}

  retrieveList = d => {
    const {modifyFn} = this.props
    modifyFn(d)
  }

  getSearchResults = e => {
    const searchValue = e.target.value
    console.log(searchValue.length)
    this.setState({length: searchValue.toLowerCase()})
  }

  checkboxChange = () => {
    this.setState(p => ({
      isTrue: !p.isTrue,
    }))
  }

  render() {
    const {isTrue, length} = this.state
    const {nLis} = this.props
    console.log('given_list', nLis)
    let reqList
    if (length.length > 0) {
      console.log('coming')
      reqList = nLis.filter(p => {
        console.log('map', p.website)
        if (p.website.toLowerCase().includes(length)) {
          return p
        }
        return null
      })
    } else {
      reqList = nLis
    }
    console.log('outputList', reqList)

    return (
      <div className="passwordContainer">
        <div className="header">
          <div className="passwordsCount">
            <h1 className="YourPara">Your Passwords</h1>
            <p className="passwordCountPara">{nLis.length}</p>
          </div>
          <div className="searchBar">
            <img
              alt="search"
              className="searchImage"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
            />
            <hr className="searchHr" />
            <input
              className="inputSearch"
              type="search"
              placeholder="Search"
              onChange={this.getSearchResults}
            />
          </div>
        </div>
        <hr className="HR" />

        <ul className="showPasswords">
          <div className="showPasswordHRalign">
            <input
              className="checkbox"
              type="checkbox"
              onClick={this.checkboxChange}
              id="show"
            />
            <label htmlFor="show" className="passwordSpace">
              Show Passwords
            </label>
          </div>
        </ul>

        {/* passwordItem */}
        {reqList.length !== 0 ? (
          reqList.map(x => (
            <PasswordItem
              fu={isTrue}
              l={x}
              key={x.id}
              del={this.retrieveList}
            />
          ))
        ) : (
          <NoPasswords />
        )}
      </div>
    )
  }
}

export default PasswordContainer
