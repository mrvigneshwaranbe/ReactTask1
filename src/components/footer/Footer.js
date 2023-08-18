import { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import "./footer.css";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className="--flex-center" data-theme={theme}>
      <p>vtech &copy; 2023</p>
    </footer>
  );
};

export default Footer;
