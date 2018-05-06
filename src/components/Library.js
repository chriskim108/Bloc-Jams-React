import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import "./Library.css";

class Library extends Component { 
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }

  render() {
   return ( 
     <section className='library'>
        {
          this.state.albums.map( (album, index) => 
            <Link to={`/album/${album.slug}`} key={index}>
              <div className="cardBackground"> 
                <img src={album.albumCover} alt={album.title} className="albumImage"/>
                <div className="albumTitle">{album.title}</div>
                <div className="albumArtist">{album.artist}</div>
                <div className="numberOfSongs">{album.songs.length} songs</div>      
              </div>   
            </Link>
          )
        }
     </section>
    );
  }
}

export default Library;