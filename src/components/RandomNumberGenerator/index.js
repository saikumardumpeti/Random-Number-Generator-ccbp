// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {random: 0}

  generateRandom = () => {
    const randomNo = Math.ceil(Math.random() * 100)
    this.setState({random: randomNo})
    console.log(randomNo)
  }

  render() {
    const {random} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="button" onClick={this.generateRandom}>
            Generate
          </button>
          <p className="random-number">{random}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
