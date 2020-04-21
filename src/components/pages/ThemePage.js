import React, { Component } from 'react';

import Cards from '../shared/Cards';
import NavbarHeader from '../shared/NavbarHeader';
import NavbarFooter from '../shared/NavbarFooter';
import ScrollToTop from '../shared/ScrollToTop';


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

class ThemePage extends Component {

    render() {

        console.log(themeList.map(theme => theme.title))
        return (
            <div>
                <NavbarHeader />
                <NavbarFooter />
                <h1>Select a theme</h1>
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