import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { useState } from 'react';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

export default function MuteUnmute(){
    const [isMute,setMute] = useState(false);
    function handleMute(){
        setMute(preValue => !preValue)
    }
    return(
        <div onClick={handleMute} style={{cursor:"pointer"}}>
            {
                isMute?<VolumeOffIcon/>:<VolumeUpIcon/>
            }
        </div>
    )
}