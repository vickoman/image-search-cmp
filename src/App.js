import { useState } from 'react';
import './assets/main.css';
import api from './Components/api';
import SearchBar from './Components/SearchBar';
require('dotenv').config()

function App() {
  const [images, setImages] = useState([]);

  const onSubmitSearch = async (term) => {
    const response = await api.get('/search/photos', {
      params: { query: term }
    });
    setImages(response.data.results);
  }
  return (
    <div className="antialiased font-sans h-scree">
      <SearchBar onSubmitSearch={onSubmitSearch} />
      { console.log(images)}
    </div>
  );
}

export default App;
