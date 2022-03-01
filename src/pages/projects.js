import React from 'react'

import * as ReactBootStrap from 'react-bootstrap';
import Layout from '../components/Layout';


function Projects(props){
    return(
      <Layout>
        <div id = 'projects-body'>
            <h1>Projects</h1>
      <div id = 'projects-cards'>
            <ReactBootStrap.Card style={{ width: '20rem' }}>
  <ReactBootStrap.Card.Img variant="top" src="https://i.imgur.com/qDvV5H9.png" />
  <ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Title>Runner's High</ReactBootStrap.Card.Title>
    <ReactBootStrap.Card.Text>
     Full stack, CRUD application built on an Express.js framework. Users have the ability to
     sign up for an account, log in, and add their running shoes while tracking mileage to be able to know
     when to replace the shoes.
    </ReactBootStrap.Card.Text>
   <a href ='https://andys-runners-high.herokuapp.com/users' target = '_blank'><ReactBootStrap.Button id='project-btn4' variant="primary">Launch</ReactBootStrap.Button></a> 
  </ReactBootStrap.Card.Body>
</ReactBootStrap.Card>


<ReactBootStrap.Card style={{ width: '20rem' }}>
  <ReactBootStrap.Card.Img variant="top" src="https://i.imgur.com/fIZXzIK.png" />
  <ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Title>BrewReview</ReactBootStrap.Card.Title>
    <ReactBootStrap.Card.Text>
      A full stack, CRUD application built with Python on a Django back end. Users have the ability
      to sign up for an account, log in, and add their favorite beers while keeping track of statistics such as
      the ABV, flavor profile, and location.
    </ReactBootStrap.Card.Text>
   <a target = '_blank' href="https://andysbrewreview.herokuapp.com/"><ReactBootStrap.Button id='project-btn1' variant="primary">Launch</ReactBootStrap.Button></a> 
  </ReactBootStrap.Card.Body>
</ReactBootStrap.Card>

<ReactBootStrap.Card style={{ width: '20rem' }}>
  <ReactBootStrap.Card.Img variant="top" src="https://i.imgur.com/IZaEP1x.png" />
  <ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Title>WarHandler</ReactBootStrap.Card.Title>
    <ReactBootStrap.Card.Text>
      A full stack React application built on an Express back end. I worked across the stack on a team of fellow developers to build
      an app where a user can create and track different units from the popular tabletop game 'WarHammer 40K'.
    </ReactBootStrap.Card.Text>
   <a target='_blank' href="https://warhandler.netlify.app/"> <ReactBootStrap.Button id= 'project-btn2' variant="primary">Launch</ReactBootStrap.Button></a>
  </ReactBootStrap.Card.Body>
</ReactBootStrap.Card>

<ReactBootStrap.Card style={{ width: '20rem' }}>
  <ReactBootStrap.Card.Img variant="top" src="https://i.imgur.com/Y9i1YFe.png" />
  <ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Title>BreweryFinder</ReactBootStrap.Card.Title>
    <ReactBootStrap.Card.Text>
      A simple front end application built using HTML, Vanilla JavaScript, CSS, and the OpenBreweryDB API. Users can search for their current city, and an AJAX request to
      the  API will return a selection of breweries in that city. 
    </ReactBootStrap.Card.Text>
   <a target = '_blank' href="https://andyterwilliger.github.io/Brewery-Finder/"><ReactBootStrap.Button id= 'project-btn3'  variant="primary">Launch</ReactBootStrap.Button></a> 
  </ReactBootStrap.Card.Body>
</ReactBootStrap.Card>
</div>
        </div>
        </Layout>
    )
}

export default Projects;