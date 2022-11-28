import "../Styles/Footer.css"
import LinkIcon from "./LinkIcon";

const Footer = () => {
  return (
    <div className="footer-main-cont">
      <div className="footer-text-cont">
        <p className="footer-text">2022 | desarrollado por <b>Pablo Rossi</b> | Developer</p>   
      </div>
      <div className="contact-links-container">
        <LinkIcon awsomeFont={"fa-brands fa-linkedin"} httpLink={"https://www.linkedin.com/in/pablo-andr%C3%A9s-rossi-b3959835/"}/>
        <LinkIcon awsomeFont={"fa-brands fa-github"} httpLink={"https://github.com/PabloRossi1983"}/>
        <LinkIcon awsomeFont={"fa-sharp fa-solid fa-envelope"} httpLink={"mailto:pablo.a.rossi83@gmail.com"}/>
      </div>
    </div>
  );
};

export default Footer;