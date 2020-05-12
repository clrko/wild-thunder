import React from 'react';
import Axios from 'axios';

import API_KEY from '../../secret';

import './EndSessionReco.css';

class EndSessionReco extends React.Component{
    state = {
        artistSimilar : [],
        artistSimilar1 : [] ,
       
    }
componentDidMount(){
        this.setState(this.getArtistSimilar)

} 
getArtistSimilar = () => {
    const artists = this.props.artistId
    artists.map(artist =>{ console.log(artist);
    
        return(
        Axios.get(`https://api.napster.com/v2.2/artists/${artist.artistTrack.artistId}/similar`,
        {
            params: {
                apikey: API_KEY,
            }})
            .then(res => { 
                this.setState( () => ({ artistSimilar: res.data}))
                this.setState( () => ({ artistSimilar1 : res.data }) )
             } )
    )})
        
}
    render(){
        const artists = this.props.artistId
        const artistSimilar = this.state.artistSimilar
        return(
            <div className="container-similar">
                <h1>Artist similar</h1>
              
                 
                
                   
                        
            
              
            </div>
        )
    }
}
export default EndSessionReco