import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

function List({listtype,title}) {
    const [fdata, setfdata] = useState()
    console.log("ff", fdata)
    const base_usrl = "https://image.tmdb.org/t/p/original/"
    useEffect(async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${listtype}?api_key=e3bb1eb75a3fcc33881f18d82a54abff`)
        setfdata(data.results)

    }, [listtype])

      
  
    return (
        <div className="list">
            <h2>{title}</h2>
           
            <div className="poster">
            { fdata &&(
                fdata.map((val)=>{
                    return <NavLink to={`/trailer/${val.id}`}><img key={val.id} src={`${base_usrl}${val.poster_path}`} /></NavLink> 
                }))
            }

</div>
        </div>
    )
}

export default List
