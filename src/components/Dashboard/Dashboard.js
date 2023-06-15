import React, { useEffect, useState } from 'react'
import './dashboard.scss'
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Launchpad from '../Launchpad/Launchpad';
import Privatesale from '../Privatesale/Privatesale';
import Buycrypto from '../Buycrypto/Buycrypto';
import Leaderboard from '../Leaderboard/Leaderboard';
import Create from '../Create/Create';
import Staking from '../Staking/Staking';
import Nftlaunchpad from '../Nftlaunchpad/Nftlaunchpad';
import Presale from '../Presale/Presale';
import { Dropdown } from 'react-bootstrap';
import Connectwalletmodal from '../Connectwalletmodal/Connectwalletmodal';
import Kycmodal from '../Kycmodals/Kycmodal';
// import Projectsdetails from '../Projectsdetails/Projectsdetails';
import { Footer } from '../Footer/Footer';
import { Link, useLocation } from 'react-router-dom';
import Myaccountdashboard from '../Myaccountdashboard/Myaccountdashboard';
import Swap from '../Swap/Swap';

const Dashboard = () => {
    useEffect(() => {

        window.scrollTo(0, 0)
    }, [])
    const [showSide, setShowSide] = useState();

    const sidebar = () => {
        console.log("adfdssdf");
        if (showSide === true) {
            setShowSide(false);
        } else {
            setShowSide(true);
        }
    };

    const [show1, setShow1] = useState(false);
    const handleShow1 = () => setShow1(true);

    const [show3, setShow3] = useState(false);
    const handleShow3 = () => setShow3(true);

    const location = useLocation();
    const currentpath = location.pathname;
    const [route, setroute] = useState(0);
    return (
        <>
            <section className="maindashboard">
                <div className="theme-container">
                    <div onClick={sidebar} className="sidebar-icon">
                        <img src="\mobilelogo.svg" alt="mobilelogo" className="mobilelogo d-none" />
                        <img
                            src="\Assets\sidebar-icons\navbartoggle.svg"
                            alt="img"
                            className="img-fluid toggler"
                        />
                    </div>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <div className="lowerdashboardmain">
                            <div
                                className={
                                    showSide === true
                                        ? "mobielSidebarShow"
                                        : showSide === false
                                            ? "mobielSidebarHide "
                                            : "mobile-side-none"
                                }
                            >
                                <div className="sidebarheader d-none">
                                    <img onClick={() => { setroute(0) }} src="\mobilelogo.svg" alt="sidebarheaderlogo" className="sidebarheaderlogo" />
                                    <img
                                        src="\Assets\close-circle-white.svg"
                                        alt="img"
                                        className="img-fluid close-btn d-none"
                                        onClick={sidebar}
                                    />
                                </div>
                                <Nav variant="pills" className="sidebar">
                                    <div class="dropdown d-none dropdownmobile w-100">
                                        <button class="btn btn-secondary dropdown-toggle w-100" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <div className="outerbtn w-100">
                                                <div className="innerbtn">
                                                    <span className="btnspan"></span>
                                                    <div className="btntextss">
                                                        <div className="btnimg">
                                                            <img src="\Assets\home-assets\exchangeimg.png" alt="btnexhchangeimg" className="btnexhchangeimg" />
                                                        </div>
                                                        <h6 className="btninnertext">32,210 BNB</h6>
                                                        <span className="btninnerspan">0x54t6...5tx1</span>
                                                        <img src="\Assets\home-assets\arrow-down-dark.svg" alt="arrowdownimg" className="arrowdownimg" />
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <div className="innerdrops">

                                                <div className="drop" onClick={() => { setroute(1); sidebar(); }}>
                                                    <img src="\Assets\home-assets\myaccount.svg" alt="dropimg" className="dropimg" />
                                                    <p className="droptext">My Account</p>
                                                </div>

                                                <div className="drop">
                                                    <img src="\Assets\home-assets\mycontributions.svg" alt="dropimg" className="dropimg" />
                                                    <p className="droptext">My Contributions</p>
                                                </div>
                                                <div className="drop">
                                                    <img src="\Assets\home-assets\myprojects.svg" alt="dropimg" className="dropimg" />
                                                    <p className="droptext">My Projects</p>
                                                </div>
                                                <div
                                                    onClick={handleShow3}
                                                    className="drop">
                                                    <img src="\Assets\home-assets\kyc.svg" alt="dropimg" className="dropimg" />
                                                    <p className="droptext">KYC</p>
                                                </div>
                                                <div onClick={handleShow1} className="drop">
                                                    <img src="\Assets\home-assets\disconnect.svg" alt="dropimg" className="dropimg" />
                                                    <p className="droptext">Disconnect</p>
                                                </div>
                                            </div>
                                        </ul>
                                    </div>
                                    <img onClick={() => { setroute(0) }} src="\logo.svg" alt="logoside" className="logoside" />
                                    <Nav.Item>
                                        <Nav.Link eventKey="first" onClick={() => { sidebar(); setroute(0) }}>
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className='change-my-color'>
                                                <g clip-path="url(#clip0_191_5822)">
                                                    <path d="M21.549 0.00277459C17.2544 -0.0742254 12.3567 2.17069 9.25651 5.65311C6.29384 5.70902 3.40909 6.92361 1.28518 9.04753C1.16143 9.16944 1.11743 9.35186 1.17151 9.51686C1.22651 9.68278 1.36951 9.80286 1.54184 9.82761L5.07468 10.3336L4.63834 10.8222C4.47609 11.0037 4.48434 11.2796 4.65668 11.4519L10.5481 17.3434C10.637 17.4323 10.7543 17.4772 10.8726 17.4772C10.9817 17.4772 11.0908 17.4387 11.1778 17.3608L11.6664 16.9244L12.1724 20.4573C12.1972 20.6296 12.3328 20.7561 12.4969 20.8111C12.5391 20.8249 12.5831 20.8313 12.628 20.8313C12.7582 20.8313 12.8911 20.7744 12.9828 20.6837C15.0773 18.5891 16.2919 15.7044 16.3478 12.7417C19.8339 9.63511 22.0972 4.73919 21.9973 0.450108C21.9908 0.206275 21.7938 0.00919125 21.549 0.00277459ZM17.325 7.91544C16.8786 8.36186 16.2919 8.58553 15.7043 8.58553C15.1168 8.58553 14.5301 8.36186 14.0837 7.91544C13.1908 7.02169 13.1908 5.56786 14.0837 4.67411C14.9774 3.78036 16.4313 3.78036 17.325 4.67411C18.2188 5.56786 18.2188 7.02261 17.325 7.91544Z" fill="#777786" />
                                                    <path d="M2.49699 15.4963C1.51616 16.4771 0.169575 20.9083 0.0192416 21.4097C-0.0293418 21.5711 0.0155749 21.7461 0.133825 21.8653C0.221825 21.9533 0.338242 22.0001 0.458325 22.0001C0.502325 22.0001 0.546325 21.9936 0.590325 21.9808C1.09174 21.8305 5.52291 20.4839 6.50374 19.5031C7.60833 18.3985 7.60833 16.6009 6.50374 15.4963C5.39824 14.3917 3.60158 14.3926 2.49699 15.4963Z" fill="#777786" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_191_5822">
                                                        <rect width="22" height="22" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            Launchpad
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second" onClick={() => { sidebar(); setroute(0) }}>
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className='change-my-color'>
                                                <g clip-path="url(#clip0_175_626)">
                                                    <path d="M20.3904 9.12917C20.3298 5.97097 19.8898 3.64163 19.8958 3.63948C19.7128 3.28241 19.3918 2.98378 18.9991 2.83124C16.4209 1.83136 13.8858 0.877022 11.4142 0.0627637C11.1616 -0.0205957 10.8952 -0.0205957 10.6429 0.0627637C8.17179 0.874873 5.63706 1.82749 3.05937 2.82608C2.71261 2.96058 2.42171 3.20937 2.23222 3.51187C2.24683 3.51358 1.70242 5.213 1.6096 8.96632C1.5546 12.7201 2.0221 13.8446 2.00663 13.8458C2.25972 14.6708 2.73324 15.51 3.41171 16.3634C4.17011 17.3164 5.19492 18.3008 6.43285 19.2685C8.48203 20.8768 10.3997 21.838 10.4801 21.872C10.6541 21.9571 10.8384 22.0005 11.0284 22C11.2187 22 11.403 21.9566 11.5766 21.8711C11.6574 21.8372 13.5773 20.873 15.6256 19.2651C16.8639 18.2966 17.8887 17.3121 18.6476 16.3595C19.3746 15.4456 19.8662 14.5488 20.1038 13.668C20.0943 13.6667 20.4381 12.2882 20.3904 9.1296V9.12917ZM12.0484 11.5926V13.5936C12.0484 14.1574 11.5917 14.6141 11.0279 14.6146C10.4642 14.6146 10.007 14.1578 10.007 13.5941V11.6209C9.27136 11.2553 8.76519 10.4964 8.76519 9.61944C8.76519 8.38538 9.7655 7.38464 10.9996 7.38464C12.2336 7.38464 13.2339 8.38495 13.2344 9.61901C13.2344 10.4741 12.754 11.217 12.0484 11.5926Z" fill="#777786" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_175_626">
                                                        <rect width="22" height="22" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>

                                            Private Sale
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third" onClick={() => { sidebar(); setroute(0) }}>
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className='change-my-color'>
                                                <g clip-path="url(#clip0_191_5834)">
                                                    <path d="M11 0.6875C8.96038 0.6875 6.96657 1.29232 5.27069 2.42547C3.5748 3.55862 2.25303 5.16921 1.4725 7.05358C0.691968 8.93794 0.487746 11.0114 0.885656 13.0119C1.28357 15.0123 2.26574 16.8498 3.70797 18.292C5.1502 19.7343 6.98771 20.7164 8.98814 21.1143C10.9886 21.5123 13.0621 21.308 14.9464 20.5275C16.8308 19.747 18.4414 18.4252 19.5745 16.7293C20.7077 15.0334 21.3125 13.0396 21.3125 11C21.3125 8.26496 20.226 5.64193 18.292 3.70796C16.3581 1.77399 13.735 0.6875 11 0.6875ZM11.6875 14.96V15.7369C11.6875 15.9192 11.6151 16.0941 11.4861 16.223C11.3572 16.3519 11.1823 16.4244 11 16.4244C10.8177 16.4244 10.6428 16.3519 10.5139 16.223C10.3849 16.0941 10.3125 15.9192 10.3125 15.7369V14.9669C9.97113 14.8654 9.65653 14.6895 9.39141 14.4517C9.12629 14.2139 8.91725 13.9202 8.77938 13.5919C8.74204 13.4886 8.72998 13.3779 8.7442 13.2691C8.75842 13.1602 8.7985 13.0563 8.86111 12.9661C8.92371 12.8759 9.007 12.802 9.10402 12.7506C9.20104 12.6992 9.30896 12.6718 9.41875 12.6706C9.55449 12.6669 9.6883 12.7034 9.80331 12.7756C9.91833 12.8477 10.0094 12.9524 10.065 13.0763C10.1387 13.2638 10.2674 13.4247 10.4344 13.5376C10.6013 13.6505 10.7985 13.7102 11 13.7088C11.1333 13.7097 11.2655 13.6842 11.3889 13.6338C11.5123 13.5834 11.6245 13.5091 11.7191 13.4152C11.8136 13.3213 11.8887 13.2095 11.9399 13.0865C11.9911 12.9634 12.0175 12.8314 12.0175 12.6981C12.0212 12.5616 11.9976 12.4256 11.9483 12.2982C11.899 12.1708 11.8248 12.0545 11.7302 11.956C11.6355 11.8575 11.5222 11.7787 11.3969 11.7244C11.2715 11.67 11.1366 11.6411 11 11.6394C10.592 11.634 10.1919 11.5261 9.83649 11.3256C9.48109 11.1251 9.1818 10.8385 8.96615 10.4921C8.7505 10.1456 8.62541 9.75057 8.60239 9.34317C8.57936 8.93578 8.65914 8.52913 8.83438 8.16062C8.97357 7.85765 9.17842 7.58943 9.43407 7.3754C9.68972 7.16137 9.98978 7.00688 10.3125 6.92312V6.1325C10.3125 5.95016 10.3849 5.7753 10.5139 5.64636C10.6428 5.51743 10.8177 5.445 11 5.445C11.1823 5.445 11.3572 5.51743 11.4861 5.64636C11.6151 5.7753 11.6875 5.95016 11.6875 6.1325V6.94375C12.0619 7.05218 12.4041 7.25042 12.6844 7.52125C12.9184 7.75483 13.1031 8.03304 13.2275 8.33938C13.2568 8.43964 13.2629 8.54527 13.2453 8.64825C13.2277 8.75123 13.1869 8.84884 13.1259 8.93367C13.065 9.0185 12.9854 9.08832 12.8935 9.13783C12.8015 9.18733 12.6994 9.21522 12.595 9.21937C12.4596 9.2257 12.3254 9.19187 12.2092 9.12215C12.093 9.05243 12 8.94992 11.9419 8.8275C11.8857 8.70533 11.8089 8.59372 11.715 8.4975C11.5309 8.31635 11.2856 8.21086 11.0275 8.20188C10.7594 8.20547 10.5034 8.31404 10.3144 8.50428C10.1255 8.69451 10.0187 8.95125 10.0169 9.21937C10.0179 9.48454 10.1191 9.73953 10.3001 9.9333C10.4811 10.1271 10.7286 10.2453 10.9931 10.2644C11.5715 10.2773 12.1275 10.4897 12.5673 10.8656C13.007 11.2414 13.3034 11.7576 13.4063 12.3269C13.4832 12.899 13.352 13.4796 13.0365 13.963C12.721 14.4464 12.2422 14.8002 11.6875 14.96Z" fill="#777786" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_191_5834">
                                                        <rect width="22" height="22" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            Buy Crypto
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="swap" onClick={() => { sidebar(); setroute(0) }}>
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className='change-my-color'>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.29585 6.3916C8.84691 6.3916 9.29365 6.83835 9.29365 7.38941V13.1846C9.29365 14.5027 9.94071 15.6697 10.9345 16.3852C11.2398 16.6051 11.4582 16.9408 11.4582 17.3171V17.6245C11.4582 19.0848 10.2743 20.2687 8.81398 20.2687H3.69106C2.23072 20.2687 1.04688 19.0848 1.04688 17.6245V9.03579C1.04688 7.57545 2.23072 6.3916 3.69106 6.3916H8.29585ZM6.25256 17.6787C6.07211 17.6787 5.90889 17.605 5.7913 17.4861L3.94396 15.6388C3.69069 15.3855 3.69069 14.9748 3.94396 14.7215C4.19725 14.4683 4.6079 14.4683 4.86119 14.7215L5.60398 15.4643V9.63019C5.60398 9.272 5.89435 8.98161 6.25256 8.98161C6.61075 8.98161 6.90113 9.272 6.90113 9.63019V15.4643L7.64393 14.7215C7.89722 14.4683 8.30787 14.4683 8.56116 14.7215C8.81446 14.9748 8.81446 15.3855 8.56116 15.6388L6.71118 17.4887C6.69968 17.5002 6.68778 17.5113 6.67553 17.5218C6.56198 17.6196 6.41415 17.6787 6.25256 17.6787Z" fill="#777786" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2341 15.8287C11.7737 15.8287 10.5898 14.6449 10.5898 13.1845V4.59585C10.5898 3.13551 11.7737 1.95166 13.234 1.95166H18.3553C19.8157 1.95166 20.9995 3.13551 20.9995 4.59585V13.1845C20.9995 14.6449 19.8157 15.8287 18.3553 15.8287H13.2341ZM15.7946 12.6333C15.4364 12.6333 15.1461 12.3429 15.1461 11.9847V7.36145L14.706 7.80156C14.4527 8.05485 14.042 8.05485 13.7887 7.80156C13.5354 7.54829 13.5354 7.13762 13.7887 6.88435L15.3257 5.34735C15.4438 5.2238 15.6102 5.14684 15.7946 5.14684C15.9782 5.14684 16.1439 5.22307 16.2619 5.3456L17.8006 6.88435C18.0539 7.13762 18.0539 7.54829 17.8006 7.80156C17.5473 8.05485 17.1367 8.05485 16.8834 7.80156L16.4432 7.3614V11.9847C16.4432 12.3429 16.1528 12.6333 15.7946 12.6333Z" fill="#777786" />
                                            </svg>
                                            Swap
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth" onClick={() => { sidebar(); setroute(0) }}>
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className='change-my-color'>
                                                <g clip-path="url(#clip0_175_638)">
                                                    <path d="M15.959 3.60138C15.8741 3.34086 15.6488 3.15086 15.378 3.11154L12.8005 2.73694L11.6475 0.40107C11.5266 0.155547 11.2764 0 11.0023 0C10.7282 0 10.478 0.155547 10.3572 0.40107L9.20409 2.73698L6.62622 3.11158C6.35539 3.15094 6.13002 3.34091 6.04524 3.60143C5.96047 3.86195 6.03119 4.14799 6.22752 4.33916L8.09326 6.15734L7.6524 8.72446C7.606 8.99456 7.71707 9.2675 7.9387 9.42846C8.16081 9.59011 8.45459 9.61 8.6968 9.48329L11.0025 8.27118L13.3077 9.48329C13.5555 9.61327 13.8482 9.58646 14.0658 9.42846C14.2874 9.26754 14.3985 8.99461 14.3521 8.72472L13.9117 6.15734L15.777 4.33916C15.973 4.14799 16.0433 3.8619 15.959 3.60138Z" fill="#777786" />
                                                    <path d="M13.8787 10.965H8.1213C7.72383 10.965 7.40161 11.2872 7.40161 11.6846V22H14.5984V11.6846C14.5984 11.2872 14.2761 10.965 13.8787 10.965Z" fill="#777786" />
                                                    <path d="M0.924579 13.8436C0.527118 13.8436 0.204895 14.1659 0.204895 14.5633V21.431C0.204895 21.7452 0.459657 22 0.773887 22H5.96232V13.8436H0.924579Z" fill="#777786" />
                                                    <path d="M21.0754 16.7224H16.0377V22H21.2262C21.5404 22 21.7951 21.7453 21.7951 21.4311V17.4421C21.7951 17.0446 21.4729 16.7224 21.0754 16.7224Z" fill="#777786" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_175_638">
                                                        <rect width="22" height="22" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            Leaderboard
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fifth" onClick={() => { sidebar(); setroute(0) }}>
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className='change-my-color'>
                                                <g clip-path="url(#clip0_175_654)">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0209 0.916382C5.45417 0.916382 0.914558 5.44884 0.914551 11.0156C0.914537 16.5824 5.45416 21.1202 11.0209 21.1202C16.5877 21.1202 21.1184 16.5824 21.1184 11.0156C21.1183 5.44884 16.5877 0.916382 11.0209 0.916382ZM11.0066 6.41249C11.1296 6.41104 11.2516 6.43431 11.3654 6.48093C11.4793 6.52755 11.5826 6.59656 11.6692 6.68386C11.7558 6.77117 11.824 6.875 11.8698 6.98917C11.9155 7.10335 11.9379 7.22556 11.9355 7.34853V10.0993H14.6862C14.9299 10.0993 15.1637 10.1961 15.336 10.3684C15.5084 10.5408 15.6052 10.7745 15.6052 11.0183C15.6052 11.262 15.5084 11.4958 15.336 11.6681C15.1637 11.8405 14.9299 11.9373 14.6862 11.9373H11.9355V14.688C11.9355 14.9318 11.8386 15.1655 11.6663 15.3379C11.4939 15.5102 11.2602 15.607 11.0165 15.607C10.7727 15.607 10.539 15.5102 10.3666 15.3379C10.1943 15.1655 10.0974 14.9318 10.0974 14.688V11.9373H7.3467C7.10302 11.9498 6.86434 11.865 6.68316 11.7016C6.50197 11.5382 6.39311 11.3095 6.38051 11.0658C6.36791 10.8221 6.4526 10.5834 6.61597 10.4022C6.77933 10.2209 7.00799 10.112 7.25166 10.0993C7.28332 10.0976 7.31504 10.0976 7.3467 10.0993H10.0974V7.34853C10.0951 7.22722 10.1168 7.10664 10.1613 6.99376C10.2058 6.88089 10.2723 6.77796 10.3568 6.69092C10.4414 6.60388 10.5423 6.53445 10.6538 6.48666C10.7654 6.43888 10.8853 6.41366 11.0066 6.41249Z" fill="#777786" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_175_654">
                                                        <rect width="22" height="22" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            Create
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="sixth" onClick={() => { sidebar(); setroute(0) }}>
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className='change-my-color'>
                                                <g clip-path="url(#clip0_175_660)">
                                                    <path d="M6.39193 12.5629C7.01019 12.5629 7.60779 12.5229 8.17329 12.4486V6.2502C7.60785 6.17592 7.01019 6.13599 6.39193 6.13599C2.86181 6.13599 6.10352e-05 7.43391 6.10352e-05 9.03504V9.66376C6.10352e-05 11.2648 2.86181 12.5629 6.39193 12.5629Z" fill="#777786" />
                                                    <path d="M6.39193 15.7994C7.01019 15.7994 7.60779 15.7595 8.17329 15.6852V13.8684C7.60768 13.9427 7.01035 13.9831 6.39193 13.9831C3.31052 13.9831 0.738615 12.9941 0.134493 11.6779C0.0465151 11.8696 6.10352e-05 12.0681 6.10352e-05 12.2716V12.9003C6.10352e-05 14.5015 2.86181 15.7994 6.39193 15.7994Z" fill="#777786" />
                                                    <path d="M8.17323 17.2463V17.1051C7.60762 17.1794 7.01029 17.2198 6.39187 17.2198C3.31045 17.2198 0.738554 16.2308 0.134432 14.9146C0.0464541 15.1062 0 15.3048 0 15.5083V16.137C0 17.7382 2.86175 19.0361 6.39187 19.0361C7.09783 19.0361 7.77684 18.984 8.4118 18.8882C8.25442 18.5662 8.17323 18.2267 8.17323 17.875V17.2463Z" fill="#777786" />
                                                    <path d="M15.6081 1.22595C12.078 1.22595 9.21625 2.52387 9.21625 4.125V4.75372C9.21625 6.35485 12.078 7.65277 15.6081 7.65277C19.1382 7.65277 22 6.35485 22 4.75372V4.125C22 2.52387 19.1382 1.22595 15.6081 1.22595Z" fill="#777786" />
                                                    <path d="M15.6081 9.07311C12.5267 9.07311 9.9548 8.08415 9.35068 6.76782C9.2627 6.9595 9.21625 7.15803 9.21625 7.36159V7.99031C9.21625 9.59144 12.078 10.8894 15.6081 10.8894C19.1382 10.8894 22 9.59144 22 7.99031V7.36159C22 7.15803 21.9535 6.9595 21.8656 6.76782C21.2614 8.08415 18.6895 9.07311 15.6081 9.07311Z" fill="#777786" />
                                                    <path d="M15.6081 12.3098C12.5267 12.3098 9.9548 11.3208 9.35068 10.0045C9.2627 10.1962 9.21625 10.3947 9.21625 10.5983V11.227C9.21625 12.8282 12.078 14.1261 15.6081 14.1261C19.1382 14.1261 22 12.8282 22 11.227V10.5983C22 10.3947 21.9535 10.1962 21.8656 10.0045C21.2614 11.3208 18.6895 12.3098 15.6081 12.3098Z" fill="#777786" />
                                                    <path d="M15.6081 15.7212C12.5267 15.7212 9.9548 14.7322 9.35068 13.4159C9.2627 13.6076 9.21625 13.8061 9.21625 14.0096V14.6384C9.21625 16.2395 12.078 17.5374 15.6081 17.5374C19.1382 17.5374 22 16.2395 22 14.6384V14.0096C22 13.8061 21.9535 13.6075 21.8656 13.4159C21.2614 14.7321 18.6895 15.7212 15.6081 15.7212Z" fill="#777786" />
                                                    <path d="M15.6081 18.9577C12.5267 18.9577 9.9548 17.9688 9.35068 16.6525C9.2627 16.8443 9.21625 17.0428 9.21625 17.2462V17.875C9.21625 19.4761 12.078 20.774 15.6081 20.774C19.1382 20.774 22 19.4761 22 17.875V17.2462C22 17.0427 21.9535 16.8441 21.8656 16.6525C21.2614 17.9687 18.6895 18.9577 15.6081 18.9577Z" fill="#777786" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_175_660">
                                                        <rect width="22" height="22" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>

                                            Staking
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="seventh" onClick={() => { sidebar(); setroute(0) }} disabled>
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className='change-my-color'>
                                                <g clip-path="url(#clip0_175_674)">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.25651 5.65311C12.3567 2.17069 17.2544 -0.0742254 21.549 0.00277459C21.7938 0.00919125 21.9908 0.206275 21.9973 0.450108C22.0821 4.0906 20.4644 8.16827 17.8415 11.2179L14.5 9.28868C14.1906 9.11004 13.8094 9.11004 13.5 9.28868L8.43782 12.2113C8.12842 12.39 7.93782 12.7201 7.93782 13.0773V14.7331L4.65668 11.4519C4.48434 11.2796 4.47609 11.0037 4.63834 10.8222L5.07468 10.3336L1.54184 9.82761C1.36951 9.80286 1.22651 9.68278 1.17151 9.51686C1.11743 9.35186 1.16143 9.16944 1.28518 9.04753C3.40909 6.92361 6.29384 5.70902 9.25651 5.65311ZM15.7043 8.58553C16.2919 8.58553 16.8786 8.36186 17.325 7.91544C18.2188 7.02261 18.2188 5.56786 17.325 4.67411C16.4313 3.78036 14.9774 3.78036 14.0837 4.67411C13.1908 5.56786 13.1908 7.02169 14.0837 7.91544C14.5301 8.36186 15.1168 8.58553 15.7043 8.58553Z" fill="#777786" />
                                                    <path d="M2.49699 15.4962C1.51616 16.4771 0.169575 20.9082 0.0192416 21.4097C-0.0293418 21.571 0.0155749 21.7461 0.133825 21.8652C0.221825 21.9532 0.338242 22 0.458325 22C0.502325 22 0.546325 21.9936 0.590325 21.9807C1.09174 21.8304 5.52291 20.4838 6.50374 19.503C7.60833 18.3984 7.60833 16.6008 6.50374 15.4962C5.39824 14.3917 3.60158 14.3926 2.49699 15.4962Z" fill="#777786" />
                                                    <path d="M19.0675 12.8713L14.1758 10.0471C14.067 9.9843 13.933 9.9843 13.8242 10.0471L8.93256 12.8713C8.82378 12.9341 8.75677 13.0502 8.75677 13.1758V18.8242C8.75677 18.9498 8.82378 19.0659 8.93256 19.1287L13.8242 21.9529C13.933 22.0157 14.067 22.0157 14.1758 21.9529L19.0675 19.1287C19.1763 19.0659 19.2433 18.9498 19.2433 18.8242V13.1758C19.2433 13.0502 19.1763 12.9341 19.0675 12.8713ZM12.6821 17.1297C12.6821 17.3238 12.5247 17.4813 12.3305 17.4813H11.9539C11.812 17.4813 11.684 17.3959 11.6294 17.2649L10.9875 15.7244V17.1297C10.9702 17.5956 10.3015 17.5953 10.2844 17.1297V14.8703C10.2844 14.6762 10.4418 14.5188 10.636 14.5188H11.0125C11.1545 14.5188 11.2825 14.6041 11.3371 14.7351L11.9789 16.2756V14.8703C11.9962 14.4044 12.6649 14.4047 12.6821 14.8703V17.1297ZM15.1297 15.2219H14V15.8367H14.7531C15.2191 15.854 15.2188 16.5227 14.7531 16.5398H14V17.1297C13.9827 17.5956 13.314 17.5953 13.2969 17.1297V14.8703C13.2969 14.6762 13.4543 14.5188 13.6485 14.5188H15.1297C15.5957 14.536 15.5953 15.2047 15.1297 15.2219ZM17.5774 15.2219H17.1758V17.1297C17.1585 17.5956 16.4898 17.5953 16.4727 17.1297V15.2219H16.0711C15.6052 15.2046 15.6055 14.5359 16.0711 14.5188H17.5774C18.0433 14.536 18.043 15.2047 17.5774 15.2219Z" fill="#777786" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_175_674">
                                                        <rect width="22" height="22" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            NFT Launchpad
                                            <p className="comingssontext">coming soon</p>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="eight" onClick={() => { sidebar(); setroute(0) }} disabled>
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className='change-my-color'>
                                                <path d="M2.56664 4.76667L6.41664 7.33333L10.2538 1.96167C10.3386 1.84284 10.4505 1.74597 10.5803 1.67915C10.7101 1.61232 10.854 1.57745 11 1.57745C11.146 1.57745 11.2898 1.61232 11.4196 1.67915C11.5494 1.74597 11.6614 1.84284 11.7461 1.96167L15.5833 7.33333L19.4333 4.76667C19.5791 4.66972 19.7495 4.61652 19.9244 4.61333C20.0994 4.61015 20.2716 4.65713 20.4207 4.74872C20.5699 4.84029 20.6897 4.97266 20.766 5.13015C20.8423 5.28764 20.8719 5.4637 20.8514 5.6375L19.3453 18.4406C19.319 18.6636 19.2118 18.8691 19.0441 19.0183C18.8763 19.1675 18.6596 19.25 18.4351 19.25H3.56489C3.34037 19.25 3.12366 19.1675 2.95589 19.0183C2.7881 18.8691 2.68091 18.6636 2.65464 18.4406L1.14856 5.63658C1.12821 5.46286 1.15799 5.28694 1.23438 5.12958C1.31077 4.97224 1.43058 4.84003 1.57968 4.74857C1.72877 4.65711 1.90092 4.61021 2.0758 4.61342C2.25069 4.61663 2.421 4.6698 2.56664 4.76667ZM11 13.75C11.4862 13.75 11.9525 13.5568 12.2963 13.213C12.6402 12.8692 12.8333 12.4029 12.8333 11.9167C12.8333 11.4305 12.6402 10.9641 12.2963 10.6203C11.9525 10.2765 11.4862 10.0833 11 10.0833C10.5138 10.0833 10.0475 10.2765 9.70363 10.6203C9.35979 10.9641 9.16664 11.4305 9.16664 11.9167C9.16664 12.4029 9.35979 12.8692 9.70363 13.213C10.0475 13.5568 10.5138 13.75 11 13.75Z" fill="#777786" />
                                            </svg>
                                            Presale Pro
                                            <p className="comingssontext">coming soon</p>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <Tab.Content className="content-side">
                                {
                                    route === 0 ?
                                        <>
                                            <div className="mainbtns">
                                                <div className="outerbtn btnonewidth">
                                                    <div className="innerbtn">
                                                        <span className="btnspan"></span>
                                                        <h5 className="btntext">Buy Token</h5>
                                                    </div>
                                                </div>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                        <div className="outerbtn">
                                                            <div className="innerbtn">
                                                                <span className="btnspan"></span>
                                                                <div className="btntextss">
                                                                    <div className="btnimg">
                                                                        <img src="\Assets\home-assets\exchangeimg.png" alt="btnexhchangeimg" className="btnexhchangeimg" />
                                                                    </div>
                                                                    <h6 className="btninnertext">32,210 BNB</h6>
                                                                    <span className="btninnerspan">0x54t6...5tx1</span>
                                                                    <img src="\Assets\home-assets\arrow-down-dark.svg" alt="arrowdownimg" className="arrowdownimg" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <div className="innerdrops">

                                                            <div className="drop" onClick={() => setroute(1)}>
                                                                <img src="\Assets\home-assets\myaccount.svg" alt="dropimg" className="dropimg" />
                                                                <p className="droptext">My Account</p>
                                                            </div>

                                                            <div className="drop">
                                                                <img src="\Assets\home-assets\mycontributions.svg" alt="dropimg" className="dropimg" />
                                                                <p className="droptext">My Contributions</p>
                                                            </div>
                                                            <div className="drop">
                                                                <img src="\Assets\home-assets\myprojects.svg" alt="dropimg" className="dropimg" />
                                                                <p className="droptext">My Projects</p>
                                                            </div>
                                                            <div onClick={handleShow3} className="drop">
                                                                <img src="\Assets\home-assets\kyc.svg" alt="dropimg" className="dropimg" />
                                                                <p className="droptext">KYC</p>
                                                            </div>
                                                            <div onClick={handleShow1} className="drop">
                                                                <img src="\Assets\home-assets\disconnect.svg" alt="dropimg" className="dropimg" />
                                                                <p className="droptext">Disconnect</p>
                                                            </div>
                                                        </div>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                            <Tab.Pane eventKey="first">
                                                <Launchpad />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Privatesale />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <Buycrypto />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="swap">
                                                <Swap />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="fourth">
                                                <Leaderboard />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="fifth">
                                                <Create />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="sixth">
                                                <Staking />
                                            </Tab.Pane>
                                            {/* <Tab.Pane eventKey="seventh">
                                                <Nftlaunchpad />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="eight">
                                                <Presale />

                                            </Tab.Pane> */}
                                        </>
                                        : route == 1 ?
                                            <Myaccountdashboard /> : ""
                                }
                                <Footer />
                            </Tab.Content>
                        </div>

                    </Tab.Container>
                </div>
            </section>

            <Connectwalletmodal
                show1={show1}
                setShow1={setShow1}
            />
            <Kycmodal
                show3={show3}
                setShow3={setShow3}
            />
        </>
    )
}

export default Dashboard