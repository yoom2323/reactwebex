import "../assets/Body6_check.scss";
import { HiOutlineTicket } from "react-icons/hi";
import {
  RiMedalLine,
  RiCalculatorLine,
  RiChatSmile2Line,
  RiCropLine,
  RiCodeSSlashLine,
  RiFingerprintLine,
  RiMoneyDollarCircleLine,
} from "react-icons/ri";

function Body6_check() {
  return (
    <article id="section_6">
      <h2>프로젝트 특징</h2>
      <p>
        성공한 사업가와 성공하지 못한 사업가를 구분하는 것은 순수한 인내심이다.
      </p>
      <div className="section_grid">
        <div className="item1">
          <span className="material-symbols-rounded">
            {" "}
            <HiOutlineTicket />{" "}
          </span>
          <h4>responsive layout</h4>
          <p>Guaranteed benefit</p>
          <p>Simple integration</p>
          <p>Quickly review your ideas</p>
          <p>The all-in-one digital toolkit</p>
          <p>Guaranteed benefit</p>
          <p>Simple integration</p>
          <p>Quickly review your ideas</p>
          <p>The all-in-one digital toolkit</p>
        </div>
        <div className="item2">
          <span className="material-symbols-rounded">
            {" "}
            <RiMedalLine />{" "}
          </span>
          <h4>branding</h4>
          <p>
            세상을 바꿀수 있다고 생각하는 제대로 정신나간 사람들이 세상을
            변화시킨다.
          </p>
        </div>
        <div className="item3">
          <span className="material-symbols-rounded">
            {" "}
            <RiCalculatorLine />{" "}
          </span>
          <h4>Development</h4>
          <p>
            세상을 바꿀수 있다고 생각하는 제대로 정신나간 사람들이 세상을
            변화시킨다.
          </p>
        </div>
        <div className="item4">
          <span className="material-symbols-rounded">
            <RiChatSmile2Line />
          </span>
          <h4>HTML5 video</h4>
          <p>
            세상을 바꿀수 있다고 생각하는 제대로 정신나간 사람들이 세상을
            변화시킨다.
          </p>
        </div>
        <div className="item5">
          <span className="material-symbols-rounded">
            {" "}
            <RiCropLine />
          </span>
          <h4>analysis</h4>
          <p>
            세상을 바꿀수 있다고 생각하는 제대로 정신나간 사람들이 세상을
            변화시킨다.
          </p>
        </div>
        <div className="item6">
          <span className="material-symbols-rounded">
            {" "}
            <RiCodeSSlashLine />{" "}
          </span>
          <h4>marketing</h4>
          <p>
            세상을 바꿀수 있다고 생각하는 제대로 정신나간 사람들이 세상을
            변화시킨다.
          </p>
        </div>
        <div className="item7">
          <span className="material-symbols-rounded">
            {" "}
            <RiFingerprintLine />{" "}
          </span>
          <h4>grid system</h4>
          <p>
            세상을 바꿀수 있다고 생각하는 제대로 정신나간 사람들이 세상을
            변화시킨다.
          </p>
        </div>
        <div className="item8">
          <span className="material-symbols-rounded">
            {" "}
            <RiMoneyDollarCircleLine />{" "}
          </span>
          <h4>pixel perfect</h4>
          <p>
            세상을 바꿀수 있다고 생각하는 제대로 정신나간 사람들이 세상을
            변화시킨다.
          </p>
        </div>
      </div>
    </article>
  );
}

export default Body6_check;
