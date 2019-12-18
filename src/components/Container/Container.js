import React from 'react';
import Map from '../styled';

const Container = (props) => {
    const handleClick = (id,image) => {
        props.chooseElem(id,image)
    }
    const renderView = () => {
        return props.initialState.map((event) => {
            const { id, image } = event;
            if(event.status)
                return <Map key={id} status={true} image={image} onClick={() => {handleClick(id,image)}} />
            else
                return <Map key={id} status={false} image={image} onClick={() => {handleClick(id, image)}} />
        })
    }
    return (
        <>
            { renderView() }
        </>
    )

}

export default Container;