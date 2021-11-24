import React, { Component, useState } from 'react';
import Webcam from 'react-webcam';
import {saveAs} from 'file-saver';

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
    let img = React.useState(null);

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

    return (
        <>
        {imageSrc === null
        ?<Webcam
            audio={false}
            height={350}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={500}
        />
        :<img src={imageSrc} />
        }
        <br/>
        {imageSrc === null
        ?<button onClick={capture} >찍기 </button>
        :<button onClick={init}> 다시 찍기 </button>}
        {imageSrc === null
        ? null
        :<button onClick={handleSave}> 찾기 </button>}
        </>
    );
};

export default VerifySelfView;
