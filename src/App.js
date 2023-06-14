import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Counties from './Counties';
import Filter from './Filter';

function App() {
  const [countris, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const getCountries = async () => {
      setLoading(true)
      const res = axios.get('https://restcountries.com/v3.1/all')
      setCountries((await res).data)
      setLoading(false)
    }
    getCountries()
  }, [])

  const onFilterChange = (value) => {
    setFilter(value);
  };

  return (
    <div className='container'>
      <Filter onFilterChange={onFilterChange} />
      <Counties countris={countris} loading={loading} filter={filter} />
    </div>
  );
}

export default App;
