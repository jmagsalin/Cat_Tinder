import React, { Component } from 'react';

class Form extends Component{
    render(){
        return(
          <div>
            <form>
                <label id = "nameInput">Name</label>
                <input type = "text" name = "name"/>
             </form>
        
            <form>
                <label id = "ageInput">Age</label>
                <input type = "text" name = "age"/>
            </form>
        
            <form>
                <label id = "enjoys">Enjoys</label>
                <input type = "text" name = "enjoys"/>
            </form>
          </div>
    )}
}
    
export default Form;