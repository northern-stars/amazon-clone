import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import "../signIn/signIn.css";

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
                            <Paper> 
                                <form class="signIn-form" method="POST" action="">
                                    <h1 class="form-header" >Giriş yap</h1>
                                    <label for="signIn-form">E-posta adresi veya telefon numarası</label>
                                    <input class="form-input" type="email" name="userSignIn" required/>
                                    <button class="form-button" type="submit">Devam Et</button>  
                                </form>
                                <div class="section-text">
                                Oturum açarak, Amazon'un <a href="/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&amp;nodeId=201909000">Kullanım ve Satış Koşulları'nı</a> kabul etmiş olursunuz. Kişisel verilerinizin Amazon tarafından nasıl işlendiğine ilişkin detaylı bilgi için <a href="">Gizlilik Bildirimi</a>, <a href="/gp/help/customer/display.html/?nodeId=201890250">Çerez Bildirimi</a> ve <a href="/gp/BIT/InternetBasedAds">İlgi Alanına Dayalı Tanıtımları</a> inceleyebilirsiniz. 
                                </div>
                            </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

