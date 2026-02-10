import "./header.css";
import logo from "../../Assets/b2blogoo.png";

const Header = () => {
  return (
    <header className="glass-header">
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <img src={logo} alt="RegisterKaro Logo" />
        </div>

        {/* Button */}
        <div className="header-action">
          <button className="consult-btn">Free Consultation</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
