import React from "react";
import ContactInfo from "../components/ContactMe/ContactMe";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import ContactForm from "../components/ContactForm/ContactForm";

function Contact(){
    return(
        <div className="bg-lgCyan">
            <Navbar />
            <ContactInfo />
            <Footer />
        </div>
    )
}

export default Contact