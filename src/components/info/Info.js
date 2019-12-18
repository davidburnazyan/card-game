import React from 'react';

import './Info.css';
const Info = (props) => {
    return (
        <>
            <div className="infoDiv">
                <h2>You took {Math.floor(props.count / 2)} steps</h2>
            </div>
            <div className="infoDiv">
                <button onClick={() => {props.update()}}>Try again</button>
            </div>
        </>

    )
}

export default Info;