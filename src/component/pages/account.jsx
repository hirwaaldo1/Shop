    import React,{useEffect,useState} from 'react'
    import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
    import SearchIcon from '@material-ui/icons/Search';
    import InstagramIcon from '@material-ui/icons/Instagram';
    import FacebookIcon from '@material-ui/icons/Facebook';
    import { useHistory } from "react-router-dom";
    import StarIcon from '@material-ui/icons/Star';
    import axios from "axios";
    import { getFromStorage } from "../storoge";
    import DoneAllIcon from '@material-ui/icons/DoneAll';
    import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
    import { TransverseLoading } from 'react-loadingg'
    const userid = getFromStorage("the_main_app").userid;
    const Account = () => {
        const [isLoaded, setIsLoaded] =useState(false);
        const [fristname, setFristname]= useState()
        const [lastname, setLastname]= useState()
        const [phone, setPhone]= useState()
        const [show, setShow] = useState(true)
        const [email, setEmail]= useState()
        const [fristname1, setFristname1]= useState()
        const [lastname1, setLastname1]= useState()
        const [phone1, setPhone1]= useState()
        const [email1, setEmail1]= useState()
        const [ password,setPassword] = useState()
        const [passwordnew, setPasswordnew]= useState()
        const history = useHistory();
        useEffect(() => {
            if(userid === undefined){
              history.push('/login')
            }
            // if(userid.length === 0) {
            //     history.push('/login')
            // }
            axios.get("http://localhost:1000/user/login/" +
                getFromStorage("the_main_app").userid
            )
            .then((res) => {
              if (!res.data){
                history.push('/login')
              } else {
                setFristname(res.data.fristname)
                setLastname(res.data.lastname)
                setPhone(res.data.phone)
                setEmail(res.data.email)
                setPassword(res.data.password)
              };
               
            });
            setTimeout(() => {
                setIsLoaded(true);
            }, 3000);
        }, [isLoaded]);
        const sdvonSumbit1 = () =>{
            if(fristname1 ===''){
              setFristname1(fristname)
            }
            if(email1 ===''){
            setEmail1(email)
            }
            if(phone1 ===''){
          setPhone1(phone)
        }
            if(lastname1 ===''){
            setLastname1(lastname1)
          }
          if(passwordnew ===''){
            setPasswordnew(password)
          }
      const userData = {
        email: email1,
        password: passwordnew,
        fristname:fristname1,
        lastname:lastname1,
        phone:phone1,
      }
      axios.post('http://localhost:1000/user/data/update/'+userid,userData)
      .then(res=>{
          console.log(res.data)
        setShow(false);
        window.scrollTo({
          top:0,
          left:0,
          behavior:"smooth"
        })
    })
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
                      <li onClick={()=>history.push('/account/:name')} id="actions"><PersonOutlineRoundedIcon/></li>
                      <li onClick={()=>history.push('/account/:name')} id="actions">ACCOUNT</li>   
                      <li onClick={()=>history.push('/cart')}><ShoppingCartOutlinedIcon/></li>  
                  </ul>
           
                       </div>
                       </div>
                      
                       
                   </nav>
                   <nav id="Success_update" className={`show_${show}`}>
                <DoneAllIcon/>User Updates Success
                  </nav>

                            <div className="col-12" id="body_for_account">
                            <p id="your_account_details">YOUR ACCOUNT DETAILS</p>
                            <p>Make changes to your account details below. Click 'Update My Details' when you're done.</p>
                           <div id="div_for_input"className="col-4">
                              <div className="row col-12" id="div_that_have_input">
                            <div className="col-4">
                            <p id="name_for_input">FIRST NAME:</p>
                            </div> 
                            <div className="col-8">
                            <input type="text" id="input" placeholder={`${fristname}`} onChange={(e)=>setFristname1(e.target.value)}/>
                            </div>
                           </div>
                           <div className="row col-12" id="div_that_have_input">
                            <div className="col-4">
                            <p id="name_for_input">LAST NAME:</p>
                            </div>
                            <div className="col-8">
                            <input type="text" id="input" placeholder={`${lastname}`}onChange={(e)=>setLastname1(e.target.value)}/>
                            </div>
                           </div>
                           <div className="row col-12" id="div_that_have_input">
                            <div className="col-4">
                            <p id="name_for_input">PHONE:</p>
                            </div>
                            <div className="col-8">
                            <input type="text" id="input" placeholder={`${phone}`}onChange={(e)=>setPhone1(e.target.value)}/>
                            </div>
                           </div>
                           <div className="row col-12" id="div_that_have_input">
                            <div className="col-4">
                            <p id="name_for_input">EMAIL:</p>
                            </div>
                            <div className="col-8">
                            <input type="text" id="input" placeholder={`${email}`}onChange={(e)=>setEmail1(e.target.value)}/>
                            </div>
                           </div>
                           <div className="row col-12" id="div_that_have_input">
                            <div className="col-4">
                            <p id="name_for_input">PASSWORD:</p>
                            </div>
                            <div className="col-8">
                            <input type="password" id="input" placeholder="**********" value={password}/>
                            </div>
                           </div>
                           <div id="word_of_password">
                               <p>LEAVE PASSWORD BLANK TO REMAIN UNCHANGED.</p>
                           </div>
                           <div className="row col-12" id="div_that_have_input">
                            <div className="col-4">
                            <p id="name_for_input">NEW PASSWORD:</p>
                            </div>
                            <div className="col-8">
                            <input type="password" id="input" onChange={(e)=>setPasswordnew(e.target.value)}/>
                            </div>
                           </div>
                           <div className="row col-12" id="div_that_have_input1">
                       <button className="btn btn" onClick={sdvonSumbit1} id="update_your_details">UPDATE YOUR  DETAILS</button>
                          
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

    export default Account
