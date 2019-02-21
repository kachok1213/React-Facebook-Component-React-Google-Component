import React, { Component, } from 'react';
import { GoogleLogin} from 'react-google-login-component';


class Hompage extends Component{

  constructor (props) {
    super(props);
    this.state = {
    gtoken:"",
    gmail:"",
   
    }
  
  }
   responseGoogle = async (googleUser) => {
    var id_token = await googleUser.getAuthResponse().id_token;
    var googleId =  await googleUser.getBasicProfile();
    var email = await googleUser.getBasicProfile().U3;
    console.log(email);
    console.log(googleId)
    this.setState({gtoken:id_token,gmail:email})
   
  }



  render () {
   
    return (
      <div>
        <GoogleLogin socialId="1087269634555-dpo1jc3kdve228ktfi8tt5k35c5fpee3.apps.googleusercontent.com"
                     className="google-login"
                     scope="profile email"
                     prompt="select_account"
                     fetchBasicProfile={true}
                     responseHandler={this.responseGoogle}
                     buttonText="Login With Google"/>
                     <div>google data <br/>
                           {this.state.gmail}
                     </div>
                     <button onClick={()=>this.props.history.push('Fb')}>Navigate to Fb</button>
      </div>
    );
  }

}



export default Hompage;