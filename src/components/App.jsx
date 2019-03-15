import React from 'react';
import Card from './Card';



class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            films: []
        };
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(films => this.setState({ films }))
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.films.map(films => <Card key={films.id} films={films} />)}
                </div>
            </div>
        );
    }
}

export default App;