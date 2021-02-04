import React,{useEffect} from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import StarIcon from '@material-ui/icons/Star';
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { TransverseLoading } from 'react-loadingg'
import { useHistory } from "react-router-dom";
import Slider from "react-slick";
const HomePage = () => {
    const [isLoaded, setIsLoaded] = React.useState(false);
    const history = useHistory();
    useEffect(() => {
        setTimeout(() => {
          setIsLoaded(true);
        }, 3000);
      }, [isLoaded]);
      let settings = {
      
        infinite: true,
        slidesToShow: 2 ,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000
    
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
               <li onClick={()=>history.push('/electronics')} >ELECTRONICS</li>    
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
                <div className="row col-12" style={{margin:"0",padding:"0"}}>
                <div className="col-5" id="liftsideofhome">
                <p id="heasders">WARDROBE ESSENTIALS</p>
                <p id="word_homesd">We think these vintage inspired dresses & boleros should be a staple to any wardrobe. Their rockabilly flare will make you the life of any party!</p>
                </div>
                <div className="col-7"id="rightSide">
        
                    <Slider {...settings} className="row col-12">
                       
                <div className="col-12">
                  <div className="out" id="image_product" >
                    <div className="card" style={{border:'none'}}>
                      <img
                        id="slide_img_for_home"
                        alt={"users here"}
                        src={`https://www.blackbutterflyclothing.com/template/product_images/JPEG-2000/BBSK008-BLR-1.jpg`}
                       
                      />
                   
                      <div id="nameandprice_home">
                <p >Shirts</p>
            
                   </div>
                    </div>
                  </div>
                  <br/>
                  </div>
                  <div className="col-12">
                  <div className="out" id="image_product" >
                    <div className="card" style={{border:'none'}}>
                      <img
                        id="slide_img_for_home"
                        alt={"users here"}
                        src={`https://www.blackbutterflyclothing.com/template/product_images/JPEG-2000/BBA015-YEL-1.jpg`}
                       
                      />
                   
                      <div id="nameandprice_home">
                <p >Satin shawl</p>
            
                   </div>
                    </div>
                  </div>
                  <br/>
                  </div>
                  <div className="col-12">
                  <div className="out" id="image_product" >
                    <div className="card" style={{border:'none'}}>
                      <img
                        id="slide_img_for_home"
                        alt={"users here"}
                        src={`https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe2%2Fbc%2Fe2bcee1fdcf71efe13a181ec261a3d7a019fe59e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jacketscoats_jackets%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]`}
                       
                      />
                   
                      <div id="nameandprice_home">
                <p >Jackets & Coats</p>
            
                   </div>
                    </div>
                  </div>
                  <br/>
                  </div>
                  <div className="col-12">
                  <div className="out" id="image_product" >
                    <div className="card" style={{border:'none'}}>
                      <img
                        id="slide_img_for_home"
                        alt={"users here"}
                        src={`https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F38%2Fc2%2F38c23b3a677761585a344623a13371a04f8e9333.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_accessories_hatsandgloves%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]`}
                       
                      />
                   
                      <div id="nameandprice_home">
                <p >Hats</p>
            
                   </div>
                    </div>
                  </div>
                  <br/>
                  </div>
                  <div className="col-12">
                  <div className="out" id="image_product" >
                    <div className="card" style={{border:'none'}}>
                      <img
                        id="slide_img_for_home"
                        alt={"users here"}
                        src={`https://mk0v90shoppingc7yy7q.kinstacdn.com/wp-content/uploads/2019/06/21288-rwxbyx.jpg`}
                       
                      />
                   
                      <div id="nameandprice_home">
                <p >T-Shirt + Shorts</p>
            
                   </div>
                    </div>
                  </div>
                  <br/>
                  </div>
                  <div className="col-12">
                  <div className="out" id="image_product" >
                    <div className="card" style={{border:'none'}}>
                      <img
                        id="slide_img_for_home"
                        alt={"users here"}
                        src={`https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F1c%2Fae%2F1caeba4f9d2e1aaef4870693458081eca5db6e51.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_boy8y_shirts%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]`}
                       
                      />
                   
                      <div id="nameandprice_home">
                <p >Shirts</p>
            
                   </div>
                    </div>
                  </div>
                  <br/>
                  </div>
            
                  </Slider>
               
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

export default HomePage
