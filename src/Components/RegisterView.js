import React, { Component } from 'react';
import Webcam from 'react-webcam';
import Button from '@mui/material/Button';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

export default class RegisterView extends Component {
    render() {
        const { capture, img, init, setRef, handleRegisterImg, onoff, } = this.props;
        const style = {
            width: 'flex',
            height: 'flex',
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
        
        const videoConstraints = {
            width: 1280,
            height: 720,
        };
        
        return (
            <div style={style}>
                <div style={{textAlign:'center', padding:'25px', paddingBottom:'0', paddingTop:'0', height:'375px'}}>
                    {img === ""
                    ?<Webcam screenshotFormat="image/jpeg" 
                                ref={setRef}
                                audio={false}
                                height={375}
                                width={500}
                                videoConstraints={videoConstraints}/>  
                    : null}
                    {onoff === "on" && img === ""
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

                    {img !== ""
                    ?<img src={img}/>
                    : null}

                </div>
               <div style={{textAlign:'center', width:'flex', height:'100px'}}>
                    <div style={{width:"500px", display:'inline-block'}}>
                        {img === "" && onoff === ""
                        ?<Button variant="text" style={{color:'#02343F', fontSize:'40px', fontWeight:'900', float:'left'}} onClick={capture}> 사진찍기 </Button>
                        :null}
                        
                        {img !== "" 
                        ?<Button variant="text" style={{color:'#02343F', fontSize:'40px', fontWeight:'900', float:'left'}} onClick={() => init()}> 다시찍기 </Button>
                        :null}
                        {img !== ""
                        ?<Button variant="text" style={{color:'#02343F', fontSize:'40px', fontWeight:'900', float:'right' }} onClick={()=>handleRegisterImg()}> 등록 </Button>
                        :null}
                    </div>
                </div>
            </div>
        )
    }
}