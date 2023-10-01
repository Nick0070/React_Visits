import { useHref } from 'react-router-dom';
import './Works.scss';



export const Works = () => {
    
  
    return (
       <>
        <ul>
            <li>
                <div class="details">
                    <h2>Игра на React</h2>
                    <div className="product">
                        <img   src="img/game2.png"/>
                    </div>
                    <a target="_blank" href="https://github.com/Nick0070/React_Game" > 
                        <button className='btn'>GitHub</button>
                    </a>
                    <button className='btn2'>Просмотреть</button>
                </div>
            </li>
            <li>
                <div class="details">
                    <h2> Сайт Wordpress </h2>
                    <div className="product">
                            <img src="img/ws.png"/>
                    </div>
                    <a target="_blank" href=" https://bel-dosaaf.ru" > 
                        <button className='btn2'>Просмотреть</button>
                    </a>
                </div>
            </li>
            <li>
                <div class="details">
                    <h2>Сайт заведения на React </h2>
                    <div class="product">
                        <img src="img/shampur.png"/>
                    </div>
                    <a target="_blank" href=" " > 
                        <button className='btn'>GitHub</button>
                    </a>
                    <a target="_blank" href=" " > 
                        <button className='btn2'>Просмотреть</button>
                    </a>
                </div>
            </li>
            <li>
                <div className="details">
                    <h2>Сайт федерации танцев</h2>
                    <div className="product">
                        <img src="img/dance.png"/>
                    </div>
                    <a target="_blank" href="https://fts31.ru" > 
                        <button className='btn2'>Просмотреть</button>
                    </a>
                </div>
            </li>
            <li>
                <div class="details">
                    <h2>Сайт PHOTON на React </h2>
                    <div className="product">
                        <img src="img/photon.png"/>
                    </div>
                    <a target="_blank" href="https://github.com/Nick0070/Photon_React" > 
                        <button className='btn'>GitHub</button>
                    </a>
                    <a target="_blank" href="https://nick0070.github.io" > 
                        <button className='btn2'>Просмотреть</button>
                    </a>
                </div>
            </li>
        </ul>

       </>
    )
}