import {Component} from 'react'
import './index.css'

import {v4 as id} from 'uuid'

class InputForm extends Component {
  state = {password: '', website: '', username: ''}

  Password = e => {
    // console.log(e.target.value)
    this.setState({password: e.target.value})
  }

  WebsiteName = e => {
    // console.log(e.target.value)
    this.setState({website: e.target.value})
  }

  UserName = e => {
    // console.log(e.target.value)
    this.setState({username: e.target.value})
  }

  submitData = e => {
    e.preventDefault()
    const {username, website, password} = this.state

    const n = {username, website, password, isTrue: false, id: id()}

    const {listFunction} = this.props
    listFunction(n)
    this.setState({password: '', website: '', username: ''})
  }

  render() {
    const {username, website, password} = this.state

    // const {fn} = this.props

    // console.log(username, website, password, list)
    return (
      <div className="Input">
        <div className="Add">
          <form>
            <h1 className="AddHeading">Add New Password</h1>
            <div className="inputContainer">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
              />
              <hr className="hr1" />
              <input
                type="text"
                placeholder="Enter Website"
                name="website"
                onChange={this.WebsiteName}
                value={website}
              />
            </div>
            <div className="inputContainer">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
              />
              <hr className="hr1" />
              <input
                type="text"
                placeholder="Enter Username"
                name="username"
                onChange={this.UserName}
                value={username}
              />
            </div>
            <div className="inputContainer">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
              />
              <hr className="hr1" />
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                onChange={this.Password}
                value={password}
              />
            </div>
            <div className="button">
              <button type="submit" onClick={this.submitData}>
                Add
              </button>
            </div>
          </form>
        </div>
        <img
          className="passwordManager"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
          alt="password manager"
        />
      </div>
    )
  }
}

export default InputForm
