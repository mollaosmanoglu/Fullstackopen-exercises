import {useState} from 'react'

// Generates a random integer between min and max specified.
const RandomInt = (min, max) => {
    const minimum = Math.ceil(min)
    const maximum = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const Header = ({text}) => {
    return (
        <h1>{text}</h1>
    )
}

const MaxValue = ({votes, anecdotes}) => {
    const maxValue = Math.max(...votes)
    const maxIndex = votes.indexOf(maxValue)
    
    return (
    <div>
        <p>{anecdotes[maxIndex]}</p>
        <p> has {votes[maxIndex]} votes</p>
    </div>
    )
}

const App = () => {
    const anecdotes = [
      'If it hurts, do it more often.',
      'Adding manpower to a late software project makes it later!',
      'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      'Premature optimization is the root of all evil.',
      'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
      'The only way to go fast, is to go well.'
    ]

    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

    const ChangeText = () => setSelected(RandomInt(0, anecdotes.length - 1))
    const ChangeVote = (index) => {
        let newNumbers = [...votes]

        if (index === 0) {
            newNumbers[index] += 1
        }
        
        else if (index === 1) {
            newNumbers[index] += 1
        }
        
        else if (index === 2) {
            newNumbers[index] += 1
        }
        
        else if (index === 3) {
            newNumbers[index] += 1
        }
        
        else if (index === 4) {
            newNumbers[index] += 1
        }
        
        else if (index === 5) {
            newNumbers[index] += 1
        }

        else if (index === 6) {
            newNumbers[index] += 1
        }

        else if (index === 7) {
            newNumbers[index] += 1
        }
        
        else {
            throw new Error(`Please enter a value between 0 and ${votes.length - 1}`)
        }

        setVotes(newNumbers)
    }

    return (
        <div>
            <Header text={'Anecdote of the day'}/>
            <p>{anecdotes[selected]}</p>
            <p>has {votes[selected]} votes</p>
            <button onClick={() => ChangeVote(selected)}>vote</button>
            <button onClick={ChangeText}>next anecdote</button>
            <Header text={'Anecdote with the most votes'}/>
            <MaxValue votes={votes} anecdotes={anecdotes}/>
        </div>
    )
}

export default App

