import {atom} from "recoil";

const sideBarState = atom({
    key : 'sideBarState',
    default : {
        isOpen: true,
    }
})

export default sideBarState