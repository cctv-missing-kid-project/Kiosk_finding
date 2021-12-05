import React, { Component } from 'react'

export default class ShowMemberLocationView extends Component {
    render() {
        const style = {
            width: 'flex',
            height: '500px',
            bgcolor: 'background.paper',
            alignItems: 'center',
            backgroundColor:'#F0EDCC'
        };
        const textStyle = {
            color: '#02343F',
            textAlign: 'center',
            fontSize: '20px',
            fontWeight: '900',
            height: '70px'
        };
        const { memberLocationImg, location } = this.props
        return (
            <div style={style}>
                <div style={{textAlign:'center', padding:'25px', paddingBottom:'0', height:'375px'}}>
                    <img src={`data:image/jpeg;base64,${memberLocationImg}`} style={{maxHeight:'375px', maxWidth:'500px'}}/>
                </div>
                <div style={textStyle}>
                    귀하의 일행의 위치는...<br/>
                    {location}입니다.
                </div>
            </div>
        )
    }
}
