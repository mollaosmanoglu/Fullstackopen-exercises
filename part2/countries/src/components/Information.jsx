import {useState, React} from "react"

const CountryInformation = ({filteredData}) => {
    
    const [selectedCountry, setSelectedCountry] = useState(null)

    const IndividualInformation = ({country}) => {
        
        const languages = country.languages

        return (
            <div>
                <h1>{country.name.common}</h1>
                <p>capital {country.capital}
                    <br/>
                    area {country.area}</p>
                <b>languages:</b>
                <ul>
                   {Object.entries(languages).map(([languageCode, languageName]) => (
                    <li key={languageCode}> {languageName}</li>
                   ))}
                </ul>
                <img src={country.flags.png} alt="Country Flag" width='200' height= '200'/>
            </div>
        )
    }


    if (filteredData.length === 1) {
        
        return (
            <IndividualInformation country={filteredData[0]}/>
        )


    }

    if (filteredData.length <= 10) {
        return (
            <div>
                {filteredData.map(country => (
                    <div key={country.name.common}>
                        {country.name.common} <button onClick={() => setSelectedCountry(country)}>show</button>
                    </div>
                ))}
                {selectedCountry && <IndividualInformation country={selectedCountry} />}

            </div>
        )
    }

    return (
        <div>
            <p>'Too many matches, specify another filter'</p>
        </div>
    )
}

export default CountryInformation