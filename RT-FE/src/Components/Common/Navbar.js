import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import RT_logo from "../../assets/Images/RT-logo.png"
import { authContext } from "../../Context/AuthContext"

export default function Navbar({inactive,setInactive}){

    useEffect(()=>{
        if(inactive){ 
            document.body.classList
        .add("sidebar-enable","vertical-collpsed")}else{
            document.body.classList.remove("sidebar-enable","vertical-collpsed")
        }
        
    },[inactive])

    const navigate = useNavigate()

    const {user,setUser,initialUser} = useContext(authContext)

    useEffect(()=>{
        if(!user.token) navigate("/login")
    },[user])

    return(
        <header id="page-topbar">
                <div className="navbar-header">
                    <div className="d-flex">
                        {/* <!-- LOGO --> */}
                        <div className="navbar-brand-box">
                            <a href="index.html" className="logo logo-light">
                               { inactive ? <span className="logo-sm">
                                    <img src={RT_logo} alt="" height="40"/>
                                </span> :
                                <span className="logo-lg">
                                    <img src={RT_logo} alt="" height="70"/>
                                </span>}
                            </a>
                        </div>

                        <button onClick={()=>setInactive(!inactive)} type="button" className="btn btn-sm px-3 font-size-16 header-item waves-effect">
                            <i className="fa fa-fw fa-bars"></i>
                        </button>

                    </div>

                    <div className="d-flex">
                        <div className="dropdown d-inline-block">
                            <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img className="rounded-circle header-profile-user" src="assets/images/users/avatar-1.jpg"
                                    alt="Header Avatar"/>
                                <span className="d-none d-xl-inline-block ms-1" key="t-henry">{"Henry"}</span>
                                <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                                {/* <!-- item--> */}
                                <a className="dropdown-item" href="#"><i className="bx bx-user font-size-16 align-middle me-1"></i> <span key="t-profile">Profile</span></a>
                                <a className="dropdown-item" href="#"><i className="bx bx-wallet font-size-16 align-middle me-1"></i> <span key="t-my-wallet">My Wallet</span></a>
                                <a className="dropdown-item d-block" href="#"><span className="badge bg-success float-end">11</span><i className="bx bx-wrench font-size-16 align-middle me-1"></i> <span key="t-settings">Settings</span></a>
                                <a className="dropdown-item" href="#"><i className="bx bx-lock-open font-size-16 align-middle me-1"></i> <span key="t-lock-screen">Lock screen</span></a>
                                <div className="dropdown-divider"></div>
                                <a onClick={()=>{}} className="dropdown-item text-danger" href="#"><i className="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i> <span key="t-logout">Logout</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
    )
}