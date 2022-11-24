// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, timeElapsedInSeconds: 0}

  componentDidMount() {
    clearInterval(this.timeInterval)
  }

  onResetTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({timeElapsedInSeconds: false})
  }

  onStopTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  updateTimer = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onStartTimer = () => {
    this.timeInterval = setInterval(this.updateTimer, 1000)
    this.setState({isTimerRunning: true})
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSecondes = () => {
    const {timeElapsedInSeconds} = this.state
    const secondes = Math.floor(timeElapsedInSeconds % 60)

    if (secondes < 10) {
      return `0${secondes}`
    }
    return secondes
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSecondes()}`

    return (
      <div className="bg-container">
        <h1 className="main-header">Stopwatch</h1>
        <div className="stopwatch-container">
          <div className="header-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="clock-img"
            />
            <p className="timer-header">Timer</p>
          </div>
          <h1 className="stopwatch-timer">{time}</h1>
          <div className="timer-buttons">
            <button
              type="button"
              className="start-button button"
              onClick={this.onStartTimer}
              disabled={isTimerRunning}
            >
              Start
            </button>
            <button
              type="button"
              className="stop-button button"
              onClick={this.onStopTimer}
            >
              Stop
            </button>
            <button
              type="button"
              className="reset-button button"
              onClick={this.onResetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
