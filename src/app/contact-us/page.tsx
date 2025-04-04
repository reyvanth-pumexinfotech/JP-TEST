import "./contactus.css";
import Navbar from "@/components/NewNavbar/navbar";
import Footer from "@/components/Footer/footer";
import ContactSectionOne from "@/components/ContactComponents/contactSectionOne/contactOne";
import ContactSectionTwo from "@/components/ContactComponents/contactSectionTwo/contactTwo";
import ContactSectionThree from "@/components/ContactComponents/contactSectionThree/contactThree";

export default function ContactUs() {
  return (
    <div className="contact-main-container">
      <Navbar />
      <ContactSectionOne />
      <ContactSectionTwo />
      <ContactSectionThree />
      <Footer />
    </div>
  );
}
