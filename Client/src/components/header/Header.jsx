import lasolidariaLogo from "../../assets/lasolidariaLogo.png"
import Navigation from "./navigation/Navigation"
import LoginBtn from "./access/LoginBtn"
import SignupBtn from "./access/SignupBtn"
import { NavLink } from "react-router-dom"

function Header() {
    return (
        <div className="w-full flex justify-around items-center m-4">
            <NavLink to="/">
                <div className="flex flex-row justify-between items-center gap-2">
                    <img 
                        src={lasolidariaLogo}
                        alt='lasolidariaLogo'
                        className=""
                    />
                    <h1 className="text-zinc-700 text-2xl font-extralight font-['Poiret One']">
                        lasolidaria
                    </h1>
                </div>
            </NavLink>
            
            <Navigation />

            <div className="flex flex-row justify-between items-center gap-2">
                <LoginBtn />
                <SignupBtn />
            </div>
        </div>
    )
}

export default Header