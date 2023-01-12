import "../assets/Body8_ask.scss";
import { RiArrowDownSLine } from "react-icons/ri";

function Body8_ask() {
  return (
    <article id="section_8">
      <h2>자주하는 문의사항</h2>
      <div className="ask">
        <div className="item1">
          <p>
            We are creative agency that uses design and code to solve problems.
          </p>
          <a href="#">
            <span className="material-symbols-rounded">
              {" "}
              <RiArrowDownSLine />{" "}
            </span>
          </a>
        </div>
        <div className="item2">
          <p>
            Experienced broker of choice for leading international and domestic
            investors seeking the in class expertise.
          </p>
          <a href="#">
            <span className="material-symbols-rounded">
              {" "}
              <RiArrowDownSLine />{" "}
            </span>
          </a>
        </div>
        <div className="item3">
          <p>
            The leading independent trusted advisor for sourcing, and executing
            and capital market transactions.
          </p>
          <a href="#">
            <span className="material-symbols-rounded">
              {" "}
              <RiArrowDownSLine />{" "}
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default Body8_ask;
