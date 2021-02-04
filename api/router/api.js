require("dotenv").config();
const UserSchame = require("../model/user");
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const { isAuth } = require("../scr/auth");
const { verify } = require("jsonwebtoken");
const Nexmo = require('nexmo');
const {
    createRefreshToken,
    createAccessToken,
    sendAccessToken,
    sendRefreshToken,
  } = require("../scr/token");
router.post("/signup", (req, res) => {
    const { body } = req;
    const { fristname,lastname,address,town,phone,postcode,confirmpassword, password } = body;
    let { email } = body;
    if (!fristname) {
      return res.send({
        success: false,
        messages: "Fristname field is required.",
      });
    }
    if (!lastname) {
        return res.send({
          success: false,
          messages: "Lastname field is required.",
        });
      }
      if (!address) {
        return res.send({
          success: false,
          messages: "Address field is required.",
        });
      }
      if (!town) {
        return res.send({
          success: false,
          messages: "Town/City field is required.",
        });
      }
      if (!phone) {
        return res.send({
          success: false,
          messages: "Phone field is required.",
        });
      }
      if (!postcode) {
        return res.send({
          success: false,
          messages: "Post Code field is required.",
        });
      }
    if (!email) {
      return res.send({
        success: false,
        messages: "Email field is required.",
      });
    }
    if (!password) {
      return res.send({
        success: false,
        messages: "Password field is required.",
      });
    }
    if (password.length < 8) {
      return res.send({
        success: false,
        messages: "increase the password",
      });
    }
    if (password !== confirmpassword) {
        return res.send({
          success: false,
          messages: "Password does not match",
        });
      }
    email = email.toLowerCase();
    UserSchame.find(
      {
        email: email,
      },
      (err, prevUser) => {
        if (err) {
          return res.send({
            success: false,
            messages: "Servers errors",
          });
        } else if (prevUser.length > 0) {
          return res.send({
            success: false,
            messages: "Account already exits",
          });
        }
        const transporter = nodemailer.createTransport({
          service: "Gmail",
          auth: {
            user: "tt516483@gmail.com",
            pass: process.env.ACCESS_EMAIL_PASSWORD,
          },
        });
        let text = `
        <html lang="en">
  <head>
  </head>

  <link rel="stylesheet" href="./gmailSuccefull.css">
  <style>
  @import url('https://fonts.googleapis.com/css?family=Abel');

  html, body {
    background: #FCEEB5;
    font-family: Abel, Arial, Verdana, sans-serif;
  }
  
  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
  }
  
  .card {
    width: 450px;
    height: 250px;
    background-color: #fff;
    background: linear-gradient(#f8f8f8, #fff);
    box-shadow: 0 8px 16px -8px rgba(0,0,0,0.4);
    border-radius: 6px;
    overflow: hidden;
    position: relative;
    margin: 1.5rem;
  }
  
  .card h1 {
    text-align: center;
  }
  
  .card .additional {
    position: absolute;
    width: 150px;
    height: 100%;
    background: linear-gradient(#dE685E, #EE786E);
    transition: width 0.4s;
    overflow: hidden;
    z-index: 2;
  }
  
  .card.green .additional {
    background: linear-gradient(#92bCa6, #A2CCB6);
  }
  
  
  .card:hover .additional {
    width: 100%;
    border-radius: 0 5px 5px 0;
  }
  
  .card .additional .user-card {
    width: 150px;
    height: 100%;
    position: relative;
    float: left;
  }
  
  .card .additional .user-card::after {
    content: "";
    display: block;
    position: absolute;
    top: 10%;
    right: -2px;
    height: 80%;
    border-left: 2px solid rgba(0,0,0,0.025);
  }
  
  .card .additional .user-card .level,
  .card .additional .user-card .points {
    top: 15%;
    color: #fff;
    text-transform: uppercase;
    font-size: 0.75em;
    font-weight: bold;
    background: rgba(0,0,0,0.15);
    padding: 0.125rem 0.75rem;
    border-radius: 100px;
    white-space: nowrap;
  }
  
  .card .additional .user-card .points {
    top: 85%;
  }
  
  .card .additional .user-card svg {
    top: 50%;
  }
  
  .card .additional .more-info {
    width: 300px;
    float: left;
    position: absolute;
    left: 150px;
    height: 100%;
  }
  
  .card .additional .more-info h1 {
    color: #fff;
    margin-bottom: 0;
  }
  
  .card.green .additional .more-info h1 {
    color: #224C36;
  }
  
  .card .additional .coords {
    margin: 0 1rem;
    color: #fff;
    font-size: 1rem;
  }
  
  .card.green .additional .coords {
    color: #325C46;
  }
  
  .card .additional .coords span + span {
    float: right;
  }
  
  .card .additional .stats {
    font-size: 2rem;
    display: flex;
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    right: 1rem;
    top: auto;
    color: #fff;
  }
  
  .card.green .additional .stats {
    color: #325C46;
  }
  
  .card .additional .stats > div {
    flex: 1;
    text-align: center;
  }
  
  .card .additional .stats i {
    display: block;
  }
  
  .card .additional .stats div.title {
    font-size: 0.75rem;
    font-weight: bold;
    text-transform: uppercase;
  }
  
  .card .additional .stats div.value {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.5rem;
  }
  
  .card .additional .stats div.value.infinity {
    font-size: 2.5rem;
  }
  
  .card .general {
    width: 300px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    box-sizing: border-box;
    padding: 1rem;
    padding-top: 0;
  }
  
  .card .general .more {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    font-size: 0.9em;
  }  
</style>
  <body>
  <div class="center">
  <div class="card green">
    <div class="additional">
      <div class="user-card">

        <svg width="110" height="110" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title desc" class="center">
          <title id="title">Teacher</title>
          <desc id="desc">Cartoon of a Caucasian woman smiling, and wearing black glasses and a purple shirt with white collar drawn by Alvaro Montoro.</desc>
          <style>
            .skin { fill: #eab38f; }
            .eyes { fill: #1f1f1f; }
            .hair { fill: #2f1b0d; }
            .line { fill: none; stroke: #2f1b0d; stroke-width:2px; }
          </style>
          <defs>
            <clipPath id="scene">
              <circle cx="125" cy="125" r="115"/>
            </clipPath>
            <clipPath id="lips">
              <path d="M 106,132 C 113,127 125,128 125,132 125,128 137,127 144,132 141,142  134,146  125,146  116,146 109,142 106,132 Z" />
            </clipPath>
          </defs>
          <circle cx="125" cy="125" r="120" fill="rgba(0,0,0,0.15)" />
          <g stroke="none" stroke-width="0" clip-path="url(#scene)">
            <rect x="0" y="0" width="250" height="250" fill="#b0d2e5" />
            <g id="head">
              <path fill="none" stroke="#111111" stroke-width="2" d="M 68,103 83,103.5" />
              <path class="hair" d="M 67,90 67,169 78,164 89,169 100,164 112,169 125,164 138,169 150,164 161,169 172,164 183,169 183,90 Z" />
              <circle cx="125" cy="100" r="55" class="skin" />
              <ellipse cx="102" cy="107" rx="5" ry="5" class="eyes" id="eye-left" />
              <ellipse cx="148" cy="107" rx="5" ry="5" class="eyes" id="eye-right" />
              <rect x="119" y="140" width="12" height="40" class="skin" />
              <path class="line eyebrow" d="M 90,98 C 93,90 103,89 110,94" id="eyebrow-left" />
              <path class="line eyebrow" d="M 160,98 C 157,90 147,89 140,94" id="eyebrow-right"/>
              <path stroke="#111111" stroke-width="4" d="M 68,103 83,102.5" />
              <path stroke="#111111" stroke-width="4" d="M 182,103 167,102.5" />
              <path stroke="#050505" stroke-width="3" fill="none" d="M 119,102 C 123,99 127,99 131,102" />
              <path fill="#050505" d="M 92,97 C 85,97 79,98 80,101 81,104 84,104 85,102" />
              <path fill="#050505" d="M 158,97 C 165,97 171,98 170,101 169,104 166,104 165,102" />
              <path stroke="#050505" stroke-width="3" fill="rgba(240,240,255,0.4)" d="M 119,102 C 118,111 115,119 98,117 85,115 84,108 84,104 84,97 94,96 105,97 112,98 117,98 119,102 Z" />
              <path stroke="#050505" stroke-width="3" fill="rgba(240,240,255,0.4)" d="M 131,102 C 132,111 135,119 152,117 165,115 166,108 166,104 166,97 156,96 145,97 138,98 133,98 131,102 Z" />
              <path class="hair" d="M 60,109 C 59,39 118,40 129,40 139,40 187,43 189,99 135,98 115,67 115,67 115,67 108,90 80,109 86,101 91,92 92,87 85,99 65,108 60,109" />
              <path id="mouth" fill="#d73e3e" d="M 106,132 C 113,127 125,128 125,132 125,128 137,127 144,132 141,142  134,146  125,146  116,146 109,142 106,132 Z" /> 
              <path id="smile" fill="white" d="M125,141 C 140,141 143,132 143,132 143,132 125,133 125,133 125,133 106.5,132 106.5,132 106.5,132 110,141 125,141 Z" clip-path="url(#lips)" />
            </g>
            <g id="shirt">
              <path fill="#8665c2" d="M 132,170 C 146,170 154,200 154,200 154,200 158,250 158,250 158,250 92,250 92,250 92,250 96,200 96,200 96,200 104,170 118,170 118,170 125,172 125,172 125,172 132,170 132,170 Z"/>
              <path id="arm-left" class="arm" stroke="#8665c2" fill="none" stroke-width="14" d="M 118,178 C 94,179 66,220 65,254" />
              <path id="arm-right" class="arm" stroke="#8665c2" fill="none" stroke-width="14" d="M 132,178 C 156,179 184,220 185,254" />
              <path fill="white" d="M 117,166 C 117,166 125,172 125,172 125,182 115,182 109,170 Z" />
              <path fill="white" d="M 133,166 C 133,166 125,172 125,172 125,182 135,182 141,170 Z" />
              <circle cx="125" cy="188" r="4" fill="#5a487b" />
              <circle cx="125" cy="202" r="4" fill="#5a487b" />
              <circle cx="125" cy="216" r="4" fill="#5a487b" />
              <circle cx="125" cy="230" r="4" fill="#5a487b" />
              <circle cx="125" cy="244" r="4" fill="#5a487b" />
              <path stroke="#daa37f" stroke-width="1" class="skin hand" id="hand-left" d="M 51,270 C 46,263 60,243 63,246 65,247 66,248 61,255 72,243 76,238 79,240 82,243 72,254 69,257 72,254 82,241 86,244 89,247 75,261 73,263 77,258 84,251 86,253 89,256 70,287 59,278" /> 
              <path stroke="#daa37f" stroke-width="1" class="skin hand" id="hand-right" d="M 199,270 C 204,263 190,243 187,246 185,247 184,248 189,255 178,243 174,238 171,240 168,243 178,254 181,257 178,254 168,241 164,244 161,247 175,261 177,263 173,258 166,251 164,253 161,256 180,287 191,278"/> 
            </g>
          </g>
        </svg>
      </div>
      <div class="more-info">
        <h1>${fristname}</h1>
        <div class="coords">
          <span>${fristname} ${lastname}</span>
          <span>Joined January 2021</span>
        </div>
        <div class="coords">
          <span>${phone}</span>
          <span>${town}, ${address}</span>
        </div>
        <div class="stats">
       
      
        </div>
      </div>
    </div>
    <div class="general">
      <h1>${fristname}</h1>
      <p>Our customer focused gallery is a great new way for you to view, and share your BlackButterfly vintage inspired outfit photos. It is designed to showcase all the expressive, creative, and inspirational personalities of our community as well as for you to get a feel for our dresses from real people in real environments!
      </p>
      <span class="more">
      </span>
    </div>
  </div>

</div>
  </body>
  </html>
        `;
        var mailOptions = {
          from: "tt516483@gmail.com",
          to: email,
          subject: "BLACKBUTTERFLY",
          html: text,
        };
        transporter.sendMail(mailOptions, function (err, info) {
          if (err) {
            console.log(err);
            return res.send({
              success: false,
              messages: "Email does not exits",
            });
          } else {
            const nexmo = new Nexmo({
              apiKey: '3f504d80',
              apiSecret: 'diHr14OKpQxftQMx',
            });
            const from = 'Vonage APIs';
            const to = phone;
            const text = 'Hello from blackbutterfly , Thank for your attention';
            nexmo.message.sendSms(from, to, text);
            const newUser = new UserSchame();
            newUser.email = email;
            newUser.password = password;
            newUser.fristname=fristname
            newUser.lastname=lastname
            newUser.address=address
            newUser.town=town
            newUser.phone=phone
            newUser.postcode=postcode
            newUser.confirmpassword=confirmpassword
            newUser.save((err, data) => {
              if (err) {
                return res.send({
                  success: false,
                  messages: "Servers errors",
                });
              }
              return res.send({
                success: true,
                messages: "Sign up sucsess",
              });
            });
          }
        });
      }
    );
  });
  router.post("/signin", (req, res) => {
    const { body } = req;
    const { password } = body;
    let { email } = body;
    if (!email) {
      return res.send({
        success: false,
        messages: "Email field is required.",
      });
    }
    if (!password) {
      return res.send({
        success: false,
        messages: "Password field is required.",
      });
    }
    UserSchame.find({ email: email }, (err, data) => {
      if (err) {
        return res.send({
          success: false,
          messages: "Server errors",
        });
      }
      if (data.length != 1) {
        return res.send({
          success: false,
          messages: "user does not exits",
        });
      }
      const user = data[0];
      if (!user.password) {
        return res.send({
          success: false,
          messages: "user does not exits",
        });
      }
  
      const accesstoken = createAccessToken(user.id);
      const refreshtoken = createRefreshToken(user.id);
      sendRefreshToken(res, refreshtoken);
      sendAccessToken(res, req, accesstoken);
    });
  });
  router.get("/login/:id", (req, res) => {
    UserSchame.findById(req.params.id)
      .then((user) => res.json(user))
      .catch((err) => {
        res.status(400).json("errror" + err);
      });
  });
  router.get("/login", (req, res) => {
    UserSchame.find(req.param.id)
      .then((users) => res.json(users))
      .catch((err) => res.status(400).json("eroor" + err));
  });
  router.post("/refresh_token", (req, res) => {
    const token = req.cookies.refreshtoken;
    if (!token) return res.send({ accesstoken: `${token}` });
    let payload = null;
    try {
      payload = verify(token, "REFRESH_TOKEN_SECRET");
    } catch (error) {
      return res.send({ accesstoken: "l" });
    }
    const user = User.find((user) => user.id === payload.userId);
    if (!user) return res.send({ accesstoken: "7" });
    if (user.refreshtoken !== token) {
      return res.send({ accesstoken: "a" });
    }
    const accesstoken = createAccessToken(user.id);
    const refreshtoken = createRefreshToken(user.id);
    user.refreshtoken = refreshtoken;
    sendRefreshToken(res, refreshtoken);
    return res.send({ accesstoken });
  });
  router.post("/logout", (_req, res, next) => {
    res.clearCookie("refreshtoken", { path: "/refresh_token" });
    return res.send({
      messange: "logout ",
    });
  });
  router.post("/protected", async (req, res) => {
    try {
      const userId = isAuth(req);
      if (userId !== null) {
        res.send({ data: "this is protected data" });
      }
    } catch (error) {
      res.send({ error: `${error}` });
    }
  });
  router.post('/data/update/:id',(req,res)=>{
    UserSchame.findById(req.params.id)
    .then(user =>{
    if(!req.body.fristname){
       user.fristname===user.fristname
    }else{
       user.fristname=req.body.fristname
    }
    if(!req.body.email){
       user.email===user.email
    }else{
       user.email=req.body.email
    }
    if(!req.body.lastname){
      user.lastname===user.lastname
   }else{
      user.lastname=req.body.lastname
   }
   if(!req.body.phone){
    user.phone===user.phone
 }else{
    user.phone=req.body.phone
 }
    if(!req.body.password){
       user.password===user.password
       user.confirmpassword===user.confirmpassword
    }else{
       user.password=req.body.password
       user.confirmpassword===req.body.password
    }
       user.save()
       .then(()=> res.json('user update'))
       .catch(err =>res.status(400).json('error'+err))
  
    })
    .catch(err =>{res.status(400).json('errror'+err)})
   })
  module.exports = router;
