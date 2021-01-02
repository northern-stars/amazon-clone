import React from 'react'
import { Grid, Paper } from "@material-ui/core";
import  "../sign.css";


export default function SignUp() {
    return (
        <div>
            <div class="section-logo">
                <a href="/">
                    <img id="sign-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="brand logo"/>
                </a>
            </div>
            <div class="main">
                <Grid container justify="center" >
                    <Grid item xs={12} sm={5} md={3}>
                        <Paper id="paper"> 
                            <form class="signUp-form" method="POST" action="">
                                <h1 class="form-header" >Create account</h1>
                                <label for="signUp-form">Your name</label>
                                <input class="form-input" type="text" name="userNameSignup" required/>
                                <label for="signUp-form">Email</label>
                                <input class="form-input" type="email" name="userEmailSignup" placeholder="Enter email adress" required/>
                                <label for="signUp-form">Password</label>
                                <input class="form-input" type="password" name="userPasswordSignup" placeholder="At least 6 characters" required/>
                                <p>Please select account:</p>
                                <div>
                                    <div class="account-select">
                                        <input type="radio" id="user" name="Account" value="user" checked/>
                                        <label for="user">Create user account</label>
                                    </div>
                                    <div class="account-select">
                                        <input type="radio" id="seller" name="Account" value="seller"/>
                                        <label for="seller">Create seller account</label>
                                    </div>
                                </div>
                                <button class="form-button" type="submit">Create your Amazon Account</button>  
                            </form>
                            <div class="section-text">
                                By continuing, you agree to Amazon's  <a href="/gp/help/customer/display.htmlref=ap_signin_notification_condition_of_use?ie=UTF8&amp;nodeId=201909000"> Conditions of Use and Privacy Notice.</a>
                            </div>
                            <div class="section-text">
                                Already have an account?<a href="\signin"> Sign-In</a>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
