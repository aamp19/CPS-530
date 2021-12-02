import React from 'react'

const Installation = () => {
    return (
        <div>
            <h1>React Installation</h1>
            <table id="react-install">
                <tr>
                    <td>
                        <p>
                            1. Install node.js
                        </p>
                        2. Install an IDE (VS Code is recommended siiiiuuu)
                        <p>
                            3. Put npm in your path for environment variables siiiiuuu
                        </p>
                        4. Open up vs code
                        <p>
                            5. Go to a directory of your choosing (where you want to create your react application)
                        </p>
                        6. Open new terminal
                        <p>
                            7. Type in the command: <b>npx create-react-app app-name</b>
                        </p>
                        8. This will create a basic react application in a directory with the application name that you gave it
                        <p>
                            9. Once it is created, go into the directory that was created
                        </p>
                        10. Then you can run the default react application by entering the following command in the terminal: <b>npm start</b>
                        <p>
                            11. Now in src folder u can create pages that you want to be displayed onto the screen
                        </p>
                        12. So we will make a components folder in src, which will have two folders: pages and parts
                        <p>
                            13. In the parts we will have all our designs, so all the images we would like to add, inputs, etc.
                        </p>
                        14. Then we will pretty much gather everything from parts, and put it in pages
                        <p>
                            15. Then from there we will bring the page content to app.js where it is displayed
                        </p>
                    </td>
                    <td>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" width="300" alt="" />

                    </td>
                </tr>
            </table>

            <table id="express-install">
                <tr>
                    <td>
                        <p>
                            1. Install node.js
                        </p>
                        2. Install an IDE (VS Code is recommended siiiiuuu)
                        <p>
                            4. Open up vs code
                        </p>
                        <p>
                            5. Go to a directory of your choosing (where you want to create your express application)
                        </p>
                        6. Open new terminal
                        <p>
                            7. Type the command: <b>npm init</b> (this will make a package.json with dependecies you need)
                        </p>
                        8. Now in the terminal type the command: <b>npm install express</b>
                    </td>
                    <td>
                        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--KkScstnJ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zojuy79lo3fn3qdt7g6p.png" alt="" width="300" />

                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Installation
