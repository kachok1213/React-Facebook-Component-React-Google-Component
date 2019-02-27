import React, { Component, } from 'react';
import { GoogleLogin} from 'react-google-login-component';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/Button';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';

class Hompage extends Component{

  constructor (props) {
    super(props);
    this.state = {
    gtoken:"",
    gmail:"",
    persons:[]
   
    }
  
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
        console.log(this.state.persons)
       
      })
    
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
      <div style={{display: 'grid',  placeItems: 'center',height: '25vh'}}>
        <GoogleLogin  socialId="1087269634555-dpo1jc3kdve228ktfi8tt5k35c5fpee3.apps.googleusercontent.com"
                     className="google-login"
                     scope="profile email"
                     prompt="select_account"
                     fetchBasicProfile={true}
                     responseHandler={this.responseGoogle}
                     buttonText="Login With Google"/>
                     <div>google data <br/>
                           {this.state.gmail}
                     </div>
                     <Button variant="danger" onClick={()=>this.props.history.push('Fb')} >Navigate to Fb</Button>
                   
                    
      </div>
      <div style={{display: 'grid',  placeItems: 'center',height: '150vh'}}>
        {this.state.persons.map((item,i)=> {return <Card key={i}><CardContent style={{width:'20vh',backgroundColor:'orange'}}>{item.id}<br/>{item.name}<br/>{item.city}<br/>{item.email}</CardContent></Card>})}
      </div>
    </div>
    );
  }

}



export default Hompage;