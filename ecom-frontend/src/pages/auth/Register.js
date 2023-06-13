import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Jumbotron from '../../components/cards/Jumbotron';
import { useAuth } from '../../context/auth';

const Register = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    //hooks
    const navigate=useNavigate();
    const [auth,setAuth]=useAuth();

    const handleSubmit=async(e)=>{
      e.preventDefault();
      try{
        const {data}=await axios.post(`/register`,{
          name,
          email,
          password
        
        });
        console.log(data);
        if(data?.error){
          toast.error(data.error)
        }else{
          localStorage.setItem("auth",JSON.stringify(data));
          setAuth({...auth, token:data.token,user:data.user}); 
          toast.success("Registaion successfull");
          navigate("/dashboard");
        }
      }catch(error){
        console.log(error)
        toast.error("Registation failed, try again");
      }

    }
    return (
        <div>
          <Jumbotron title="Register" subTitle="Welcome to Register Page"/>
            <div className="container mt-5">
              <div className="row">
                <div className="col-md-6 offset-md-3">
                 <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    className='form-control mb-4 p-2'
                    placeholder='Enter your name'
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    autoFocus
                    />
                    <input 
                    type="email"
                    className="form-control mb-4 p-2"
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}

                    />
                    <input
                    type="password"
                    className="form-control mb-4 p-2"
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                   
                    <button className="btn btn-primary" type="submit">
                    Register
                    </button>
                 </form>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Register;