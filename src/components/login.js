import React from 'react'
import './login.css'

const login = () => {
    return (
        <>
        <script scr="https://unicons.iconscout.com/release/v2.1.9/css/unicons.css"></script>
        <div className="dummyDiv"></div>
            <div className="section">
                <div className="container">
                    <div className="row full-height justify-content-center">
                        <div className="col-12 text-center align-self-center py-5">
                            <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
                                <input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
                                <label htmlFor="reg-log"></label>
                                <div className="card-3d-wrap mx-auto">
                                    <div className="card-3d-wrapper">
                                        <div className="card-front">
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <h4 className="mb-4 pb-3">User Log In</h4>
                                                    <div className="form-group">
                                                        <input type="email" name="logemail" className="form-style" placeholder="Email" id="log_email" autoComplete="none" required/>
                                                        <i className="input-icon uil uil-at"></i>
                                                    </div>	
                                                    <div className="form-group mt-2">
                                                        <input type="password" name="logpass" className="form-style" placeholder="Password" id="log_pass" autoComplete="none" required/>
                                                        <i className="input-icon uil uil-lock-alt"></i>
                                                    </div>
                                                    <a href="#abc" className="btn mt-4" id="btn_login">submit</a>
                                                    <p className="mb-0 mt-4 text-center">
                                                        <a href="#abc" className="link">Forgot your password?</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-back">
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <h4 className="mb-4 pb-3">User Sign Up</h4>
                                                    <div className="form-group">
                                                        <input type="text" name="signname" className="form-style" placeholder="Name" id="sign_name" autoComplete="none" required/>
                                                        <i className="input-icon uil uil-user"></i>
                                                    </div>	
                                                    <div className="form-group mt-2">
                                                        <input type="email" name="signemail" className="form-style" placeholder="Email" id="sign_email" autoComplete="none" required/>
                                                        <i className="input-icon uil uil-at"></i>
                                                    </div>	
                                                    <div className="form-group mt-2">
                                                        <input type="password" name="signpass" className="form-style" placeholder="Password" id="sign_pass" autoComplete="none" required/>
                                                        <i className="input-icon uil uil-lock-alt"></i>
                                                    </div>
                                                    <a href="#abc" className="btn mt-4" id="btn_signup">submit</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
	        </div>
            
        </>
    )
}

export default login
