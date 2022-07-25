import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { login } from '../../features/users/userSlice';
import './login.css'

const Login =()=>{
    
    let history = useHistory();
    const isLogged = useSelector((state) => state.users.isLogged);
    // console.log(user);
    const [userData , setUserData] =useState({email:"" , password:""}) 
    const dispatch = useDispatch();

    const handleChange = (e)=>{
        e.preventDefault()
        setUserData({
          ...userData,
          [e.target.name]: e.target.value
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
    //    console.log(userData)
        dispatch(login(userData));
    }
    useEffect(()=>{
        isLogged ? history.push("/productList"): history.push("/login");
    },[isLogged])
    

    return(
      

<section className="my-5">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid" alt="Sample image"/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
      <form onSubmit={handleSubmit}>
          <div className="form-outline mb-4">
            <input type="email" name="email"  onChange={handleChange} id="form3Example3" className="form-control form-control-lg"
              placeholder="Enter a valid email address" />
            <label className="form-label" for="form3Example3">Email address</label>
          </div>

         
          <div className="form-outline mb-3">
            <input type="password" name="password" 
                onChange={handleChange} id="form3Example4" className="form-control form-control-lg"
              placeholder="Enter password" />
            <label className="form-label" for="form3Example4">Password</label>
          </div>

          <div className="d-flex justify-content-between align-items-center">
           
            <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label className="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" className="text-body">Forgot password?</a>
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="submit" className="btn btn-primary btn-lg"
              style={{ paddingLeft: '2.5rem; padding-right: 2.5rem' }}>Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                className="link-danger">Register</a></p>
          </div>

        </form>
      </div>
    </div>
  </div>
</section>






    )
}

export default Login;