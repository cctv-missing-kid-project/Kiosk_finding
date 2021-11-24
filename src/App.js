import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KioskMainContainer from './Containers/KioskMainContainer';
import VerifySelfContainer from './Containers/VerifySelfContainer';
import Container from '@mui/material/Container'

export default class App extends Component {
  render() {
    return (
      <Container maxWidth="sm" style={{backgroundColor:'yellow', textAlign:'center'}}>
        <Router>
          <Routes>
            <Route path="/" element={<KioskMainContainer/>}/>
            <Route path="/verifyYourself" element={<VerifySelfContainer/>}/>
          </Routes>
        </Router>
      </Container>
      
    )
  }
}
