import React, { Component } from 'react';
import Container from './components/Container';
import Info from './components/Info';

import './App.css';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.array = [
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
        ]
        this.count = 0;
        this.one = { id: null, image: null };
        this.two = { id: null, image: null };
        this.sortArray = (array) => {
            return array.sort(function(){
                return Math.random() - 0.5;
            });
        }
        this.state = {
            initialState: this.sortArray(this.array)
        }
    }
    changeState = (oldImage = null) => {
        let { initialState } = this.state;
        this.count++;
        if(oldImage !== null){
            initialState = initialState.filter(event => {
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
            initialState = initialState.map(event => {
                if(event.id === this.one.id) return { ...event, status: true }
                else if(event.id === this.two.id) {
                    return { ...event, status: true }
                }
                else return { ...event, status: false }
            })
        }
        this.setState({ initialState })
    }
    updateInitialState = () => {
        this.count = 0;
        this.one = { id: null, image: null };
        this.two = { id: null, image: null };
        this.setState({ initialState: this.sortArray(this.array) })
    }
    chooseElem = (id,image) => {
        if(this.state.initialState === 2 && this.one.image === this.two.image){
            /** last pair of maps*/
        }else if(this.one.id === null) {
            /** first click*/
            this.one = { id, image }
            this.changeState()
        }else if(this.two.id === null && this.one.id !== null && id !== this.one.id ) {
            /** second click on another click*/
            this.two = { id, image}
            this.changeState()
        }else if(typeof this.two.image === 'string' && this.two.image === this.one.image) {
            /** this block working if first and second images match up*/
            const oldImage = this.one.image;
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
        const { initialState } = this.state;
        const ShowInfo = () => {
            if(initialState.length === 2 && this.one.image === this.two.image || initialState.length === 0 ){
                return <Info count={this.count} update={this.updateInitialState}/>
            }else {
                return null
            }
        }
        const ShowContainer = () => {
            if(initialState.length === 0)
                return null
            else
                return <Container  initialState={initialState} chooseElem={this.chooseElem} />
        }
        return (
            <>
                <div className="app">
                    { ShowContainer() }
                </div>
                <div>
                    { ShowInfo() }
                </div>
            </>
        )
    }
}