import React from 'react'
import './Sidebar.css'
import SidebarOption from './partials/SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import {useDataLayerValue} from "../../data/DataLayer";

function Sidebar({spotify}) {

    const [{playlists, id}, dispatch] = useDataLayerValue();

    return (

        <div className='sidebar'>
            <img className='sidebar_logo' src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
                 alt=''/>
                 
            <SidebarOption title='Home' Icon={HomeIcon}/>

            <br/>
            <strong className='sidebar__title'>PLAYLISTS</strong>
            <hr/>

            {playlists?.items?.map((playlist) => {
                return <SidebarOption spotify={spotify} title={playlist.name} id={playlist.id} key={playlist.id}/>
            })}
        </div>
    )
}

export default Sidebar