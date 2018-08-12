
const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if(response.status === 200 ) {
        const data = await response.json()
        return data.puzzle
    }else { 
        throw new Error('unable to get puzzle')
    }
}

const getCountry = async (countryCode) => {
    const response = await fetch('//restcountries.eu/rest/v2/all')
    if(response.status === 200 ) {
        const data = await response.json()
        return data.find(country => country.alpha2Code === countryCode)
    }else { 
        throw new Error('unable to get puzzle')
    }
}

const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=ef744cf793b689')
    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error('Unable to fetch country')
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    return getCountry(location.country)  
}

export { getPuzzle as default }