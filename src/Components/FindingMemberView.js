import React, { Component } from 'react';

export default class FindingMemberView extends Component {
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

        const { members, groupImg, customer_id, handleMemberChoice } = this.props;

        const rendering = () => {
            const result = [];
            for (let i=0; i < members.length; i++) {
                if (customer_id !== i+1){
                    result.push(<img    key={i} style={{maxHeight:'100px'}} 
                                        src={`data:image/jpeg;base64,${members[i]['member_face']}`}
                                        onClick={()=>handleMemberChoice(i+1)}/>)
                }
            }
            return result;
        }

        return (
            <div style={style}>
                <div style={{textAlign:'center', padding:'25px', paddingBottom:'0',paddingTop:'0', height:'300px'}}>
                    <img src={`data:image/jpeg;base64,${groupImg}`} style={{maxHeight:'300px', maxWidth:'500px'}}/>
                    <br/>
                </div>
                <div style={textStyle}>
                    찾고자 하는 일행을 선택해 주세요
                </div>
                <div style={{textAlign:'center'}}>
                    {rendering()}
                </div>               
            </div>
        )
    }
}
