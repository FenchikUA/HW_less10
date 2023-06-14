import React from 'react'

const Counties = ({ countris, loading, filter }) => {
  if (loading) {
    return <h2>Loading...</h2>
  }

  const filtrCountries = countris.filter((country) =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div className='country-block'>
      {
        filtrCountries.map((country, index) => {
          return <div className='countris' key={index}>
            <img src={country.flags.png} alt='' />
            <div className='countris-box'>
              <h2 className='coutris-title'>{country.name.common}</h2>
              <div className='countris-info'>
                <p>Capital: <b>{country.capital}</b></p>
                <p>Region: <b>{country.region}</b></p>
                <p>Population: <b>{country.population}</b></p>
              </div>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default Counties
