import React from 'react';

const Filter = ({filterText, handleFilterchange}) => {
    return (
        <div>
            filter shown with <input value={filterText} onChange={handleFilterchange}/>
        </div>
    )
}

export default Filter