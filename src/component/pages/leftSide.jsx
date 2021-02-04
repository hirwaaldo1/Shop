import React from 'react'
import './leftSide.css'
import { useHistory } from "react-router-dom";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import StarIcon from '@material-ui/icons/Star';
const LeftSide = () => {
    const history = useHistory();
    return (
        <div className="left_side">
        <h3>blackbutterfly</h3>
        <hr id="line_1"/>
        <ul id="list_of_buy">
               <li id="actions">Women</li>
               <li onClick={()=>history.push('/men')}>Men</li>
               <li onClick={()=>history.push('/kids')}>Kids</li>    
           </ul>
           <hr id="line_2"/>
                    <ul id="list_of_buy2">
               <li onClick={()=>history.push('/home_improvement')}>HOME IMPROVEMENT</li>
               <li onClick={()=>history.push('/game')}>VIDEO-GAMES</li>
               <li onClick={()=>history.push('/electronics')}>ELECTRONICS</li>    
           </ul>
           <hr id="line_of_h311"/>
           <div id="icons">
           <InstagramIcon/>
            <FacebookIcon style={{marginLeft:"12px"}}/>
           </div>
           <div id="footerHeader" onClick={()=>history.push('/')}>
              <p>
              Blackbutterfly
              </p>
              <div>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              </div>
           </div>
        </div>
    )
}

export default LeftSide
