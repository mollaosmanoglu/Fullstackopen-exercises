import {useEffect, useState} from 'react'
import getAll from './persons'
import CountryInformation from './components/Information'

const App = () => {

  const [allData, setAllData] = useState([])
  const [filterText, setFilterText] = useState('')
  
  // Fetch all data from server
  useEffect(() => {
        getAll()
            .then(response => {
              setAllData(response.data)
            })

    }, [])

    // Save filter input
    const handleFilterchange = (event) => {
      setFilterText(event.target.value)
    }

    // Filter data based on input
    const filtered_data = allData.filter(country => country.name.common.toLowerCase().includes(filterText.toLowerCase()))

    return (
        <div>
            <p>
                find countries
                <input value={filterText} onChange={handleFilterchange}></input>
            </p>
            <CountryInformation filteredData={filtered_data}/>
        </div>

    )
}
export default App
