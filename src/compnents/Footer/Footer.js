import React from 'react'
import './Footer.css'
import { FaPlaystation } from "react-icons/fa";


const Footer = () => {
  return (
   
   <div className='Footer'>
       
        
        <FaPlaystation className='Logo' /> 
        
       
        <ul className='Produits'>
           <h5> Produits </h5>
             <li> PS5</li>
             <li>PS4</li>
             <li>PS PLUS</li>
             <li> ACCESSOIRES </li>


           </ul>
         <ul className='Ressources'>
             <li> Conditions générales du PSN</li>
             <li> Conditions d'annulation du PS Store             </li>
             <li> Classifications par âge             </li>
             <li> Avertissements relatifs à la santé
             Développeurs</li>

         </ul>
      
      <ul className='list'>
              <li> <a href="https://www.playstation.com/fr-fr/"> Home</a></li>
            <li><a href="https://www.playstation.com/fr-fr/support/?smcid=pdc%3Afr-fr%3Aprimary%20nav%3Amsg-support%3Aassistance"> Help</a></li>
            <li> <a href="https://www.playstation.com/fr-fr/ps5/games/?smcid=pdc%3Afr-fr%3Aprimary%20nav%3Amsg-games%3Aps5"> Games</a></li>
      </ul>

    </div>
  )
}

export default Footer