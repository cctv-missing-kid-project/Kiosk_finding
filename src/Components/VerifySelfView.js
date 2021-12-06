import React, { Component } from 'react';
import Webcam from 'react-webcam';
import {saveAs} from 'file-saver';
import Button from '@mui/material/Button';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

export default class VerifySelfView extends Component {
    render() {
        const { capture, img, imgReceived, init, setRef, handleSendingFaceImg, onoff, handleGetGroup  } = this.props;
        const style = {
            width: 'flex',
            height: '600px',
            bgcolor: 'background.paper',
            alignItems: 'center',
            backgroundColor:'#F0EDCC'
        };

        const position = {
            position: 'absolute',
            right: '50%',
            top: '300px',
            height: '512px'
        }
        

        return (
            <div style={style}>
                <div style={{textAlign:'center', padding:'25px', paddingBottom:'0', paddingTop:'0', height:'375px'}}>
                    {img === "" && imgReceived === ""
                    ?<Webcam screenshotFormat="image/jpeg" 
                                ref={setRef}
                                audio={false}
                                height={375}
                                width={500}/>  
                    : null}
                    {onoff === "on" && img === "" && imgReceived === ""
                    ?<div style={position}><CountdownCircleTimer
                            isPlaying
                            duration={3}
                            size={50}
                            colors={[
                            ['#004777', 0.33],
                            ['#F7B801', 0.33],
                            ['#A30000', 0.33],
                            ]}>
                            {({ remainingTime }) => remainingTime}
                        </CountdownCircleTimer></div>
                    : null}

                    {img !== "" && imgReceived === ""
                    ?<img src={img}/>
                    : null}

                    {img !== "" && imgReceived !== ""
                    ?<img src={`data:image/jpeg;base64,${imgReceived}`} style={{maxHeight:'375px', maxWidth:'500px'}}/>
                    : null}
                </div>
               <div style={{textAlign:'center', width:'flex', height:'100px'}}>
                    <div style={{width:"500px", display:'inline-block'}}>
                        {img === "" && imgReceived === "" && onoff === ""
                        ?<Button variant="text" style={{color:'#02343F', fontSize:'40px', fontWeight:'900', float:'left'}} onClick={capture}> 사진찍기 </Button>
                        :null}
                        
                        {img !== "" && imgReceived === ""
                        ?<Button variant="text" style={{color:'#02343F', fontSize:'40px', fontWeight:'900', float:'left'}} onClick={() => init()}> 다시찍기 </Button>
                        :null}
                        {img !== "" && imgReceived === ""
                        ?<Button variant="text" style={{color:'#02343F', fontSize:'40px', fontWeight:'900', float:'right' }} onClick={()=>handleSendingFaceImg()}> 전송 </Button>
                        :null}

                        {img !== "" && imgReceived !== ""
                        ?<Button variant="text" style={{color:'#02343F', fontSize:'40px', fontWeight:'900', float:'left'}} onClick={() => init()}> 다시찍기 </Button>
                        : null }
                        {img !== "" && imgReceived !== ""    
                        ?<Button variant="text" style={{color:'#02343F', fontSize:'40px', fontWeight:'900', float:'right'}} onClick={()=>handleGetGroup()}> 본인확인 </Button>
                        :null }
                    </div>
                </div>
            </div>
        )
    }
}