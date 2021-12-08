import React, { Component } from 'react'
import KioskStore from '../Stores/KioskStore';
import RegisterView from '../Components/RegisterView';

export default class RegisterContainer extends Component {
    kioskStore = KioskStore;
    render() {
        const { capture, img, init, setRef, handleRegisterImg, onoff } = this.kioskStore; 
        return (
            <div>
                <RegisterView img={img} setRef={setRef} init={init} onoff={onoff} capture={capture} handleRegisterImg={handleRegisterImg}/>
            </div>
        )
    }
}
