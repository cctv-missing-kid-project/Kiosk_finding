import React, { Component } from 'react';
import { observer } from 'mobx-react';
import KioskStore from '../Stores/KioskStore';
import RegisterView from '../Components/RegisterView';
import ToHomeView from '../Components/ToHomeView';
import SuccessView from '../Components/SuccessView';

class RegisterContainer extends Component {
    kioskStore = KioskStore;
    render() {
        const { capture, img, init, setRef, handleRegisterImg, onoff, registerStatus } = this.kioskStore; 
        return (
            <div>
                <ToHomeView/>
                {registerStatus === "success"
                ?<SuccessView/>
                :<RegisterView img={img} setRef={setRef} init={init} onoff={onoff} capture={capture} handleRegisterImg={handleRegisterImg}/>}
            </div>
        )
    }
}

export default observer(RegisterContainer)
