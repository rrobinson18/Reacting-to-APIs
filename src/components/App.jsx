import React, { Component } from 'react';
import Card from './Card';
import People from './People';
import Logo from './logo.png';



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            films: [],
            people: [],
            loadFilms: false,
            loadPeople: false
        }
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(films => {
                this.setState({ films })
            })

        fetch('https://ghibliapi.herokuapp.com/people')
            .then(peop => peop.json())
            .then(people => {
                this.setState({ people })
            })
    }


    handleFilms() {
        this.setState({
            loadFilms: true
        })
    }

    handlePeople() {
        this.setState({
            loadPeople: true
        })
    }


    render() {
        if (this.state.loadFilms === false && this.state.loadPeople === false) {
            return (
<>
                <div className="row p-5">
                    <img src={Logo} alt="" />
                </div>
                <div className="row p-3">
                
                    <button className="btn btn-outline-info" onClick={(e => this.handleFilms(e))}>Load Films</button>
                </div>
                <div className="row p-3">
                    <button className="btn btn-outline-info" onClick={(e => this.handlePeople(e))}>Load People</button>
                </div>
                </>
        )
        }

    }
}
export default App;