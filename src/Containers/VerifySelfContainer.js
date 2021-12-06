import { observer } from 'mobx-react';
import React, { Component } from 'react';
import VerifySelfView from '../Components/VerifySelfView';
import FindingMemberView from '../Components/FindingMemberView';
import ShowMemberLocationView from '../Components/ShowMemberLocationView';
import KioskStore from '../Stores/KioskStore';
import ToHomeView from '../Components/ToHomeView';


class VerifySelfContainer extends Component {
    kioskStore = KioskStore;
    render() {
        const { capture, img, imgReceived, setRef, init, handleSendingFaceImg, onoff, handleGetGroup } = this.kioskStore;
        const { group_img, members, customer_id, handleMemberChoice } = this.kioskStore;
        const { memberLocationImg, location } = this.kioskStore;
        return (
            <div>
                <ToHomeView/>
                {group_img === "" && memberLocationImg === ""
                ?<VerifySelfView capture={capture} 
                                img={img} 
                                imgReceived={imgReceived} 
                                setRef={setRef} 
                                init={init} 
                                handleSendingFaceImg={handleSendingFaceImg}
                                onoff={onoff}
                                handleGetGroup={handleGetGroup} />
                : null }
                {group_img !== "" && memberLocationImg === ""
                ?<FindingMemberView groupImg={group_img} 
                                    members={members} 
                                    init={init} 
                                    customer_id={customer_id}
                                    handleMemberChoice={handleMemberChoice}/>
                : null}
                {memberLocationImg !== ""
                ?<ShowMemberLocationView    memberLocationImg={memberLocationImg}
                                            location={location} />
                : null}
                
            </div>
        )
    }
}

export default observer(VerifySelfContainer)