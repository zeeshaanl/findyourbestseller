import React, { Component } from 'react';
import Header from './Header/Header'
import Genre from './Genre/Genre'
import BookResults from './BookResults/BookResults'
import axios from 'axios';
import './App.scss';

const genreList = {
    'all-books': 'All Bestsellers',
    'fiction': 'Fiction',
    'self-help': 'Self Improvment',
    'erotica': 'Erotica',
    'travel': 'Travel',
    'health-fitness-dieting': 'Fitness & Nutrition'
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedGenre: Object.keys(genreList)[0],
            data: null,
            loadingBooks: false
        }
    }

    componentDidMount() {
        this.getBooks(this.state.selectedGenre);
    }

    render() {
        const { selectedGenre, loadingBooks } = this.state;

        return (
            <div>
                <Header />
                <Genre selectedGenre={selectedGenre} genreList={genreList} setGenre={this.setGenre} />
                <BookResults loadingBooks={loadingBooks} resultsArray={this.state.data} />
            </div>
        )
    }

    getBooks = (genre) => {
        axios.get(`http://idreambooks.com/api/publications/recent_recos.json?key=d268ed484e9a19df13e50e7c4b2e19a9ad6cc6f9&slug=${genre}`)
            .then(
                response => {
                    console.log(response);
                    this.setState({
                        data: response.data,
                        loadingBooks: false
                    })
                }
            )
            .catch(error => console.log(error))
    };

    setGenre = (event) => {
        this.setState({
            selectedGenre: event.target.getAttribute('data-attribute-genre'),
            loadingBooks: true
        });
        this.getBooks(event.target.getAttribute('data-attribute-genre'));
    }
}

export default App;