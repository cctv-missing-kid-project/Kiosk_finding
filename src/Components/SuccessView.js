import React, { Component } from 'react';
import Webcam from 'react-webcam';
import Button from '@mui/material/Button';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

export default class SuccessView extends Component {
    render() {
        const style = {
            width: 'flex',
            height: 'flex',
            bgcolor: 'background.paper',
            alignItems: 'center',
            backgroundColor:'#F0EDCC'
        };  
        const textStyle = {
            color: '#02343F',
            textAlign: 'center',
            fontSize: '40px',
            fontWeight: '900',
            height: '70px'
          };
        return (
            <div style={style} onClick={()=>{window.location.href="/"}}>
                <div style={{textAlign:'center', padding:'25px', paddingBottom:'0', paddingTop:'0', height:'375px'}}>
                    <div style={textStyle}>
                       등록 완료했습니다. 화면을 클릭하시면 처음으로 돌아갑니다.
                    </div>
                </div>
            </div>
        )
    }
}
