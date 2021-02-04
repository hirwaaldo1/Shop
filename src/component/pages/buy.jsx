import React,{useEffect} from 'react'
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import SearchIcon from '@material-ui/icons/Search';
import InstagramIcon from '@material-ui/icons/Instagram';
import { useHistory } from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import StarIcon from '@material-ui/icons/Star';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TransverseLoading } from 'react-loadingg'
import { addToCart } from '../redux/reducer/rootReducer'
import {getFromStorage} from '../storoge'
import {useDispatch} from 'react-redux'
const Buy = () => {
    const history = useHistory();
    const dispatch= useDispatch()
    const [instork ,setInstork] = React.useState(false)
    const [isLoaded, setIsLoaded] = React.useState(false);

    let dataProduct =  getFromStorage('product')
    useEffect(() => {
        setTimeout(() => {
          setIsLoaded(true);
        }, 3000);
      }, [isLoaded]);
      let settings = {
      
        infinite: true,
        slidesToShow: 1 ,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    
    }
    const addtoCart = () =>{
        dispatch(addToCart(dataProduct))
        setInstork(true)
      
    } 
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
               <li onClick={()=>history.push('/game')}>VIDEO-GAMES</li>
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
             <Slider {...settings}className="row col-11" id="productList">
                {dataProduct.image.map((image,id)=>{
                    return (
                        <div className="col-12" key={id}>
                        <img src={`${image.src}`} alt={image.name} id="image_of_list"/>
                            </div> 
                    )
                })}
               
               </Slider> 
            <div id="imagecover">
            <div id="liftside_of_list" className="col-4">
            <div className="row col-12" id="div_for_list">
                <div className="col-10"id="div_container_all">
            <p>{dataProduct.disce}</p>
              <span>SIZE:</span>
              <div id="name_of_product">
              UK 6 - 8 / EUR 34 - 36 / US 2 - 4
              </div><br/>
              {instork===true ? <button className="btn btn" >IN STOCK</button> :null }
              <br/>
            <p id="name_of_prodect_realy">{dataProduct.name}</p>
            
                </div>
                
                <div className="col-2">
                <p id="price_for_product">{dataProduct.price}Frw</p>
                </div>
                <button className="btn btn" id="button_of_add_to_cart"onClick={addtoCart}>ADD TO CART </button>
                </div>
                </div>
          
           
            </div>
        </div>
            </div>
            :
            <div style={{zIndex:999999}}>
            <TransverseLoading />
             </div>
 }
        </div>
    )}

export default Buy
