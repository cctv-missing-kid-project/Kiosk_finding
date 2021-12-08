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
    memberLocationImg = "";

    location = "3층 ### 구역";

    registeStatus = "";

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

    async handleRegisterImg() {
        try {
            const data = await kioskApi.registerGroupImg(this.img);
            if (data['result'] === 'success') {
                runInAction(() => this.registerStatus = 'success')
            } else {
                runInAction(() => this.registerStatus = 'fail')
            }
        } catch(error) {
        runInAction(() => this.messege = error.message)
        }
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
        try {
            const data = await kioskApi.getMemberLocation(key);
            runInAction(() => this.memberLocationImg = data['location'])

        }catch(error) {
            runInAction(() => this.messege = error.message)
            }
    }
}

export default new KioskStore();