import { observer } from 'mobx-react';
import React, { Component } from 'react';
import VerifySelfView from '../Components/VerifySelfView';
import FindingMemberView from '../Components/FindingMemberView';
import KioskStore from '../Stores/KioskStore';

class VerifySelfContainer extends Component {
    kioskStore = KioskStore;
    render() {
        const { capture, img, imgReceived, setRef, init, handleSendingFaceImg, onoff, handleGetGroup } = this.kioskStore;
        const { group_img, members, customer_id, handleMemberChoice } = this.kioskStore;
        return (
            <div>
                {group_img === ""
                ?<VerifySelfView capture={capture} 
                                img={img} 
                                imgReceived={imgReceived} 
                                setRef={setRef} 
                                init={init} 
                                handleSendingFaceImg={handleSendingFaceImg}
                                onoff={onoff}
                                handleGetGroup={handleGetGroup} />
                :<FindingMemberView groupImg={group_img} 
                                    members={members} 
                                    init={init} 
                                    customer_id={customer_id}
                                    handleMemberChoice={handleMemberChoice}/>
                }
                
            </div>
        )
    }
}

export default observer(VerifySelfContainer)