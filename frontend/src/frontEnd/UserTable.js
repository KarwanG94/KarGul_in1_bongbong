import React, { Component } from 'react'
import { Card, CardText, CardActions, Button } from 'react-mdl';

/**
 * @description - Component that handles api requests, Fetches users
 * Posting new ones and also delete current (already created users)
 * Im using react mdl as a library for my "card"
 * @author - Karwan Gulnezer
 */

 class UserTable extends Component {
  constructor(props){
    super(props);

    this.state = {
      userObj: [],
  
      newUser: {
        name: '',
        username: '',
        email: '',

          address: {
            city: '',
            street: '',
            zipcode: '',
          }
      }
    }
  }


  componentDidMount(){
    this.fetchUserFromAPI();
  }

/**
 * MY fetches/api requests,
 * GET, POST & DELETE.
 * my local api is in localhost with port 3001, im using it as my BASE_URL
 */

  BASE_URL = 'http://localhost:3001';

  fetchUserFromAPI = () => {
    return fetch(this.BASE_URL + '/api/users')
    .then(response => {

      return response.json();
    }).then((result) => {
      
      this.setState({
        userObj: result
      })
    })
  }

  postUserApi = () => {    
    
    return fetch(this.BASE_URL + '/api/users/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(this.state.newUser)
    })
    .then(response => response.json())
      .then((json) => {
          this.fetchUserFromAPI();          
      })
  }

  deleteUserApi = userId => {        
    return fetch(this.BASE_URL + '/api/users/'+userId, {
      method: 'DELETE',
    }).then(response => {
        
      return response.json();
    }).then((result) => {
      this.fetchUserFromAPI();
    })
  }

  handleInputName = (event) => {
      this.setState({
        newUser: {
          ...this.state.newUser,
          name: event.target.value,
        }
      });  
  }

  handleInputUserName = (event) => {
    this.setState({
      newUser: {
        ...this.state.newUser,
        username: event.target.value
      }
    });  
}

  handleInputEmail = (event) => {
      this.setState({
        newUser: {
          ...this.state.newUser,
          email: event.target.value
        }
      });
}

handleInputCity = (event) => {
    this.setState({
      newUser: {
        ...this.state.newUser,
        address: {
          ...this.state.newUser.address,
          city: event.target.value,
        }
      }
    });
}

handleInputStreet = (event) => {
  this.setState({
    newUser: {
      ...this.state.newUser,
      address: {
        ...this.state.newUser.address,
        street: event.target.value,
      }
    }
  });
}

handleInputZip = (event) => {
  this.setState({
    newUser: {
      ...this.state.newUser,
      address: {
        ...this.state.newUser.address,
        zipcode: event.target.value,
      }
    }
  });
}

  addUser = (e) => {
    e.preventDefault();
    console.log('added');
    this.postUserApi();
  }

  createCard = () => {    
    return this.state.userObj.map((user) => {
      return(
        <div className="grid-item"  key={user._id}>
          <Card shadow={0} style={{width: '50%', height: '320px', margin: 'auto'}}>
              <CardText>
              <b>ID:</b>{user._id} <br />
              </CardText>
              
              <CardText>
              <b>Name:</b>{user.name} <br />
              </CardText>
              
              <CardText>
              <b>Username:</b>{user.username} <br />
              </CardText>
              
              <CardText>
              <b>Email:</b>{user.email} <br />
              </CardText>
              
              <CardText>
              <b>City:</b>{user.address.city} <br />
              </CardText>
              
              <CardText>
              <b>Street:</b>{user.address.street} <br />
              </CardText>
              
              <CardText>
              <b>Zip:</b>{user.address.zipcode} <br />
              </CardText>
              
              <CardActions border>
                  <Button onClick={() => {this.deleteUserApi(user._id)}} colored>Delete</Button>
              </CardActions>
          </Card>
        </div>
      )
    })
  }

  render() {        
    return (
      <div>
        <div className="formContainer">
          <form className="formContent">
            <input type="name" value={this.state.userObj.name} onChange={this.handleInputName}  placeholder="name..." ></input>
            <input type="username" value={this.state.userObj.name} onChange={this.handleInputUserName}  placeholder="Username..." ></input>
            <input type="email" value={this.state.userObj.email} onChange={this.handleInputEmail}  placeholder="Email..." ></input>
            <input type="city" value={this.state.userObj.city} onChange={this.handleInputCity}  placeholder="City..." ></input>
            <input type="street" value={this.state.userObj.street} onChange={this.handleInputStreet}  placeholder="Street..." ></input>
            <input type="zip" value={this.state.userObj.zipcode} onChange={this.handleInputZip}  placeholder="ZipCode..." ></input>

            <button onClick={this.addUser} type="submit" className="btn btn-primary">Add</button>
          </form>
        </div>
        
        <div className="cardContainer">
      
           {this.createCard()}
         
        </div>
      </div>
      
    )}
 }
export default UserTable;
