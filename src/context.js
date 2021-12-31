
import React, { useState, useContext, useEffect} from 'react'

let url = 'http://www.songsterr.com/a/ra/songs.json?pattern=';

const AppContext = React.createContext()
const AppProvider = ({ children }) => {

  const [songs, setSongs] = useState([]);
  const [searchItem, setSearchItem] = useState('');


  const getSongs = async () => {
    try {
      const response = await fetch(`${url}${searchItem}`);
      const data = await response.json();
      if (data) {
        const results = data.map((item)=>{
          return {id: item.id, title: item.title, artist: item.artist.name}
        })
        setSongs(results);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getSongs();
  }, [searchItem])
    return (
        <AppContext.Provider value={{songs, searchItem, setSearchItem}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }