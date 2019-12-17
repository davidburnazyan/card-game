import React, { Component } from "react";
import Map from '../styled';

class Container extends Component{
    constructor(props) {
        super(props);
        this.state = {
            clicked: null
        }
    }
    handleClick = (id,image) => {
        this.props.chooseObject(id,image)
    }
    render() {
        const renderView = () => {
            return this.props.initialState.map((event) => {
                const { id, image } = event;
                if(event.status)
                    return <Map key={id} status={true} image={image} onClick={() => {this.handleClick(id,image)}}/>
                else
                    return <Map key={id} status={false} image={image} onClick={() => {this.handleClick(id, image)}}/>
            })
        }
        return (
            <>
                {renderView()}
            </>
        )
    }
}

export default Container;