import {motion} from "framer-motion";

function Nfts({nft}) {
  return(
   <motion.div layout className="popular-nfts">
    <h2>{nft.title}</h2>
    <img src={"https://image.tmdb.org/t/p/w500" + nft.backdrop_path} alt=""/>   
     </motion.div>
    
  )
}

export default Nfts;