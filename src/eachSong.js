import React from 'react'
import card from './image/card.jpg'

function EachSong({artist, title}) {
    return (

        <div className='song'>
                <img src={card} alt={title}></img>
            <div className='song-footer'>
                <h4>{title}</h4>
                <h5>{artist}</h5>
            </div>
    </div>
    )
}

export default EachSong
