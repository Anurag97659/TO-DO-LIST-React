import {React} from "react";
import {Link} from "react-router-dom";
import "../css/footer.css";

function Footer() {
    return (
        <div id="footer">
            <Link to="/about" id="about">About</Link>
        </div>
    );
}
export default Footer;