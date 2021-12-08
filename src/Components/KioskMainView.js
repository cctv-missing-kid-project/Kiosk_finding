import React, { Component } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';


export default class KioskMainView extends Component {
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
            fontSize: '60px',
            fontWeight: '900',
            height: '80px'
          };
          
        return (
            // <div>
                <List sx={style} component="nav">
                    <ListItem button onClick={()=>{window.location.href="/registering"}} style={{textAlign:'center'}}>
                        <ListItemText>
                            <span style={textStyle}> 등록하기  </span>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem button divider style={{textAlign:'center'}}>
                        <ListItemText>
                            <span style={textStyle}> 키오스크 업무 2 </span>
                        </ListItemText>
                    </ListItem>
                    <ListItem button style={{textAlign:'center'}}>
                        <ListItemText>
                            <span style={textStyle}> 키오스크 업무 3</span>
                        </ListItemText>
                    </ListItem>
                    <Divider light />
                    <ListItem button onClick={()=>{window.location.href="/findMissing"}} style={{textAlign:'center'}}>
                        <ListItemText>
                            <span style={textStyle}> 일행 찾기 </span>
                        </ListItemText>
                    </ListItem>
                    <Divider light />
                </List>

                /* <h1>키오스크 업무 1</h1>
                <h1>키오스크 업무 2</h1>
                <h1>키오스크 업무 3</h1>
                <h1>키오스크 업무 4</h1>
                <Link to="/verifyYourself" style={{color:'black', textDecoration:'initial'}}><h1>일행 찾기</h1></Link>
            </div> */
        )
    }
}
