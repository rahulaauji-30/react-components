import SubtitlesIcon from '@mui/icons-material/Subtitles';
import SubtitlesOffIcon from '@mui/icons-material/SubtitlesOff';
import { useState } from 'react';

export default function Subtitles(){
    const [isSubtitle,setSubtitle] = useState(false);
    return(
        <div>
            {
                isSubtitle?<SubtitlesIcon/>:<SubtitlesOffIcon/>
            }
        </div>
    )
}