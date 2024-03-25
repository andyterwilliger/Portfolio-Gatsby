import React from "react"
import Layout from "../components/Layout";
import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function Home(props) {
  return (
  <Layout>
  <section id = 'home-body' style={{ minHeight: '100vh'}}>
  <div id = 'chicago-img-container'>
 
 </div>
 <br/>
 <br/>
      <div>

          <h1 id = 'home-h1'>
             Hi, I'm Andy.
  </h1> <br/> <br/>
          <h2 id = 'home-h2'>
             I'm a developer and problem solver. 
  </h2>
      </div>
      </section>
      </Layout>
  )
}


export default Home;