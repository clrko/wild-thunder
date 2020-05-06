import React, { Component } from 'react';
import axios from 'axios';

import Cards from '../shared/Cards';
import Loader from '../Loader/Loader';
import NavbarHeader from '../shared/NavbarHeader';
import NavbarFooter from '../shared/NavbarFooter';
import ScrollToTop from '../shared/ScrollToTop';

import API_KEY from '../../secret';

import './ThemePage.css';

const themeBackgroundColor = ['#0089BA', '#008E9B', '#845EC2', '#D65DB1', '#FF6F91', '#FF9671', '#FFC75F', '#B8E067', '#ffcc96', '#0089BA', '#008E9B', '#845EC2', '#D65DB1', '#FF6F91', '#FF9671', '#FFC75F', '#B8E067', '#ffcc96', '#0089BA', '#008E9B', '#845EC2', '#D65DB1', '#FF6F91', '#FF9671', '#FFC75F', '#B8E067', '#ffcc96'
];

class ThemePage extends Component {

    state = {
        username: this.props.location.username,
        genresList: [],
        isLoaded: false
    }

    getGenresList = async () => {
        this.setState({isLoaded: false})
        await axios.get(`http://api.napster.com/v2.2/genres`,
            { params: { apikey: API_KEY, lang: "en-US" } }        )
            .then(res => this.setState({ genresList: res.data.genres, isLoaded: true }))
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
                    <div>
                        <NavbarHeader />
                        <h1>{`Hi ${this.state.username}, choose a theme and take on the challenge`}</h1>
                        <div className="container-card">
                            <div className="cards-list">
                                {this.state.genresList.map((genre, i) =>
                                    <Cards key={genre.id} genreId={genre.id} divStyle={themeBackgroundColor[i]} genreTitle={genre.name.replace(/\//g, " / ")}></Cards>
                                )}
                            </div>
                        </div>
                        <ScrollToTop />
                        <NavbarFooter />
                    </div>
                }
            </div>
        );
    }
}

export default ThemePage;