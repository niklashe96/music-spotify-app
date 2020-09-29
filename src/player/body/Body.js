import React from 'react'
import './Body.css'
import Header from "./partials/Header";
import { useDataLayerValue } from "../../data/DataLayer";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from "./partials/SongRow";
import { useSoundLayerValue } from "../../data/SoundLayer";

function Body({ spotify }) {
    const [{ current_playlist, tracks, track }] = useDataLayerValue();

    return (
        <div className="body">
            <Header spotify={spotify} />
            <div className="body__info">
                <img
                    src={current_playlist ? current_playlist?.images[0].url : 'https://www.scdn.co/i/_global/twitter_card-default.jpg'}
                    alt="" />

                {current_playlist && <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>{current_playlist?.name}</h2>
                    <p>{current_playlist?.description}</p>
                </div>}


                <div className="howToUse">
                    <h2 className="title"> How to use </h2>
                    <p className = "howToUse__info"> 1. You need at least one premade playlist with songs in it. </p>
                    <p className = "howToUse__info"> 2. Select a playlist and a song and then press the play button in the footer. </p>
                    <p className = "howToUse__info"> 3. You will only be able to play 30s of the song since the Spotify API does not provide full songs. </p>
                    <p className = "howToUse__info"> 4. Songs from some artists are not included in the API. For example: The Weeknd and Taylor Swift</p>
                </div>
            </div>

            <div className="body__songs">
                {tracks?.items.map(track => {
                    return <SongRow track={track.track} key={track.track.id} />
                })}
            </div>
            
        </div>
    )
}

export default Body