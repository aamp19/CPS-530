import React from 'react'

const Explanation = () => {
    return (
        <div>
            <h1>Explanation of Login Form</h1>
            <p>To start off, we created a folder which will contain our frontend and backend programs. In the front end we create a react application, in the backend we create a file which has express js as a module. From here, we created a database using MongoDB along with the collection known as “users”. We connected our backend to the database and to the collection by importing the mongodb library as MongoClient. Using this library we connect to the database. From there, we imported cors so we were able to connect the backend to the frontend. Then we created a post request so we can access whatever is inputted by the user in the frontend and have that be transferred into the back end, which is then transferred to the database </p>
            <div>
                <img src="backend-pic.JPG.jpg" alt="" />
            </div>
            <p>
                In the frontend, all that needed to be done was have a bunch of inputs for the user to register. So the user needed to input his or her email, username, and password. Each of these inputs will have labels so the user can see what they are typing into, and what they are meant to type in. We had react hooks send this info to the backend. To bring the frontend pages to the screen, we used react-router-down in the app.js folder to redirect to a certain page which will contain all of the frontend design pages. We used CSS after everything was connected to style each page. We used axios to connect the end point where the signup query is being ran, we connected to that, and sent the appropriate data to them.
            </p>
            <div>
                <img src="frontend-pic.JPG.jpg" alt="" />
            </div>
        </div>
    )
}

export default Explanation
