import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div>
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">Project Title - {id}</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consectetur qui porro reiciendis corrupti enim velit reprehenderit commodi incidunt fuga, molestiae temporibus iusto! Quasi natus ullam repellendus modi laudantium. Molestiae.</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by Hritik Harbhla</div>
                        <div>2nd April, 5pm</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
