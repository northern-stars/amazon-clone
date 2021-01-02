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
                                <h1 class="form-header" >Hesap Oluştur</h1>
                                <label for="signUp-form">Ad-Soyad</label>
                                <input class="form-input" type="text" name="userNameSignup" required/>
                                <label for="signUp-form">E-Posta</label>
                                <input class="form-input" type="email" name="userEmailSignup" placeholder="E-Posta adresiniz" required/>
                                <label for="signUp-form">Şifre</label>
                                <input class="form-input" type="password" name="userPasswordSignup" placeholder="En az 6 karakter" required/>
                                <p>Lütfen hesap türü seçin:</p>
                                <div>
                                    <div class="account-select">
                                        <input type="radio" id="user" name="Account" value="user" checked/>
                                        <label for="user">Kullanıcı hesabı oluştur</label>
                                    </div>
                                    <div class="account-select">
                                        <input type="radio" id="seller" name="Account" value="seller"/>
                                        <label for="seller">Satıcı hesabı oluştur</label>
                                    </div>
                                </div>
                                <button class="form-button" type="submit">Amazon hesabınızı oluşturun</button>  
                            </form>
                            <div class="section-text">
                                Oturum açarak, Amazon'un <a href="/gp/help/customer/display.htmlref=ap_signin_notification_condition_of_use?ie=UTF8&amp;nodeId=201909000">Kullanım ve SatışKoşulları'nı</a> kabul etmiş olursunuz. Kişisel verilerinizin Amazon tarafından nasıl işlendiğineilişkin detaylı bilgi için <a href="">Gizlilik Bildirimi</a>, <a href="/gp/help/customer/displayhtml/?nodeId=201890250">Çerez Bildirimi</a> ve <a href="/gp/BIT/InternetBasedAds">İlgi AlanınaDayalı Tanıtımları</a> inceleyebilirsiniz. 
                            </div>
                            <div class="section-text">
                                Zaten bir hesabınız var mı?<a href="\signin"> Giriş yap</a>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
