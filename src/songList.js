import React from 'react'
import {useGlobalContext} from './context'
import EachSong from './eachSong';



function SongList() {

    const {searchItem, songs} = useGlobalContext()

    if (searchItem && songs.length < 1) {
        return(
            <h2 className='error'>Oops! Result not found</h2>
        )
    }

    return (
        <div className='list-outer'>
            <div className='list-inner'>
             {songs.map((song)=>{
                return (
                    <EachSong key={song.id} {...song}/>
                )
             })}
            </div>
        </div>
    )
}

export default SongList
