import "../assets/Footer.scss";
import { AiOutlineArrowUp } from "react-icons/ai";
function Footer() {
  return (
    <article>
      <footer>
        <div className="footer_wrapper">
          <div className="footer_left">
            <p>Copyrights © 2021 All Rights Reserved by DYAMI.</p>
            <p>Terms of Use / Privacy Policy</p>
          </div>
          <div className="footer_right">
            <p>from.yami@gmail.com · 1234-5678</p>
          </div>
        </div>
      </footer>
      <div className="arrow_top">
        <a href="#">
          <span className="material-symbols-rounded">
            {" "}
            <AiOutlineArrowUp />{" "}
          </span>
        </a>
      </div>
    </article>
  );
}

export default Footer;
