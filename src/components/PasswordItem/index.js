import {Component} from 'react'
import './index.css'

class PasswordItem extends Component {
  deleteFun = () => {
    const {del, l} = this.props
    const {id} = l
    del(id)
  }

  render() {
    const {fu, l} = this.props
    // console.log('item')
    const {username, website, password} = l
    // console.log('ind', name, website, password, fu)

    return (
      <li className="password">
        <div className="passwordLine">
          <div className="firstLetter">
            <p>{website.toUpperCase().slice(0, 1)}</p>
          </div>
          <div className="passwordCol">
            <p className="p">{website}</p>
            <p className="p">{username}</p>
            <p className="p">
              {fu ? (
                password
              ) : (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                  alt="stars"
                  className="stars"
                />
              )}
            </p>
          </div>
          <div className="deleteImageContainer">
            <button
              data-testid="delete"
              className="bu"
              onClick={this.deleteFun}
              type="button"
            >
              <img
                className="deleteImage"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                alt="delete"
              />
            </button>
          </div>
        </div>
      </li>
    )
  }
}

export default PasswordItem
