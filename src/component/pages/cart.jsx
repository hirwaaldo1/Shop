import React,{useEffect,useState} from 'react'
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import SearchIcon from '@material-ui/icons/Search';
import InstagramIcon from '@material-ui/icons/Instagram';
import { useHistory } from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import { AddProduct,DelectProduct } from '../redux/reducer/rootReducer'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import StarIcon from '@material-ui/icons/Star';
import HourglassEmptyRoundedIcon from '@material-ui/icons/HourglassEmptyRounded';
import DeleteIcon from '@material-ui/icons/Delete';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { TransverseLoading } from 'react-loadingg'
import { removeFromCart } from '../redux/reducer/rootReducer'
import {useDispatch} from 'react-redux'
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images2 from 'react-payment-inputs/images';
import {useSelector} from 'react-redux'
const Cart = () => {
    const [isLoaded, setIsLoaded] =useState(false);
    const dispatch= useDispatch()
    const state=useSelector((state)=>state.cart.cartItems)
    const history = useHistory();
    const [open, setOpen] = useState(false);
    const {
        wrapperProps,
        getCardImageProps,
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps
      } = usePaymentInputs();
    

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    useEffect(() => {
        setTimeout(() => {
            if(isLoaded === false){}
        setIsLoaded(true);
        console.log(state.length);
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

            <br/>
            {state.length > 0 ? 
<div className="row col-12" id="cart_body">
                <div className="col-8">

    {state.map((product) =>{
        return (
            <div className="row col-12" id="div_for_all_cart_product" key={product.id}>
            <div className="col-3" id="div_have_image">
            <img src={`${product.image[0].src}`} id="imgSize" alt={'imgSize'}/>
            </div>
            <div className="col-6"style={{fontFamily:`"Dosis", sans-serif`}}>
        <p id="name_of_cart_product">{product.name}</p>
                        <p>{product.disce}</p>
                        <p>{product.name}</p>
                        <p>SIZE: M</p>
                        <button id="romeve_Item" onClick={()=>dispatch(removeFromCart(product))}><DeleteIcon/>REMOVE ITEM</button>
        </div>
        <div className="col-3">
        <ButtonGroup  aria-label="outlined primary button group" id="slkdmd">
          <Button style={{fontWeight:"bold"}} onClick={()=>dispatch(DelectProduct(product))}>-</Button>
                    <Button>{product.count}</Button>
          <Button style={{fontWeight:"bold"}} onClick={()=>dispatch(AddProduct(product))}>+</Button>
        </ButtonGroup>
          <p className="sdmlxs"> {product.count * product.price }Frw</p>
        </div>
        </div>
        )
    })}
 
                </div>
                <div className="col-4" id="div_with_payment">
                <div >
                    <p id="p_total_amount">The total amount of</p>
                    <div className="row col-12">
                        <div className="col-9"style={{paddingBottom:"12px"}}>
                        Temporary amount

                        </div>
                        <div className="col-3">
                       { state.reduce((a, c) => a + c.price * c.count, 0)}Frw
</div>
                        <div className="col-9"style={{paddingBottom:"12px"}}>
                        Shipping
                        </div>
                        <div className="col-3">
                        Gratis
</div>

                    </div>
                    <hr/>
                    <div className="row col-12" style={{paddingBottom:"15px"}}>
                        <div className="col-9"style={{paddingBottom:"12px",fontWeight:"bold"}}>
                        The total amount of
(including VAT)

                        </div>
                        <div className="col-3">
                       { state.reduce((a, c) => a + c.price * c.count, 0)}Frw
</div>
<div className="col-12">
<button className="btn btn" id="buyButtom"onClick={handleClickOpen}>BUY</button>
<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className="modelMode">
        <DialogTitle id="form-dialog-title">Payment</DialogTitle>
        <DialogContent>
          <DialogContentText>
           <div className="row col-12" id="all_pay_op">
               <div className="col-4">
               <img style={{width:"100%",height:"15vh",paddingBottom:"12px"}} src={`https://img.talkandroid.com/uploads/2015/09/google-wallet-new-logo.png`} alt="sd"/>
               </div>
               <div className="col-4">
               <img style={{width:"100%",height:"15vh",paddingBottom:"17px"}} src={`https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJQ_7-ZZkDNkvpwxeIddovjUWR5kEvGo9vyy0JcRpvfQ&usqp=CAU&ec=45714077`} alt="sd"/>
               </div>
               <div className="col-4">
               <img style={{width:"100%",height:"15vh",paddingBottom:"16px"}} src={`https://www.b-payment.com/docs/images/logos/Visa_logo.png`} alt="sd"/>
               </div>
           </div>
          </DialogContentText>
           <PaymentInputsWrapper {...wrapperProps}>
      <svg {...getCardImageProps({ images2 })} alt={images2}/>
      <input {...getCardNumberProps()} />
      <input {...getExpiryDateProps()} />
      <input {...getCVCProps()} />
    </PaymentInputsWrapper>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" style={{outline:"none",color:'#696969'}}>
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" style={{outline:"none",color:'#696969'}}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
</div>
                    </div>
                   <div>
                   <p id="p_total_amount">Payment Options</p>
                   <div className=" row col-12" id>
                        <div className="col-9">
                        <p id="paymaent_opt">Google Wallet</p>
                        </div>
                        <div className="col-3">
<img style={{width:"100%",paddingBottom:"12px"}} src={`https://img.talkandroid.com/uploads/2015/09/google-wallet-new-logo.png`} alt="sd"/>
</div>

<div className="col-9">
PayPal
                        </div>
                        <div className="col-3">
<img style={{width:"100%",paddingBottom:"17px"}} src={`https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJQ_7-ZZkDNkvpwxeIddovjUWR5kEvGo9vyy0JcRpvfQ&usqp=CAU&ec=45714077`} alt="sd"/>
</div>


<div className="col-9">
                       Visa card
                        </div>
                        
                        <div className="col-3">
<img style={{width:"100%",paddingBottom:"16px"}} src={`https://www.b-payment.com/docs/images/logos/Visa_logo.png`} alt="sd"/>
</div>
                   </div>
                   </div>
                </div>
</div>
</div>
: <div className="col-12" style={{textAlign:"center"}}>
  <HourglassEmptyRoundedIcon id="svgEmpty"/>
  <p id="empty">YOUR CART IS EMPTY</p>
  <p id="empty_small">Continue Shopping</p>
  <div id="all_buttom"><Button onClick={()=>history.push('/')}>Women</Button>
  <Button  onClick={()=>history.push('/kids')}>Kids</Button>
  <Button onClick={()=>history.push('/men')}>Men</Button>
  </div>
  <Button onClick={()=>history.push('/home_improvement')}>Home Improvement</Button>
  <Button onClick={()=>history.push('/game')}>Video-Games</Button>
  <Button onClick={()=>history.push('/electronics')}>Electronics</Button>
  </div>}

        </div>
            </div>
            :
            <div style={{zIndex:999999}}>
            <TransverseLoading />
            </div>
}
        </div>
    )}

export default Cart
