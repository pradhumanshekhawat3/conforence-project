import cuh_logo from "../../images/cuh_logo.jfif"
import "./Header.css"
function Header(){
    return( 
        <div className="top_header">
            <div className="cuh_logo_Left">
                <img className="logo" src={cuh_logo} alt="" />
            </div>
            <div className="cuh_confo_headline">
                <h2>IEEE International Conference on Advanced Networks <br /> and Telecommunications Systems</h2>
                <h3>13-16 Feb 2022 // Mahendergarh, Haryana</h3>
            </div>
            <div className="cuh_logo_Right">
            <img className="logo" src={cuh_logo} alt="" />
            </div>
        </div>
    );
}
export default Header;