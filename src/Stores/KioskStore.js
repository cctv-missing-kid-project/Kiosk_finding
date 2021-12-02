import SelectInput from "@mui/material/Select/SelectInput";
import { makeAutoObservable, runInAction } from "mobx";
import kioskApi from '../api/KioskApi';
import csrftoekn from '../csrftoken';


class KioskStore{
    img = "";
    imgReceived = "";
    message = "";
    customer_id = "";
    count = "";
    onoff = "";
    
    members = [];
    group_img = "";

    memberId = "";


    constructor() {
        makeAutoObservable(this, {}, {autoBind:true})
    }

    init = () => {
        this.img = "";
        this.imgReceived = "";
        this.customer_id = "";
        this.onoff = "";
        this.members = [];
        this.group_img = ""
    }

    setRef = webcam => {
        this.webcam = webcam;
    };

    capture() {
        this.count = 3;
        this.onoff = "on";
        setTimeout(() => {
            const imageSrc = this.webcam.getScreenshot();
            this.img = imageSrc;
        }, 3000)
    }

    async handleSendingFaceImg() {
        // save(this.img, 'image.jpeg');
        try {
            const data = await kioskApi.sendingFaceImg(this.img);
            runInAction(() => this.imgReceived = data['image'])
            runInAction(() => this.customer_id = data['id'])
        } catch(error) {
        runInAction(() => this.messege = error.message)
        }
        // console.log(this.img, typeof(this.img))
    }

    async handleGetGroup() {
        try {
            const data = await kioskApi.getGroup(this.customer_id);
            console.log(data)
            runInAction(() => this.members = data['members'])
            runInAction(() => this.group_img = data['group_img'])
            console.log(this.members[''])
        }catch(error) {
            runInAction(() => this.messege = error.message)
            }
    }

    async handleMemberChoice(key) {
        // try {
        //     const data = await kioskApi.getMemberLocation(key);
        // }catch(error) {
        //     runInAction(() => this.messege = error.message)
        //     }
        console.log(key)
    }
}

export default new KioskStore();