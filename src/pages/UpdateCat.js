import React, { Component } from 'react';
import {
  Col, Container, Row, Form
} from 'react-bootstrap';


class UpdateCat extends Component {
constructor(props){
  super(props)
  this.state = {
    form:{
      name: '',
      age: '',
      enjoys: ''
    }
  }
}

handleChange = (event) => {
  let {form} = this.state
  form[event.target.name] = event.target.value
  this.setState({form: form})
}

handleUpdateCat = (e) => {
      e.preventDefault()
      console.log("updating cat", this.state.form)
      this.props.handleUpdateCat(this.state.form)
 }
    render(){
        return(
            <div>
            <Container>
            <body>
              <img src = "https://media.giphy.com/media/RU4KgvUGsj3eE/giphy.gif" alt="description of image"/>
              <h2>Submit your info to edit your kitty profile</h2>
                <form>
                <Row>
                <Col xs={1}>
                <label>Name</label>
                    <Form.Control
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                        value={this.state.form.name}
                        />
                </Col>    
                </Row>
                    
                    
                <Col xs={1}>
                        <label>Age</label>
                        <Form.Control
                        type="numeric"
                        name="age"
                        onChange={this.handleChange}
                        value={this.state.form.age}
                        />
                </Col>
                    
                    
                <Col xs={7}>
                        <label>Enjoys (minimum 10 characters)</label>
                        <Form.Control
                        type="text"
                        name="enjoys"
                        onChange={this.handleChange}
                        value={this.state.form.enjoys}
                        />
                </Col>        
                        <button onClick = { this.handleUpdateCat }>Submit</button>
                        
                </form>
            
                
    	        </body>
    	        </Container>
            </div>
        )
    }
}
export default UpdateCat;