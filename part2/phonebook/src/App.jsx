import {useState} from 'react'

const App = () => {
    const [persons,
        setPersons] = useState([
        {
            name: 'Arto Hellas',
            id: 1
        }
    ])

    const [newName,
        setNewName] = useState('Hello')

    const addNote = (event) => {
        event.preventDefault()
        console.log('button clikced', event.target)

    }

    const handleNoteChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }


    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addNote}>
                <div>
                    name:
                    <input value={newName} onChange={handleNoteChange}/>
                </div>
                <div>
                    <button type="submit" >add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map(person => <p key={person.id}>
                {person.name}
            </p>)}
        </div>
    )
}

export default App
