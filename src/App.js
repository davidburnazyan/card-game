import React, { Component } from 'react';
import Container from './components/Container';
import Info from './components/Info';
import { connect } from 'react-redux';

import './App.css';
class App extends Component {
    constructor(props) {
        super(props); 
        this.array = props.array;
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
            if(initialState.length <= 2 && this.one.image === this.two.image ){
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

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(App)