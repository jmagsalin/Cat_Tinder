import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import Routes from './Routes';
import { getCats, createCat, updateCat } from './api';
import Cats from './pages/Cats.js';
import NewCat from './pages/NewCat.js';
import Header from './Header.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cats: [
      ]
    }
  }

  componentWillMount() {
    getCats()
  	.then(APIcats => {
  	  this.setState({
  		cats: APIcats
  	  })
  	})
  }
  
  handleNewCat(newCatInfo) {
    console.log(newCatInfo)
	createCat(newCatInfo)
    .then(successCat => {
        console.log("SUCCESS! New cat: ", successCat);
    })
  }
 
// handleUpdateCat(updatedCatInfo) {
//     console.log(updatedCatInfo)
// 	updateCat(updatedCatInfo)
//     .then(successCat => {
//         console.log("SUCCESS! Updated cat: ", successCat);
//     })
//   }
  
  render() {
    return (
      <div>
  		 <Header />
  		   
  			<Router>
  				<Switch>
  					<Route exact path="/cats" render={( props) => <Cats cats={this.state.cats}/> } />
          	<Route exact path="/" render={(props)=> <NewCat handleNewCat={this.handleNewCat}/> } />
          	
  				</Switch>
  			</Router>
	  	</div>
    );
  }
}

export default App;
