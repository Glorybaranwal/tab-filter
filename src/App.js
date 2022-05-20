import {useEffect, useState} from 'react';
import Nfts from './NFT';
import "./App.css"
import "./index.css"
import Filter from './NFT/filter';
import { motion } from "framer-motion";

function App() {

const [popular, setPopular] = useState([]);
const [filtered, setFiltered] = useState([]);
const [activeGenre, setActiveGenre] = useState(0);

useEffect(() => {
fetchPopular();
}, []);

  const fetchPopular = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=d5c35e51c81488b19da7c1f572507a3d&language=en-US&page=1'
    );
    const nfts = await data.json();
    setPopular(nfts.results);
    setFiltered(nfts.results);
  };

  return (
    <div className="App">
    
    <h2>Live Space</h2>
      <p>In publishing and graphic design, Lorem ipsum is a placeholder text</p>
      <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
     <motion.div layout className='popular-nfts'>
     
       {filtered.map((nft) => {
         return <Nfts key={nft.id} nft={nft}/>;
       })}
     </motion.div>

    </div>
  );
}

export default App;
