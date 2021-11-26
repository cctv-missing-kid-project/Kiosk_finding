import React, { Component, useState } from 'react';
import Webcam from 'react-webcam';
import {saveAs} from 'file-saver';
import Button from '@mui/material/Button';

// export default class VerifySelfView extends Component {
    // constructor(props) {
    //     super(props);
    //     this.setRef = React.createRef(null);
    // }
//     render() {
//         const { capture, img, init, setRef, savePic } = this.props;

//         return (
//             <div>
//                {img === ""
//                ? <Webcam screenshotFormat="image/jpeg" ref={setRef}/>
//                : <img src={img} />}
               
//                {img === ""
//                ?<button onClick={()=>{capture();}} >찍기 </button>
//                :<button onClick={()=>{init();}}> 다시 찍기 </button>}
//                {img === ""
//                ? null
//                :<button onClick={()=>{savePic();}}> 찾기 </button>}
//             </div>
//         )
//     }
// }
const VerifySelfView = () => {
    const webcamRef = React.useRef(null);
    const [imageSrc, setImageSrc] = React.useState(null);
    
    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            setImageSrc(imageSrc)
        },
        [webcamRef, setImageSrc]
    );

    const handleSave = React.useCallback(
        () => {
            saveAs(imageSrc, 'image.jpeg')
        },
        [imageSrc],
    )

    const init = React.useCallback(
        () => {
            const imageSrc = null;
            setImageSrc(imageSrc)
        },
        [imageSrc, setImageSrc],
    )

    const style = {
        width: 'flex',
        height: '500px',
        bgcolor: 'background.paper',
        alignItems: 'center',
        backgroundColor:'#F0EDCC'
      };


    return (
        <div style={style}>
        {imageSrc === null
        ?<Webcam
            audio={false}
            height='flex'
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={500}
        />
        :<img src={imageSrc} />
        }
        <br/>
        {imageSrc === null
        ?<Button variant="text" style={{color:'#02343F', fontSize:'40px', fontWeight:'900'}} onClick={capture}> 사진찍기 </Button>
        :<Button variant="text" style={{color:'#02343F', fontSize:'40px', fontWeight:'900'}} onClick={init}> 다시찍기 </Button>}
        {imageSrc === null
        ? null
        :<Button variant="text" style={{color:'#02343F', fontSize:'40px', fontWeight:'900'}} onClick={handleSave}> 전송 </Button>}
        </div>
    );
};

export default VerifySelfView;
