import React from 'react'

const Reactinfo = () => {
    return (
        <div>
            <p>
                <h2>React.js</h2>
            </p>
            <table id="react-table">
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
                        Pages that use React
                    </th>
                </tr>

                <tr>
                    <td>
                        <div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" width="300" alt="" />
                        </div>
                        Today, ReactJS has become highly popular because of its extra simplicity and flexibility.
                        Many people are even referring to it as the future of web development.
                        It is estimated that more than 1,300 developers and over 94,000 sites utilize ReactJS.
                    </td>

                    <td>
                        <h5>Intuitive</h5>
                        ReactJS is very easy to pick up due to its intuitive nature and adds another level of
                        interactivity to the layout of any UI. ReactJS also saves a lot of time for clients and
                        developers alike because of its fast and quality assured development.



                        <h5>Provides Reusable Components</h5>
                        ReactJS helps developers due to the fact that you can recycle and reuse previous components in a
                        different application. This helps mostly skip the development process and use already existing components
                        that developers know how they work and are comfortable using.
                    </td>

                    <td>
                        <h5>The high pace of development</h5>
                        Expanding on the quality that React is fast, this can also be a downside. The pace at which ReactJS can be
                        developed can be overwhelming to some developers.

                        <h5>Poor Documentation</h5>
                        The lack of documentation for ReactJS is due to the fact that it is constantly changing and updating, meaning there is
                        no time to create proper documentation for ReactJS.
                    </td>

                    <td>
                        <div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1200px-2021_Facebook_icon.svg.png" alt="" width="200" />
                        </div>
                        <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png" alt="" width="200" />
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Reactinfo
