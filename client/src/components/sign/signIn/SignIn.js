import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import "../sign.css";

export default function SignIn() {
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
                            <form class="signIn-form" method="POST" action="">
                                <h1 class="form-header" >Sign-In</h1>
                                <label for="signIn-form">Email</label>
                                <input class="form-input" type="email" name="userEmailSignIn" required/>
                                <button class="form-button" type="submit">Continue</button>  
                            </form>
                            <div class="section-text">
                                By continuing, you agree to Amazon's  <a href="/gp/help/customer/display.htmlref=ap_signin_notification_condition_of_use?ie=UTF8&amp;nodeId=201909000"> Conditions of Use and Privacy Notice.</a>
                            </div>
                            <div class="section-text">
                                <a href="">Need help?</a>
                            </div>
                        </Paper>
                        <div class="divider">
                                <h5>New to Amazon?</h5>
                        </div>
                        <button class="create-button" type="button">
                            <a href="/signup">Create your Amazon account</a>
                        </button>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

