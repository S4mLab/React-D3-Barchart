import { useState, useEffect } from 'react'
import { csv } from 'd3'

const LoadData = () => {

    // link to the data
    const csvUrl = "https://gist.githubusercontent.com/S4mLab/aa1126819e004344fc8ee36cdbb2eb63/raw/79a39d9554b076b0cfe7c8f9923be4865dd62220/UN_Population_2019.csv"
  
    // state
    const [countriesdata, setCountriesdata] = useState([])
  
    // download the data just once when app first render, use [] as dependence
    useEffect(() => {
  
      const convert2020Population2Number = countryObj => {
        countryObj['2020NumType'] = +countryObj['2020']
        return countryObj
      }
      csv(csvUrl, convert2020Population2Number).then(countriesArray => setCountriesdata(countriesArray.slice(0, 10)))
    },[])
    return countriesdata
  }

export default LoadData;