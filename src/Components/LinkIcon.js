import "../Styles/LinkIcon.css";

const LinkIcon = ({awsomeFont, httpLink}) => {

    return (
        <div className="contact-link">
          <p className="icon-name">
            <a href={httpLink} target="_blank"><i className={awsomeFont}></i></a>
          </p>
        </div>
    );
};

export default LinkIcon;