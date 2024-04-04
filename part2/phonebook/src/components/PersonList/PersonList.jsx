import React from 'react';

// Shows persons in array based on filter, also adds delete note which deletes person details in array
const PersonList = ({persons, filterText, deleteNote}) => {
    const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filterText.toLowerCase()));

    return (
        <div>
            {personsToShow.map(person => (
                <div key={person.id}>
                    {person.name} {person.number}
                    <button onClick={ () => deleteNote(person.id)}>delete</button>
                </div>
            ))}
        </div>
    );
};

export default PersonList