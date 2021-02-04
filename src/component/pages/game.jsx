import React,{useEffect} from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import StarIcon from '@material-ui/icons/Star';
import { useHistory } from "react-router-dom";
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { TransverseLoading } from 'react-loadingg'
import gameData from '../data/game.json'
import { setInStorage } from "../storoge";
const Games = () => {
    const history = useHistory();
    const [isLoaded, setIsLoaded] = React.useState(false);
    useEffect(() => {
        setTimeout(() => {
          setIsLoaded(true);
        }, 3000);
      }, [isLoaded]);
    return (
        <div>
            {isLoaded === true ?
            <div className="row clearfix" style={{margin:'0',padding:"0"}}>
            <div className="col-md-3 column wel"style={{margin:'0',padding:"0"}}>
            <div className="left_side">
                        <h3>blackbutterfly</h3>
                        <hr id="line_1"/>
                        <ul id="list_of_buy">
               <li onClick={()=>history.push('/')}>Women</li>
                  <li onClick={()=>history.push('/men')}>Men</li>
                   <li onClick={()=>history.push('/kids')}>Kids</li>       
               </ul>
               <hr id="line_2"/>
                        <ul id="list_of_buy2">
               <li onClick={()=>history.push('/home_improvement')}>HOME IMPROVEMENT</li>
                   <li id="actions" >VIDEO-GAMES</li>
                   <li onClick={()=>history.push('/electronics')}>ELECTRONICS</li>    
               </ul>
               <hr id="line_3"/>
                  <div id="icons">
               <InstagramIcon/>
                <FacebookIcon style={{marginLeft:"12px"}}/>
               </div>
               <div id="footerHeader"onClick={()=>history.push('/')}>
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
            </div>
            <div className=" col-md-9 column"style={{margin:'0',padding:"0"}}>
            <div>
                <nav id="navHeader">
                    <div className="row">
                    <div className="col-6">
                    <div>
                    <SearchIcon />
                    <input type="search" id="seacher_all" placeholder="SEAECH"/>
                    </div>
                    </div>
                    <div className="col-6">
                    <ul className="float-right" id="sideList">
                   <li>Frw</li>
                   <li onClick={()=>history.push('/account/:name')}><PersonOutlineRoundedIcon/></li>
                   <li onClick={()=>history.push('/account/:name')}>ACCOUNT</li>   
                   <li onClick={()=>history.push('/cart')}><ShoppingCartOutlinedIcon/></li>    
               </ul>
        
                    </div>
                    </div>
                   
                    
                </nav>
                <nav id="navHeader_1" >
                <div className="row col-12 ">
            <div className="col-6"style={{textAlign:'center',display:"inline-block"}}>
                <p style={{textAlign:'center',display:"inline-block",margin:'0',fontFamily:`'Dosis', sans-serif`,fontWeight:"bold"}}>FREE UK/US SHIPPING </p>
                <p style={{textAlign:'center',display:"inline-block",paddingLeft:'3px',margin:'0',fontFamily:`'Dosis', sans-serif`}}> OVER ₮50</p>
            </div>
            <div className="col-6"style={{textAlign:'center',display:"inline-block",borderLeft:"1px solid #c8c8c8 "}}>
                <p style={{textAlign:'center',display:"inline-block",margin:'0',fontFamily:`'Dosis', sans-serif`,fontWeight:"bold"}}>FREE </p>
                <p style={{textAlign:'center',display:"inline-block",paddingLeft:'3px',margin:'0',fontFamily:`'Dosis', sans-serif`}}>  UK RETURNS</p>
            </div>
                </div>
                </nav>
            <div className="row col-12" id="header_name">
                <div className="col-12" style={{textAlign:"center",fontFamily:`'Dosis', sans-serif`,fontWeight:"bold",fontSize:"23px"}}><p>VIDEO-GAMES</p></div>
            </div>
            <div className="row col-12"id="div_show_page_name">
                <div className="col-12">
                    <p style={{fontFamily:`'Dosis', sans-serif`}}>HOME ‣</p> <p id="smalii"style={{fontFamily:`'Dosis', sans-serif`,fontWeight:"bold"}}>VIDEO-GAMES</p>
                    </div>
            </div>
            <div className="row col-12" style={{fontFamily:`'Dosis', sans-serif`}}id="change_size_of_div">
            <div className="col-12" >
                <div className="row col-12" >
                {gameData.map((name,id)=>{
                return(
                  <div className=" col-3"key={id}>
                  <div className="out" id="slide_img23" onClick={()=>{setInStorage('product',name);history.push('/buy')}} >
                    <div className="card" style={{border:'none'}}>
                      <img
                        id="slide_img"
                        alt={"users here"}
                        src={`${name.image[0].src}`}
                       
                      />
                      <div id="bagers">NEW</div>
                      <div id="nameandprice">
                <p style={{fontWeight:'bold'}}>{name.price}</p>
                <span>{name.name}</span>
                   </div>
                    </div>
                  </div>
                  <br/>
                  </div>
                  
                )
              })}
            </div>
</div>
            </div>
        </div>
        </div>
            </div>
            :
            <div style=        {{zIndex:999999}}>
            <TransverseLoading />
             </div>
 }
        </div>
    )
}

export default Games
