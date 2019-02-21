import React, { Component } from 'react';
import { FacebookLogin } from 'react-facebook-login-component';


class Fb extends Component {

    constructor (props) {
        super(props);
        this.state = {
            fbmail:"",
            fbname:"",
            fbtoken:""
        }
        
    }

    responseFacebook = (response) =>{
        console.log(response);
        this.setState({fbmail:response.email,fbname:response.name,fbtoken:response.accessToken});
        //anything else you want to do(save to localStorage)...
      }
    render() {
        return (
            <div>
                 <FacebookLogin socialId="353796128542917"
                       language="en_US"
                       scope="public_profile,email"
                       responseHandler={this.responseFacebook}
                       xfbml={true}
                       fields="id,email,name"
                       version="v2.5"
                       className="facebook-login"
                       buttonText="Login With Facebook"/>
                       <div>facebook data <br/>
                           {this.state.fbmail},{this.state.fbname}
                       </div>
                       <button onClick={()=>this.props.history.goBack()}>go back to google</button>
            </div>
        );
    }
}

export default Fb;