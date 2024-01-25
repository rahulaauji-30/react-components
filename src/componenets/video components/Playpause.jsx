import { useState } from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

export default function Playpause(){
    const [isPlayed,setPlayed] = useState(false);

    function handlePlay(){
        setPlayed(preValue => !preValue);
    }

    return(
        <div onClick={handlePlay} style={{cursor:"pointer"}}>
            {
                isPlayed?<PauseIcon/>:<PlayArrowIcon/>
            }
        </div>
    )
}