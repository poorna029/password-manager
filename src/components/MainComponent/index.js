import {Component} from 'react'
import InputForm from '../InputForm'
import PasswordContainer from '../PasswordContainer'
import './index.css'

class MainComponent extends Component {
  state = {list: []}

  listFn = a => {
    this.setState(prev => ({list: [...prev.list, a]}))
    //
  }

  modifyList = g => {
    const {list} = this.state
    const newList = list.filter(x => x.id !== g)
    this.setState({list: newList})
  }

  render() {
    const {list} = this.state
    console.log('nLis', list)
    return (
      <div className="total">
        <img
          className="appLogo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <InputForm listFunction={this.listFn} />
        <PasswordContainer nLis={list} modifyFn={this.modifyList} />
      </div>
    )
  }
}

export default MainComponent
