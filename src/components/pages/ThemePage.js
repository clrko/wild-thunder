import React, { Component } from 'react';

import Cards from '../shared/Cards';
import NavbarHeader from '../shared/NavbarHeader';
import NavbarFooter from '../shared/NavbarFooter';
import ScrollToTop from '../shared/ScrollToTop';


const divStyle = [{
    background: '#0089BA',
    }, 
    {
    background: '#008E9B',
    },
    {
    background: '#845EC2',
    },
    {
    background: '#D65DB1',
    },
    {
    background: '#FF6F91',
    },
    {
    background: '#FF9671',
    },
    {
    background: '#FFC75F',
    },
    {
    background: '#B8E067',
    },
    {
    background: '#ffcc96',
    }
];


class ThemePage extends Component{
    render(){
        return(
            <div>
                <h1>Hello Theme display Page</h1>
                <NavbarHeader/>
                <NavbarFooter/>

            <div className="container-card">
                <div className="cards-list">
                    <Cards divStyle={divStyle[0]} title="Rock"></Cards>
                    <Cards divStyle={divStyle[1]} title="Pop"></Cards>
                    <Cards divStyle={divStyle[2]} title="Electro"></Cards>
                    <Cards divStyle={divStyle[3]} title="Latino"></Cards>
                    <Cards divStyle={divStyle[4]} title="Rap"></Cards>
                    <Cards divStyle={divStyle[5]} title="Jazz"></Cards>
                    <Cards divStyle={divStyle[6]} title="Country"></Cards>
                    <Cards divStyle={divStyle[7]} title="Classique"></Cards>
                    <Cards divStyle={divStyle[8]} title="Décennies"></Cards>
                </div>
            </div>                
            <ScrollToTop />;
            </div>
        );
    }
}

export default ThemePage;