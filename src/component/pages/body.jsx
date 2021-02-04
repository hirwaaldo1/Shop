import React,{useEffect} from 'react'
import { useHistory } from "react-router-dom";
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import SearchIcon from '@material-ui/icons/Search';
import womenData from '../data/women.json'
import { setInStorage } from "../storoge";
import axios from "axios";
    import { getFromStorage } from "../storoge";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
const Body = () => {
  const history = useHistory();
  const [name , setName] = React.useState()
  useEffect(() => {
    axios
    .get(
      "http://localhost:1000/user/login/" +
        getFromStorage("the_main_app").userid
    )
    .then((res) => {
      
      if(!res.data){
        setName()
      }else{
        setName(res.data.fristname)
      }
 
    });
  })
    return (
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
               <li onClick={()=>history.push(`/account/:${name}`)}><PersonOutlineRoundedIcon/></li>
               <li onClick={()=>history.push(`/account/:${name}`)}>ACCOUNT</li>   
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
                <div className="col-12" style={{textAlign:"center",fontFamily:`'Dosis', sans-serif`,fontWeight:"bold",fontSize:"23px"}}><p>WOMEN</p></div>
            </div>
            <div className="row col-12"id="div_show_page_name">
                <div className="col-12">
                    <p style={{fontFamily:`'Dosis', sans-serif`}}>HOME ‣</p> <p id="smalii"style={{fontFamily:`'Dosis', sans-serif`,fontWeight:"bold"}}>WOMEN</p>
                    </div>
            </div>
            <div className="row col-12" style={{fontFamily:`'Dosis', sans-serif`}}>
            <div className="col-12">
                <div class="row col-12">
                {womenData.map((name,id)=>{
                return(
                  <div className="col-3"key={id}>
                  <div className="out" id="slide_img23"onClick={()=>{setInStorage('product',name);history.push('/buy')}} >
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
    )
}

export default Body
