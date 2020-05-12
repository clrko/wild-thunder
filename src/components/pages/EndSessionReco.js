import React from 'react';
import Axios from 'axios';

import API_KEY from '../../secret';

import './EndSessionReco.css';

class EndSessionReco extends React.Component{
    state = {
        artistSimilar1 : [],
        artistSimilar2 : [],
        artistSimilar3 : [],
        artistSimilar4 : [],
        artistSimilar5 : [],
       
    }
componentDidMount(){
        this.getArtistSimilar()
   
} 
getArtistSimilar = () => {
    const artists = this.props.location.artistId
    artists.map(artist =>{ 
        return(
        Axios.get(`https://api.napster.com/v2.2/artists/${artist.artistTrack.artistId}/similar`,
        {
            params: {
                apikey: API_KEY,
            }})
            .then(res => { 
                this.setState( () => ({ artistSimilar1: [...this.state.artistSimilar1, res.data.artists ]}))
                
                /*this.setState( () => ({ artistSimilar2: res.data.artists.splice(0,3)}))
                this.setState( () => ({ artistSimilar3: res.data.artists.splice(0,3)}))
                this.setState( () => ({ artistSimilar4: res.data.artists.splice(0,3)}))
                this.setState( () => ({ artistSimilar5: res.data.artists.splice(0,3)}))*/
               
                 } )
    )})
        
}
    render(){
        const artists = this.props.location.artistId
        const artistSimilar1 = this.state.artistSimilar1
        const artistSimilar2 = this.state.artistSimilar2
        const artistSimilar3 = this.state.artistSimilar3
        const artistSimilar4 = this.state.artistSimilar4
        const artistSimilar5 = this.state.artistSimilar5
        
        
        
        return(
            <div>
                
            </div>
        )
    }
}
export default EndSessionReco