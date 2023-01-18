import React,{useEffect, useState} from 'react'
import EmojiData from './emoji.json';

const Main = () => {
    const [search,setSearch] = useState("");
    const [data,setData] = useState([]);

  useEffect(()=>{
      const newData = EmojiData.filter(emoji => emoji.title.toLowerCase().includes(search.toLowerCase()));
      setData(newData);
  },[search])
  return (
    <div>
        <center><input size="40" type="text" placeholder='Search your favourite Emoji' className='search-emoji' value={search} onChange={(e) => setSearch(e.target.value)} /></center>
        <div className="emoji-res">
        {data.map(emoji =>
          <div style={{textAlign:"center"}} className="emoji-body">
            {emoji.symbol} <br /> ({emoji.title})
          </div>
        
        )}
        </div>
    </div>
  )
}

export default Main