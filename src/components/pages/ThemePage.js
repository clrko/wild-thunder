import React, { Component } from 'react';

import Cards from '../shared/Cards';
import NavbarHeader from '../shared/NavbarHeader';
import NavbarFooter from '../shared/NavbarFooter';
import ScrollToTop from '../shared/ScrollToTop';
import axios from 'axios';


const themeList = [{
    id: 1,
    title: "Rock",
    background: '#0089BA',
},
{
    id: 2,
    title: "Pop",
    background: '#008E9B',
},
{
    id: 3,
    title: "Electro",
    background: '#845EC2',
},
{
    id: 4,
    title: "Latino",
    background: '#D65DB1',
},
{
    id: 5,
    title: "Rap",
    background: '#FF6F91',
},
{
    id: 6,
    title: "Jazz",
    background: '#FF9671',
},
{
    id: 7,
    title: "Country",
    background: '#FFC75F',
},
{
    id: 8,
    title: "Classical",
    background: '#B8E067',
},
{
    id: 9,
    title: "Decades",
    background: '#ffcc96',
}
];
const API_KEY = "YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4"

// YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4

//A nous
//    MjY4ZTc5ZTktMDI1MS00YTkwLTliZGEtOGE5ZDA5ODQ0YWNi

class ThemePage extends Component {

    state = {
        ...this.props.location.state.playerData, // only pseudo attribut for the moment
        genresList: []
    }

    getGenresList = () => {
        const request = axios.get(`http://api.napster.com/v2.2/genres/g.115/artists/top`,
        {params : {apikey : API_KEY, lang:"es-ES", limit:5, range: "year"}})
        .then(res => console.log(res.data) || this.setState({genresList: res.data}))
        console.log("request:", request)
        // day, week, month, year and life
    }
    // 
    
    componentDidMount() {
        this.getGenresList()
    }

    render() {

        console.log("genresList:",this.state.genresList)
        console.log(themeList.map(theme => theme.title))
        return (
            <div>
                <NavbarHeader />
                <NavbarFooter />
                <h1>{`Hi ${this.state.pseudo}, choose a theme and take on the challenge`}</h1>
                <div className="container-card">
                    <div className="cards-list">
                        {themeList.map(theme =>
                            <Cards key={theme.id} divStyle={theme.background} title={theme.title}></Cards>
                        )}
                    </div>
                </div>
                <ScrollToTop />
            </div>
        );
    }
}

export default ThemePage;