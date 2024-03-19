import {useState} from 'react'

const Header = ({text}) => {
    return (
        <h1>{text}</h1>
    )
}


const Statisticline = ({text, value}) => {
    if (text === 'positive') {
      return (
        <table>
          <tbody>  
            <tr>
              <td>{text}</td>
              <td>{value} % </td>
            </tr>
          </tbody>
        </table>
      )
    }
    return (
      <table>
        <tbody>  
          <tr>
            <td>{text}</td>
            <td>{value}</td>
          </tr>
        </tbody>
      </table>
    )
}

const Statistics = ({good, neutral, bad}) => {
    // Displays various statistical values.
    if (good === 0 && neutral == 0 && bad == 0) {
        return <p>
            No feedback given
        </p>
    }
    return (
        <div>
            <Statisticline text={'good'} value={good}/>
            <Statisticline text={'neutral'} value={neutral}/>
            <Statisticline text={'bad'} value={bad}/>
            <Statisticline text={'all'} value={good + neutral + bad}/>
            <Statisticline text={'average'} value={((good - bad) / (good + neutral + bad)).toFixed(2)}/>
            <Statisticline text={'positive'} value={((good / (good + neutral + bad)) * 100).toFixed(1)}/>
        </div>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [clicks, setClicks] = useState({good: 0, neutral: 0, bad: 0})

    // Functions that increment + 1 to their respective keys.
    const handleGoodClick = () => {
        const newClicks = {
            ...clicks,
            good: clicks.good + 1
        }
        setClicks(newClicks)
    }

    const handleNeutralClick = () => {
        const newClicks = {
            ...clicks,
            neutral: clicks.neutral + 1
        }
        setClicks(newClicks)
    }

    const handleBadClick = () => {
        const newClicks = {
            ...clicks,
            bad: clicks.bad + 1
        }
        setClicks(newClicks)
    }

    // Returns page with buttons and increments when pressed on respective buttons
    return (
        <div>
            <Header text={'give feedback'}/>
            <button onClick={handleGoodClick}>
                good
            </button>
            <button onClick={handleNeutralClick}>
                neutral
            </button>
            <button onClick={handleBadClick}>
                bad
            </button>
            <Header text={'statistics'}/>
            <Statistics good={clicks.good} neutral={clicks.neutral} bad={clicks.bad}/>
        </div>
    )
}

export default App