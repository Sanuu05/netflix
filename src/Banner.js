import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

function Banner() {
    const [banner, setbanner] = useState()
    const [bannerimg, setbannerimg] = useState()
    const base_usrl = "https://image.tmdb.org/t/p/original/"
    console.log("bimg", banner)
    useEffect(async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=e3bb1eb75a3fcc33881f18d82a54abff`)

        setbanner(data.results[Math.floor(Math.random() * data.results.length)])



    }, [])
    return (
        <div className="banner" style={{

            backgroundImage: `linear-gradient(to right , rgba(0,0,0,0.8),rgba(0,0,0,0)),url("https://image.tmdb.org/t/p/original/${banner?.backdrop_path}")`


        }}>
            <div className="banner_content">
                <h1 className="banner_title">{banner?.title || banner?.name || banner?.original_name}</h1>
           

            <div className="banner_button">
                <NavLink to={`/trailer/${banner?.id}`}>
                <button>Play</button>
                </NavLink>
                <button>My List</button>
            </div>
            <h1 className="banner_description">{banner?.overview}</h1>
            </div>

        </div>
    )
}

export default Banner
