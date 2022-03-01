import React from 'react';

function Contact(props){

    return(
        <div id = 'contact-body'>
            <h1>Contact Me</h1>
            <section>
            <div id ='form-container'>
            <form action="https://formspree.io/f/mvolaeyj"
             method= 'POST'
            >
                <div className = 'form-group'>
                <label for="firstName">First Name: </label>
                <input type="text" name="firstName" id="firstName"/>
                </div>
                <div className = 'form-group'>
                <label for="lastName">Last Name: </label>
                <input type="text" name="lastName" id="lastName"/>
                </div>
                <div className="form-group">
                    <label for="email">Email:</label>
                    <input type="email" name="email" id="email"/>
                </div>

                <div className="form-group">
                    <label for="message">Message: </label>
                    <textarea name="message" id="message" cols="30" rows="10"></textarea>


                </div>
            <button type="submit">Submit</button>

            </form>
            </div>
            </section>
        </div>
    )


}

export default Contact;