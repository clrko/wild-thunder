import React from 'react';
import Axios from 'axios';

import API_KEY from '../../secret';

import './EndSessionReco.css';

class EndSessionReco extends React.Component{
    state = {
        artistSimilar : [],
        
       
    }
componentDidMount(){
        this.getArtistSimilar()
   
} 


getArtistSimilar = () => {
    const artists = this.props.artistId
    artists.map(artist =>{ 
        return(
        Axios.get(`https://api.napster.com/v2.2/artists/${artist.artistTrack.artistId}/similar`,
        {
            params: {
                apikey: API_KEY,
            }})
            .then(res => { 
                this.setState( () => ({ artistSimilar: [...this.state.artistSimilar, (res.data.artists.splice(0,3)) ]}))
             } )
                
                
    )})
        
}
    render(){
        const artists = this.props.artistId
        const artistSimilar = this.state.artistSimilar
      
        return(
           <div>
               <h1>Artist similar</h1>
                {artists.map(artist =>  artistSimilar.map( ()   => {
                   return(
                   <div>
                    <h1>{artist.artistTrack.artistName}</h1>
                    <h2></h2>
                    <h2></h2>
                    <h2></h2>
                    </div>
                )})
                )}
            </div>   
        )
    }
}
 
              

export default EndSessionReco