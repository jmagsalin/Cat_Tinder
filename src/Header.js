import React, { Component } from 'react';
import {
  Jumbotron, Carousel
} from 'react-bootstrap';
import image from "./cat.jpg"


class Header extends Component {
    render (){
        var backStyle = {
        backgroundImage: `./cat.jpg(${image})`
        }
            return(
                
                <Jumbotron style = { backStyle }>
                    <h1>Welcome to Cat Tinder!</h1>
                    <Carousel>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src="https://media.giphy.com/media/VxbvpfaTTo3le/giphy.gif"
                              alt="First slide"
                            />
                            <Carousel.Caption>
                              <h3>Meet New Cats</h3>
                              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src=""
                              alt="Third slide"
                            />
                        
                            <Carousel.Caption>
                              <h3>Second slide label</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src="holder.js/800x400?text=Third slide&bg=20232a"
                              alt="Third slide"
                            />
                        
                            <Carousel.Caption>
                              <h3>Third slide label</h3>
                              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                          </Carousel.Item>
                        </Carousel>
                  
                  <p>
                    It's time to take a leap of faith
                  </p>
                </Jumbotron>
        )}
}
export default Header;