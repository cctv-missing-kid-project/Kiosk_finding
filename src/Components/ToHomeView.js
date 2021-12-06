import React, { Component } from 'react'

export default class ToHomeView extends Component {
    render() {
        const style = {
            width: 'flex',
            height: '100px',
            bgcolor: 'background.paper',
            alignItems: 'center',
            backgroundColor:'#F0EDCC',
            paddingTop:'15px',
        };

        const textStyle = {
            color: '#02343F',
            textAlign: 'center',
            fontSize: '50px',
            fontWeight: '900',
            height: '70px',
            fontWeight:'900'
        };

        return (
            <div style={style}>
                <div style={textStyle} onClick={()=>window.location.href='/'}>
                찾아조
                </div>
            </div>
        )
    }
}
