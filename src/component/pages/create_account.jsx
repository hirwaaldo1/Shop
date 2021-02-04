import React,{useEffect,useState} from 'react'
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import SearchIcon from '@material-ui/icons/Search';
import InstagramIcon from '@material-ui/icons/Instagram';
import { useHistory } from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import StarIcon from '@material-ui/icons/Star';
import WarningTwoToneIcon from '@material-ui/icons/WarningTwoTone';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { TransverseLoading } from 'react-loadingg'
const Create = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [email, setEmail]= useState()
    const [errors , setErrors] = useState()
    const [show, setShow] = useState(true)
    const [password, setPassword]= useState()
    const [confirmpassword, setConfirmpassword]= useState()
    const [fristname, setFristname]= useState()
    const [lastname, setLastname]= useState()
    const [address, setAddress]= useState()
    const [town, setTown]= useState()
    const [phone, setPhone]= useState()
    const [postcode, setPostcode]= useState()
    const history = useHistory();
    useEffect(() => {
        setTimeout(() => {
        setIsLoaded(true);

        }, 3000);
    }, [isLoaded]);
    const validitionfromDb = () => {
        fetch("http://localhost:1000/user/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
            fristname:fristname,
            lastname:lastname,
            address:address,
            town:town,
            phone:phone,
            postcode:postcode,
            confirmpassword:confirmpassword
          }),
        })
          .then((res) => res.json())
          .then((json) => {
            if (json.success) {
              setEmail();
              setPassword();
              setConfirmpassword();
              setFristname();
              setLastname();
              setAddress();
              setTown();
              setPhone();
              setPostcode();
              // setSee(true);
              history.push("/login");
            } else {
              // setErrors(json.messages);
              // setSee(false);
              setErrors(json.messages)
              setShow(false);
              window.scrollTo({
                top:0,
                left:0,
                behavior:"smooth"
              })
            }
          });
      };
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
            <nav id="navHeaders_2" >
            <p>CREATE AN ACCOUNT</p>
            </nav>
            <nav id="Eroosd" className={`show_${show}`}>
                <WarningTwoToneIcon/>{errors}
                  </nav>
            <nav id="fashion_word" >
            vogue, trend, craze, rage, mania, mode, fad, fancy, passing fancy.
            </nav>
            <div id="frist_div_of_input">
       <p id="p_for_person">PERSONAL DETAILS</p>
       <p>Enter your email address and password to create your account.</p>
       <div className="row col-4" id="div_with_p_input">
                            <div className="col-2">
                            <p id="input_word_for_all"style={{marginTop:"10px"}}>EMAIL:</p>
                            </div>
                            <div className="col-10">
                            <input type="text" id="input_1" onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                           </div>
                           <div className="row col-4" id="div_with_p_input">
                            <div className="col-2">
                            <p id="input_word_for_all"style={{marginTop:"10px"}}>PASSWORD:</p>
                            </div>
                            <div className="col-10">
                            <input  id="input_1"  type="password"onChange={(e)=>setPassword(e.target.value)}/>
                            </div>
                           </div>
                           <div className="row col-4" id="div_with_p_input">
                            <div className="col-2">
                            <p id="input_word_for_all"style={{marginTop:"10px"}}>CONFIRM   PASSWORD:</p>
                            </div>
                            <div className="col-10">
                            <input  id="input_1" className="big_ones"  type="password"onChange={(e)=>setConfirmpassword(e.target.value)}/>
                            </div>
                           </div>
       <p  id="p_for_person"style={{paddingTop:"10px"}}>SHIPPING DETAILS</p>
       <p style={{paddingBottom:"10px"}}>Enter the name and address you'd like us to ship your order to.</p>
       <div className="row col-4" id="div_with_p_input">
                            <div className="col-2">
                            <p id="input_word_for_all"style={{marginTop:"10px"}}>FRIST NAME:</p>
                            </div>
                            <div className="col-10">
                            <input type="text" id="input_1"  className="big_ones"onChange={(e)=>setFristname(e.target.value)}/>
                            </div>
                           </div>
                           <div className="row col-4" id="div_with_p_input">
                            <div className="col-2">
                            <p id="input_word_for_all"style={{marginTop:"10px"}}>LAST NAME:</p>
                            </div>
                            <div className="col-10">
                            <input type="text" id="input_1" className="big_ones"onChange={(e)=>setLastname(e.target.value)}/>
                            </div>
                           </div>
                           <div className="row col-4" id="div_with_p_input">
                            <div className="col-2">
                            <p id="input_word_for_all"style={{marginTop:"10px"}}>ADDRESS LINE1:</p>
                            </div>
                            <div className="col-10">
                            <input type="text" id="input_1" className="big_ones" onChange={(e)=>setAddress(e.target.value)}/>
                            </div>
                           </div>
                           <div className="row col-4" id="div_with_p_input">
                            <div className="col-2">
                            <p id="input_word_for_all"style={{marginTop:"10px"}}>TOWN/CITY:</p>
                            </div>
                            <div className="col-10">
                            <input type="text" id="input_1"onChange={(e)=>setTown(e.target.value)}/>
                            </div>
                           </div>
                           <div className="row col-4" id="div_with_p_input">
                            <div className="col-2">
                            <p id="input_word_for_all"style={{marginTop:"10px"}}>PHONE:</p>
                            </div>
                            <div className="col-10">
                            <input type="text" id="input_1"onChange={(e)=>setPhone(e.target.value)}/>
                            </div>
                           </div>
                           <div className="row col-4" id="div_with_p_input">
                            <div className="col-2">
                            <p id="input_word_for_all"style={{marginTop:"10px"}}>POSTCODE:</p>
                            </div>
                            <div className="col-10">
                            <input type="text" id="input_1" onChange={(e)=>setPostcode(e.target.value)}/>
                            </div>
                            
                           </div>
                           <button className="btn btn col-4" id="Createssdax" onClick={validitionfromDb}>CREATE MY ACCOUNT</button>
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

export default Create
