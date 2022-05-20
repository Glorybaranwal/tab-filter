import { useEffect } from "react";

function Filter({setActiveGenre, activeGenre, setFiltered, popular}) {

    useEffect(() => {
if(activeGenre === 0){
    setFiltered(popular);
    return;
}

const filtered = popular.filter((nft) => nft.genre_ids.includes(activeGenre));
setFiltered(filtered);
}, [activeGenre]);



    return (
        <div className="filter-container">
            <button className={activeGenre === 0 ? "active" : ""} onClick={()=> setActiveGenre(0)}>All</button>
            <button className={activeGenre === 35 ? "active" : ""} onClick={()=> setActiveGenre(35)}>Comedy</button>
            <button className={activeGenre === 14 ? "active" : ""} onClick={()=> setActiveGenre(14)}>Action</button>
        </div>
    )
}

export default Filter;