import React from "react"
import SocialDetails from "./SocialDetails";

const Footer = () => {
    return (
        <footer className="footer">
            <SocialDetails/>
            <p>copyright &copy; {new Date().getFullYear()} <span>Ratnesh kumar</span>. all rights reserved.</p>
        </footer>
    )
}

export default Footer
