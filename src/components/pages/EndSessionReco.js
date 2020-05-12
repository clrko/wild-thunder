import React from 'react';
import Axios from 'axios';

import API_KEY from '../../secret';

import './EndSessionReco.css';

class EndSessionReco extends React.Component{
    state = {
        artistSimilar : [],
       
    }
componentDidMount(){
        this.setState(this.getArtistSimilar)
   
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
                this.setState( () => ({ artistSimilar: [res.data.artists]}))
             } )
    )})
        
}
    render(){
        const artists = this.props.artistId
        const artistSimilar = this.state.artistSimilar
        return(
            <div className="container-similar">
                <h1>Artist similar</h1>
              {artists.map(artist => {
                   return(
                       <div className='reco-list-artist'>
                           <h2>{artist.artistTrack.artistName}:</h2>
                       </div>
                   ) 
                        })}
              {artistSimilar.map(similar  => {console.log(similar[6])
                return(
                <div className="reco-similar-artist">
                    <div>
                        <img src={`https://api.napster.com/imageserver/v2/albums/${similar[0].albumGroups.singlesAndEPs[0]}/images/90x90.jpg`} alt='placeholder' />
                        <p>{similar[0].name}</p>
                        <img src={`https://api.napster.com/imageserver/v2/albums/${similar[13].albumGroups.singlesAndEPs[0]}/images/90x90.jpg`} alt='placeholder' />
                        <p>{similar[13].name}</p>
                    </div>
                    <div>
                        <img src={`https://api.napster.com/imageserver/v2/albums/${similar[2].albumGroups.singlesAndEPs[0]}/images/90x90.jpg`} alt='placeholder'/>
                        <p>{similar[2].name}</p>
                        <img src={`https://api.napster.com/imageserver/v2/albums/${similar[3].albumGroups.singlesAndEPs[0]}/images/90x90.jpg`} alt='placeholder'/>
                        <p>{similar[3].name}</p>
                        
                    </div>
                    <div>
                        <img src={`https://api.napster.com/imageserver/v2/albums/${similar[4].albumGroups.singlesAndEPs[0]}/images/90x90.jpg`} alt='placeholder'/>
                        <p>{similar[4].name}</p>
                        <img src={`https://api.napster.com/imageserver/v2/albums/${similar[5].albumGroups.singlesAndEPs[0]}/images/90x90.jpg`} alt='placeholder'/>
                        <p>{similar[5].name}</p>
                    </div>
                    <div>
                        <img src={`https://api.napster.com/imageserver/v2/albums/${similar[9].albumGroups.compilations[0]}/images/90x90.jpg`} alt='placeholder'/>
                        <p>{similar[9].name}</p>
                        <img src={`https://api.napster.com/imageserver/v2/albums/${similar[14].albumGroups.singlesAndEPs[0]}/images/90x90.jpg`} alt='placeholder'/>
                        <p>{similar[14].name}</p>
                       
                    </div>
                    <div>
                        <img src={`https://api.napster.com/imageserver/v2/albums/${similar[11].albumGroups.singlesAndEPs[0]}/images/90x90.jpg`} alt='placeholder'/>
                        <p>{similar[11].name}</p>
                        <img src={`https://api.napster.com/imageserver/v2/albums/${similar[16].albumGroups.singlesAndEPs[0]}/images/90x90.jpg`} alt='placeholder'/>
                        <p>{similar[16].name}</p>
                       
                    </div>
                </div>
              )})
              }
              
            </div>
        )
    }
}
export default EndSessionReco