import { useState, useEffect } from 'react'
import MiApi from './components/MiApi';
import Header from './components/Header';
import Buscador from './components/Buscador';


function App() {

  const [episodes, setEpisodes] = useState([]);

  return (
    <main className='container bg-secondary bg-gradient bg-opacity-10'>

      <Header />

      <Buscador episodes={episodes} setEpisodes={setEpisodes} />

      <MiApi episodes={episodes} setEpisodes={setEpisodes} />

      <hr />
    </main>
  );
}

export default App;
