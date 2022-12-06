import React from "react";
import { useState, useEffect } from 'react'


function MiApi({episodes = [], setEpisodes}){

    const initialUrl = "https://api.sampleapis.com/simpsons/episodes";


    const fetchEpisodes = (url) => {
      fetch(url)
        .then(response => response.json())
        .then(data => setEpisodes(data))
        .catch(error => console.log(error))
    };
  
    useEffect(() => {
      fetchEpisodes(initialUrl);
    }, [])


    return(
        <div className="row mt-4">
        {
            episodes.map((item, index) => (
                <div key={index} className="col mb-3">
                    <div className="card" style={{minWith: "200px"}}>
                        <img src={item.thumbnailUrl} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <hr />
                            <p>Temporada: {item.season}</p>
                            <p>Episodio: {item.episode}</p>
                            <hr />
                            <p>Descripcion: {item.description}</p>
                        </div>
                    </div>
                </div>
            ))
        }
        </div>
    );
}

export default MiApi;