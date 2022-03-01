import React from 'react'
import * as ReactBootStrap from 'react-bootstrap';
import Layout from '../components/Layout';

function About(props){
    return(
       <Layout>
       <div id = 'about-body'>
        
        <section id = 'about-container'>
        <ReactBootStrap.Card className ='about-card' style ={{border:'none'}}>
  <div id ='bs-img-container'style = {{backgroundColor: '#f5f5dc'}} >
  <ReactBootStrap.Card.Img id = 'bs-img' variant="top" src="https://i.imgur.com/x5CW8IT.jpg" />
  </div>
  <ReactBootStrap.Card.Body style = {{backgroundColor: '#f5f5dc'}}>
    <ReactBootStrap.Card.Title>About Me</ReactBootStrap.Card.Title>
    <ReactBootStrap.Card.Text>
      <p>Hello there! My name is Andy Terwilliger, and I am a developer living in Chicago, Illinois.
          I began my career in web development during the midst of the pandemic after spending the majority of my adult career as a firefighter. By doing so, I have found a passion for creating
          well-designed, clean, and functional web applications. When not coding or building apps, you can usually find me running on Chicago's beautiful lakefront trail, watching a Cubs game, or simply hanging
          out with my wife, Julia, and my dog, Henry. I hope you'll enjoy my portfolio. 
      </p>
    </ReactBootStrap.Card.Text>
   <a target = '_blank'href='https://cat-collector-bucket2.s3.amazonaws.com/ATerwilligerResume.pdf' download><ReactBootStrap.Button id='resume-btn'>Download Resume</ReactBootStrap.Button></a>
  </ReactBootStrap.Card.Body>
</ReactBootStrap.Card>

        </section>
        </div>
        </Layout>
    )
}

export default About;