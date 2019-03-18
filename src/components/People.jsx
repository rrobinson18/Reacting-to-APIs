import React from 'react';

const People = (props) => {
    return (
        <div className="col-md-4">
            <div className="card border mb-3 m-2 mx-auto">
            <div className="card-header">People</div>
                <div className="card-body text secondary">
                    <p className="card-text">{props.people.name}</p>
                    <p className="card-text">{props.people.age}</p>
                    <p className="card-text">{props.people.gender}</p>
                    <p className="card-text">{props.people.url}</p>
                </div>
            </div>
        </div>
    );
}

export default People;