import React, { Component } from 'react';
import Container from './components/container';

import './App.css';
class App extends Component {
    constructor(props) {
        super(props);
        this.one = { id: null, image: null };
        this.two = { id: null, image: null };
        const array = [
            { id: 0, image: '1.png', status: false },
            { id: 1, image: '2.png', status: false },
            { id: 2, image: '3.png', status: false },
            { id: 3, image: '4.png', status: false },
            { id: 4, image: '5.png', status: false },
            { id: 5, image: '6.png', status: false },
            { id: 6, image: '7.png', status: false },
            { id: 7, image: '8.png', status: false },
            { id: 8, image: '1.png', status: false },
            { id: 9, image: '2.png', status: false },
            { id: 10, image: '3.png', status: false },
            { id: 11, image: '4.png', status: false },
            { id: 12, image: '5.png', status: false },
            { id: 13, image: '6.png', status: false },
            { id: 14, image: '7.png', status: false },
            { id: 15, image: '8.png', status: false }
        ].sort(function(){
            return Math.random() - 0.5;
        });
        this.state = {
            initialState: array
        }
    }
    changeState = (oldImage = null) => {
        let initialState = null;
        if(oldImage !== null){
            initialState = this.state.initialState.filter(event => {
                if(oldImage !== event.image) {
                    if(event.id === this.one.id) {
                        event.status = true
                        return { ...event }
                    }else {
                        return { ...event }
                    }
                }
            })
        }else {
            initialState = this.state.initialState.map(event => {
                if(event.id === this.one.id) return { ...event, status: true }
                else if(event.id === this.two.id) return { ...event, status: true }
                else return { ...event, status: false }
            })
        }
        this.setState({ initialState })
    }
    chooseObject = (id,image) => {
        if(this.one.id === null) {
            this.one = { id, image }
            this.changeState()
        }else if(this.two.id === null && this.one.id !== null && id !== this.one.id ) {
            this.two = { id, image}
            this.changeState()
        }else if(typeof this.two.image === 'string' && this.two.image === this.one.image) {
            const oldImage = this.one.image; // I use image because we have 2 item with similar image
            this.one = { id, image }
            this.two = { id: null, image: null }
            this.changeState(oldImage)
        } else {
            this.one = { id, image }
            this.two = { id: null, image: null }
            this.changeState()
        }
    }
    render() {
        return (
            <div className="app">
                <Container
                    initialState={this.state.initialState}
                    chooseObject={this.chooseObject}
                />
            </div>
        )
    }
}

export default App;
