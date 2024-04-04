import {useState, useEffect} from 'react'
import personService from './services/persons.js'
import Header from './components/Header/Header.jsx';
import Filter from './components/Filter/Filter.jsx';
import PersonForm from './components/PersonForm/PersonForm.jsx';
import PersonList from './components/PersonList/PersonList.jsx';
import {Success, Error} from './components/Notification/Notification.jsx';

const App = () => {
    // Here we save the contact details of the persons //
    const [persons,
        setPersons] = useState([])
    const [filterText,
        setFilterText] = useState('')
    const [newName,
        setNewName] = useState('')
    const [newNumber,
        setNewNumber] = useState('')
    const [completionMessage,
        setCompletionMessage] = useState(null)
    const [errorMessage,
        setErrorMessage] = useState(null)

    // Here we fetch the data from the JSON server
    useEffect(() => {
        personService
            .getAll()
            .then(response => {
                setPersons(response.data)
            })
    }, [])

    // This is a function that appends person data to the JSON server //
    const addNote = (event) => {
        event.preventDefault()
        const new_person = {
            name: newName,
            number: newNumber
        }

        // If the name is already in the phonebook we ask the user to proceed with
        // changing the number //
        if (persons.map(person => person.name).includes(new_person.name)) {

            const result = window.confirm(`${new_person.name} is already added to phonebook, replace the old number with a new one?`)
            const id_number = persons.find(person => person.name === new_person.name)
                ?.id

            if (result) {
                personService
                    .update(id_number, new_person)
                    .then(response => {
                        setPersons(persons.map(person => person.id !== id_number
                            ? person
                            : response.data))
                        console.log(response.data)
                    })

            } else {
                console.log('Action aborted')
                return
            }
        }

        // If no value in either input field an alert message pop ups
        if (new_person.name === '' || new_person.number === '') {
            alert('Please fill out all fields')
            return
        }

        // Add data to the JSON server and create a completion message
        personService
            .create(new_person)
            .then(response => {
                setPersons(persons.concat(response.data))
                setNewName('')
                setNewNumber('')
                setCompletionMessage('Added ' + new_person.name)
                setTimeout(() => {
                    setCompletionMessage(null)
                }, 5000)

            })

        console.log(completionMessage)

    }

    // This functions deletes person data from the JSON server //
    const deleteNote = (id) => {
        const result = window.confirm('Delete this value?')
        const new_person = persons.filter(person => person.id === id)

        if (result) {
            personService
                .remove(id)
                .then(response => {
                    setPersons(prevPersons => prevPersons.filter(person => person.id !== id))
                })
                .catch(error => {
                    if (error.response && error.response.status === 404) {
                        setPersons(prevPersons => prevPersons.filter(person => person.id !== id))
                        console.log('Person was already deleted')
                        setErrorMessage('Information of ' + new_person[0].name + ' has already been removed from server')
                        setTimeout(() => {
                            setErrorMessage(null)
                        }, 5000)
                    } else {
                        console.error('Error deleting person:', error)
                    }
                })
        } else {
            console.log('Action cancelled')
        }
    }

    // These three functions are used in the input box and track the typing of the
    // user //
    const handleNoteChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleNumberchange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    const handleFilterchange = (event) => {
        console.log(event.target.value)
        setFilterText(event.target.value)
    }

    return (
        <div>
            <Header text="Phonebook"/>
            <Success message={completionMessage}/>
            <Error message={errorMessage}/>
            <Filter filterText={filterText} handleFilterchange={handleFilterchange}/>
            <Header text="Add a new"/>
            <PersonForm
                addNote={addNote}
                newName={newName}
                newNumber={newNumber}
                handleNoteChange={handleNoteChange}
                handleNumberchange={handleNumberchange}/>
            <Header text="Numbers"/>
            <PersonList persons={persons} filterText={filterText} deleteNote={deleteNote}/>
        </div>
    )
}

export default App
