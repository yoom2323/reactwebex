import "../assets/Body1_value.scss";
import { FiArrowRight } from "react-icons/fi";

function Body1_value() {
  return (
    <main>
      <article id="main_section1">
        <div className="section1 item1">
          <h2>
            우리의 <span>핵심가치</span>
          </h2>
          <p>
            삶에서 만족을 느끼기 위해선
            <br />
            당신이 위대하다고 생각하는 일을 해야하죠.
          </p>
        </div>
        <div className="section1 item2">
          <a href="#">
            <p className="title">management</p>
            <p>
              <span className="material-symbols-rounded">
                <FiArrowRight />
              </span>
            </p>
          </a>
        </div>
        <div className="section1 item3">
          <a href="#">
            <p className="title">branding</p>
            <p>
              <span className="material-symbols-rounded">
                <FiArrowRight />
              </span>
            </p>
          </a>
        </div>
        <div className="section1 item4">
          <a href="#">
            <p className="title">development</p>
            <p>
              <span className="material-symbols-rounded">
                <FiArrowRight />
              </span>
            </p>
          </a>
        </div>
        <div className="section1 item5">
          <a href="#">
            <p className="title">analysis</p>
            <p>
              <span className="material-symbols-rounded">
                <FiArrowRight />
              </span>
            </p>
          </a>
        </div>
        <div className="section1 item6">
          <a href="#">
            <p className="title">marketing</p>
            <p>
              <span className="material-symbols-rounded">
                <FiArrowRight />
              </span>
            </p>
          </a>
        </div>
      </article>
    </main>
  );
}

export default Body1_value;
