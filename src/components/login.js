import React from 'react'
import './login.css'

const login = () => {
    return (
        <>
        <script scr="https://unicons.iconscout.com/release/v2.1.9/css/unicons.css"></script>
            <div class="section">
                <div class="container">
                    <div class="row full-height justify-content-center">
                        <div class="col-12 text-center align-self-center py-5">
                            <div class="section pb-5 pt-5 pt-sm-2 text-center">
                                <h6 class="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
                                <input class="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
                                <label for="reg-log"></label>
                                <div class="card-3d-wrap mx-auto">
                                    <div class="card-3d-wrapper">
                                        <div class="card-front">
                                            <div class="center-wrap">
                                                <div class="section text-center">
                                                    <h4 class="mb-4 pb-3">User Log In</h4>
                                                    <div class="form-group">
                                                        <input type="email" name="logemail" class="form-style" placeholder="Email" id="log_email" autocomplete="none" required/>
                                                        <i class="input-icon uil uil-at"></i>
                                                    </div>	
                                                    <div class="form-group mt-2">
                                                        <input type="password" name="logpass" class="form-style" placeholder="Password" id="log_pass" autocomplete="none" required/>
                                                        <i class="input-icon uil uil-lock-alt"></i>
                                                    </div>
                                                    <a href="#abc" class="btn mt-4" id="btn_login">submit</a>
                                                    <p class="mb-0 mt-4 text-center">
                                                        <a href="#abc" class="link">Forgot your password?</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-back">
                                            <div class="center-wrap">
                                                <div class="section text-center">
                                                    <h4 class="mb-4 pb-3">User Sign Up</h4>
                                                    <div class="form-group">
                                                        <input type="text" name="signname" class="form-style" placeholder="Name" id="sign_name" autocomplete="none" required/>
                                                        <i class="input-icon uil uil-user"></i>
                                                    </div>	
                                                    <div class="form-group mt-2">
                                                        <input type="email" name="signemail" class="form-style" placeholder="Email" id="sign_email" autocomplete="none" required/>
                                                        <i class="input-icon uil uil-at"></i>
                                                    </div>	
                                                    <div class="form-group mt-2">
                                                        <input type="password" name="signpass" class="form-style" placeholder="Password" id="sign_pass" autocomplete="none" required/>
                                                        <i class="input-icon uil uil-lock-alt"></i>
                                                    </div>
                                                    <a href="#abc" class="btn mt-4" id="btn_signup">submit</a>
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
