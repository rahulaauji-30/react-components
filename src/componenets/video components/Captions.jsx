import ClosedCaptionIcon from '@mui/icons-material/ClosedCaption';
import ClosedCaptionDisabledIcon from '@mui/icons-material/ClosedCaptionDisabled';
import { useState } from 'react';

export default function Captions(){
    const [isCaption,setCaption] = useState(true);
    return(
        <div>
            {
                isCaption?<ClosedCaptionIcon/>:<ClosedCaptionDisabledIcon/>
            }
        </div>
    )
}