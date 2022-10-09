import {useRecoilState} from "recoil";
import {sideBarState} from "@/recoil";

export default function useSideBar() {
    const [isOpenSideBar, setIsOpenSideBar] = useRecoilState(sideBarState);
    const handleOpenSideBar = (): void => setIsOpenSideBar({isOpen: true});
    const handleCloseSideBar = (): void => setIsOpenSideBar({isOpen: false});
    const handleToggleSideBar = (): void => setIsOpenSideBar({isOpen: !isOpenSideBar.isOpen});

    return {isOpenSideBar, handleOpenSideBar, handleCloseSideBar, handleToggleSideBar};
}