import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import axios from 'axios'
import List from './List';
function Trailer() {
    const {mid} = useParams()
    const [ videoid, setvideoid] = useState("")
    useEffect(async()=>{
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${mid}/videos?api_key=e3bb1eb75a3fcc33881f18d82a54abff`)
        
        if(data.results.length>0){
            setvideoid(data.results[0].key)

        }else{
            setvideoid("")
        }

    },[mid])
    const opts = {
        height: '400',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const onready=(event)=>{
        event.target.pauseVideo();
          

      }
    return (
        <div className="trailer">
            <YouTube videoId={videoid} opts={opts} />


            <List listtype="upcoming" title="Upcoming Movies" />
            
        </div>
    )
}

export default Trailer
