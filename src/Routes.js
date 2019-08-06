import React,{ Component } from 'react';
import Cats, 
import { Link, Switch, Route } from 'react-router-dom'

class Routes extends Component {
    render(){
        return(
            <div>
                <ul>
                    <li>
                        <Link> to = '/'>Home</Link>
                    </li>
                    <li>
                        <Link> to = 'Cats'>Cats</Link>
                    </li>
                <Switch>
                    
            
            
            
            <Route path = '/' render = {(props) => <Form handleNewCat = { this.handleNewCat } />} />
            <Route path = '/Cats' render {(props) => <Cats
                                                    cats = { this.state.cats }
                                                    />}
            </Switch>
            </div>
            )
    }
}
export default Routes;