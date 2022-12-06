import { useState } from 'react';
import '../assets/Buscador.css';

var backupList = [];
var renderList =[];

function Buscador({ episodes, setEpisodes }) {

    const [orden, setOrden] = useState();

    const filterBySearch = (event) => {
        const query = event.target.value;

        if (backupList.length < episodes.length) {
            backupList = [...episodes];
        }

        var updatedList = [...episodes];

        updatedList = updatedList.filter((episode) => {
            return episode.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });

        if (query == '') {
            //console.log("vacio");
            updatedList = [...backupList];
        }

        setEpisodes(updatedList);
    };

    const ordenamiento = (e) => {
        e.preventDefault();

        if(orden == "B"){

            renderList = [...episodes.sort(function(a, b){return b.id - a.id})];
            setEpisodes(renderList);
            //console.log(episodes);

        }else if(orden == "A"){

            renderList = [...episodes.sort(function(a, b){return a.id - b.id})];
            setEpisodes(renderList);
            //console.log(episodes);
        }
    };


    return (
        <div className="row color1 m-0">
                <div className='col'>
                    <h3>Buscador de Episodios</h3>
                    <div className="input-group mb-3">
                        <input onChange={filterBySearch} type="search" name="buscador" id="buscador" placeholder="Nombre episodio" />
                    </div>
                        <p>*Limpie campo para recargar listado</p>

                </div>

                <div className="input-group mb-3 col mt-4" >
                <form onSubmit={ordenamiento}>
                    <div className='mb-1'>
                        <select value={orden} onChange={(e) => setOrden(e.target.value)}>
                            <option value="A" selected>Antiguo a Moderno</option>
                            <option value="B">Moderno a Antiguo</option>
                        </select>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-secondary" onClick={ordenamiento} >Ordenar Episodios</button>
                    </div>
                </form>
                </div>

        </div>
    );
}

export default Buscador;