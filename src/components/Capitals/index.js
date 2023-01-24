import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activeCapitalId: countryAndCapitalsList[0].id}

  onChangeInput = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getResultCapital = () => {
    const {activeCapitalId} = this.state
    const capitalResult = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeCapitalId,
    )
    return capitalResult.country
  }

  render() {
    const {activeCapitalId} = this.state
    const result = this.getResultCapital()
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Countries and Capitals</h1>
          <div className="drop-down-container">
            <select
              className="dropdown"
              value={activeCapitalId}
              onChange={this.onChangeInput}
            >
              {countryAndCapitalsList.map(eachCountry => (
                <option
                  key={eachCountry.id}
                  value={eachCountry.id}
                  className="options"
                >
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is Capital of Which country?</p>
          </div>
          <p className="result">{result}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
