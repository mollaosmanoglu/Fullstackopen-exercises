import { useState } from 'react'

const Header = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const Statistics = ({good}) => {
  return (
    <div>
      <p>good {good} </p>
      <p>neutral </p>
      <p>bad </p>
    </div>
  )
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const incrementbyone = () => setGood(good + 1)

  // const [neutral, setNeutral] = useState(0)
  // const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text={'give feedback'}/>
      <button onClick={incrementbyone}>
        good
      </button>
      <button>
        neutral
      </button>
      <button>
        bad
      </button>
      <Header text={'statistics'}/>
      <Statistics good={good}/>
    </div>
  )
}

export default App