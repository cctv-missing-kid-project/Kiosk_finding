import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class KioskMainView extends Component {
    render() {
        return (
            <div>
                <h1>키오스크 업무 1</h1>
                <h1>키오스크 업무 2</h1>
                <h1>키오스크 업무 3</h1>
                <h1>키오스크 업무 4</h1>
                <Link to="/verifyYourself" style={{color:'black', textDecoration:'initial'}}><h1>일행 찾기</h1></Link>
            </div>
        )
    }
}
