import React from 'react'

const References = () => {
    return (
        <div>
            <h1>References</h1>

            <table id="refences">
                <tr>

                    <th>Team Member</th>
                    <th>Work Distribution</th>
                    <th>Percentage of Work</th>
                </tr>
                <tr>
                    <td>
                        <img src="keith.jpg" alt="" />
                        <div>
                            Keith
                        </div>
                    </td>
                    <td>
                        Designed the pages using CSS. Helped out with implementing each page
                    </td>
                    <td>50%</td>
                </tr>
                <tr>
                    <td>
                        <img src="aamp.JPG" alt="" />
                        <div>Atschuthan</div>
                    </td>
                    <td>
                        Implemented the pages with partner. Connected backend to frontend, and helped designing pages
                    </td>
                    <td>50%</td>
                </tr>
            </table>
            <h2>Where we got our information from</h2>
            <div>
                <a href="https://www.w3schools.com/howto/howto_js_topnav.asp">https://www.w3schools.com/howto/howto_js_topnav.asp</a>
            </div>
            <div>
                <a href="https://www.stackhawk.com/blog/react-cors-guide-what-it-is-and-how-to-enable-it/">https://www.stackhawk.com/blog/react-cors-guide-what-it-is-and-how-to-enable-it/</a>
            </div>
            <a href="https://apiko.com/blog/express-mobile-app-development/">https://apiko.com/blog/express-mobile-app-development/</a>
            <div>
                <a href="https://www.javatpoint.com/pros-and-cons-of-react">https://www.javatpoint.com/pros-and-cons-of-react</a>
            </div>
            <a href="https://codecondo.com/15-websites-built-with-express-js/">https://codecondo.com/15-websites-built-with-express-js/</a>
        </div>
    )
}

export default References
