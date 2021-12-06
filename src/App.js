import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KioskMainContainer from './Containers/KioskMainContainer';
import VerifySelfContainer from './Containers/VerifySelfContainer';
import Container from '@mui/material/Container'

export default class App extends Component {
  render() {
    return (
      <Container maxWidth="flex" style={{backgroundColor: 'F5F5DC', marginLeft: "0", padding: '0'}}>
        <Router>
          <Routes>
            <Route path="/" element={<KioskMainContainer/>}/>
            <Route path="/findMissing" element={<VerifySelfContainer/>}/>
          </Routes>
        </Router>
      </Container>
      
    )
  }
}