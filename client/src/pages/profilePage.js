import './profilePage.css';
import Header from "../components/header/Header";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/profile3.png";
import profile4 from "../assets/profile4.png";
import profile5 from "../assets/profile5.png";
import profile6 from "../assets/profile6.png";
import profile7 from "../assets/profile7.png";

function profilePage() {

  return (
    <div className="profilePage">
      <Header />
      <div className="text-wrapper"><h2>Your Account</h2></div>
      <div className="images-wrapper">
        <button><img src={profile1} width="318" height="88" alt="profile1"/></button>
        <button><img src={profile2} width="318" height="88" alt="profile2"/></button>
        <button><img src={profile3} width="318" height="88" alt="profile3"/></button>
        <button><img src={profile4} width="318" height="88" alt="profile4"/></button>
        <button><img src={profile5} width="318" height="88" alt="profile5"/></button>
        <button><img src={profile6} width="318" height="88" alt="profile6"/></button>
        <button><img src={profile7} width="318" height="88" alt="profile7"/></button>
      </div>
      <hr style={{marginRight: 180, marginLeft: 160, marginTop: 50, marginBottom: 50, color: '#ededed'}}></hr>
      <div className="wrap">
          <div className="box">
              <h3>Ordering and shopping <br></br>preferences</h3>
              <a>Your addresses</a><br></br>
              <a>Your Payments</a><br></br>
              <a>Your Amazon profile</a><br></br>
              <a>Archived orders</a><br></br>
              <a>Manage your lists</a><br></br>
              <a>Download order reports</a><br></br>
              <a>1-Click settings</a><br></br>
              <a>Amazon Fresh settings</a><br></br>
              <a>Language preferences</a><br></br>
              <a>Manage saved IDs</a><br></br>
              <a>Coupons</a><br></br>
              <a>Product Vouchers</a><br></br>
          </div>
          <div className="box">
              <h3>Digital content and devices</h3>
              <a>Manage content and devices</a><br></br>
              <a>Your apps</a><br></br>
              <a>Prime Video settings</a><br></br>
              <a>Amazon Music settings</a><br></br>
              <a>Manage Amazon Drive and photos</a><br></br>
              <a>Digital games and software</a><br></br>
              <a>Twitch settings</a><br></br>
              <a>Audible settings</a><br></br>
              <a>Amazon Coins</a><br></br>
              <a>Digital gifts you've received</a><br></br>
              <a>Digital and device forum</a><br></br>
          </div>
          <div className="box">
              <h3>Memberships and subscriptions</h3>
              <a>Kindle Unlimited</a><br></br>
              <a>Prime Video Channels</a><br></br>
              <a>Music Unlimited</a><br></br>
              <a>Subscribe & Save</a><br></br>
              <a>FreeTime Unlimited</a><br></br>
              <a>Audible membership</a><br></br>
              <a>Your Essentials</a><br></br>
              <a>Magazine subscriptions</a><br></br>
              <a>Other subscriptions</a><br></br>
          </div>
      </div>
      <div className="wrap">
          <div className="box">
              <h3>Communication and content</h3>
              <a>Messages from Amazon and sellers</a><br></br>
              <a>Email subscriptions</a><br></br>
              <a>Advertising preferences</a><br></br>
              <a>Communication preferences</a><br></br>
              <a>Shipment updates via text</a><br></br>
              <a>Alexa shopping notifications</a><br></br>
              <a>Deals Notifications</a><br></br>
              <a>Videos you've uploaded</a><br></br>
          </div>
          <div className="box">
              <h3>Shopping programs and rentals</h3>
              <a>Third Party Credit Card Installment</a><br></br>
              <a>Manage Your Profiles</a><br></br>
              <a>Rentals by Amazon</a><br></br>
              <a>Amazon Household</a><br></br>
              <a>Pantry</a><br></br>
              <a>Shop the Kids' Store by age</a><br></br>
              <a>No-Rush rewards summary</a><br></br>
              <a>Teens Program</a><br></br>
              <a>Pet Profiles</a><br></br>
              <a>Shop with Points</a><br></br>
              <a>Amazon Second Chance</a><br></br>
          </div>
          <div className="box">
              <h3>Other programs</h3>
              <a>Amazon credit cards</a><br></br>
              <a>Your seller account</a><br></br>
              <a>Login with Amazon</a><br></br>
              <a>Amazon Pay</a><br></br>
              <a>Manage your trade-ins</a><br></br>
              <a>Amazon Web Services</a><br></br>
              <a>Amazon tax exemption program</a><br></br>
          </div>
      </div>
    </div>
  );
};

export default profilePage;
