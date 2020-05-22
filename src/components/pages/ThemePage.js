import React, { Component } from 'react';
import axios from 'axios';

import Cards from '../shared/Cards';
import Loader from '../Loader/Loader';
import NavbarHeader from '../shared/NavbarHeader';
import NavbarFooter from '../shared/NavbarFooter';
import ScrollToTop from '../shared/ScrollToTop';

import API_KEY from '../../secret';

import './ThemePage.css';

const themeBackgroundColor = ['Class1', 'Class2', 'Class3', 'Class4', 'Class5', 'Class6', 'Class7', 'Class8', 'Class9', 'Class10', 'Class11', 'Class12', 'Class13', 'Class14', 'Class15', 'Class16', 'Class17', 'Class18', 'Class19', 'Class20', 'Class21', 'Class22'
];

class ThemePage extends Component {

    state = {
        username: this.props.location.username,
        genresList: [],
        isLoaded: false
    }

    getGenresList = async () => {
        this.setState({ isLoaded: false })
        await axios.get(`https://api.napster.com/v2.2/genres`,
            { params: { apikey: API_KEY, lang: "en-US" } })
            .then(res => this.setState({ genresList: res.data.genres.slice(0, 21), isLoaded: true }))
    }

    componentDidMount() {
        this.getGenresList()
    }

    render() {
        return (
            <div>
                {!this.state.isLoaded ?
                    <div><Loader /></div>
                    :
                    <div className="themepage-body">
                        <NavbarHeader />
                        <h1 className="themepage-h1-first">{`Hi ${this.state.username} !`}</h1>
                        <h1 className="themepage-h1-second">Choose a theme and take on the challenge</h1>
                        <div className="container-card">
                            <div className="cards-list">
                                {this.state.genresList.map((genre, i) =>
                                    <Cards key={genre.id} genreId={genre.id} className={themeBackgroundColor[i]} genreTitle={genre.name.replace(/\//g, " / ")} username={this.state.username}></Cards>
                                )}
                            </div>
                        </div>
                        <ScrollToTop />
                        <NavbarFooter />
                    </div>
                }
            </div>
        )
    }
}

export default ThemePage;