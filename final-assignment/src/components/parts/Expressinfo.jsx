import React from 'react'

const Expressinfo = () => {
    return (
        <div>
            <p>
                <h2>Express.js</h2>
            </p>
            <table id="express-table">
                <tr>
                    <th>
                        Popularity
                    </th>
                    <th>
                        Strengths
                    </th>
                    <th>
                        Weaknesses
                    </th>
                    <th>
                        Pages that use Express
                    </th>
                </tr>

                <tr>
                    <td>
                        <div>
                            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--KkScstnJ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zojuy79lo3fn3qdt7g6p.png" alt="" width="300" />
                        </div>
                        Fairly old
                        Not as popular now with new backend frameworks being made
                        Still simple to use, and effective

                    </td>

                    <td>
                        <h5>Fast app development</h5>
                        ExpressJs uses javascript for both back and front end purposes. This provides those familiar with JavaScript to become a full-stack developer.
                        This makes the process much faster and easier since one person can manage both the presentation and data access side.

                        <h5>I/O request handling</h5>
                        Express JS is a great choice for applications that handle a lot of requests and notifications from users. Exactly because of this reason Uber has
                        chosen Node.js. This is what the Software Engineer of Uber said:
                    </td>

                    <td>
                        <h5>Event-driven nature (callbacks)</h5>
                        Node.js is a single threaded framework with event loop that listens to various events and executes registered callbacks. Developers who have worked
                        with other programming languages may find it difficult to understand the callback nature. After reading several instructions, they start to write all
                        the code in callbacks. Such approach will only entangle the code, so it will be impossible to maintain it in future. This is called a callback hell and
                        we hope you will never experience it! The last version of Node.js gives you the opportunity to use async/await , that will increase the code quality and
                        prevent you from the problems with callbacks.

                        <h5>Philosophy of plugins known as middleware</h5>
                        Express.js is built on this philosophy, that is why it is important to understand its main concepts. In short, middleware is a subset of chained functions
                        that run between the client request and the server answer.

                    </td>
                    <td>
                        <div>
                            <img src="https://e7.pngegg.com/pngimages/768/580/png-clipart-electric-blue-square-text-symbol-myspace-blue-text-thumbnail.png" width="200" alt="" />
                        </div>
                        <img src="data:image/png;base64,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" width="200" alt="" />
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Expressinfo
