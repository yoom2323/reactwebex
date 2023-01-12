import "../assets/Body7_map.scss";
import {
  RiMapPinLine,
  RiHeadphoneLine,
  RiMailLine,
  RiKakaoTalkFill,
} from "react-icons/ri";

function Body7_map(props) {
  return (
    <article id="section_7">
      <h2>찾아오시는 길</h2>
      <p>무료주차가 가능한 편리하고 넓은 지상주차장 보유!</p>
      <script
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=650d3f11eacd10e873fbb609c644f999"
      ></script>

      <div className="location_map">
        <div id="kakao_map" className="kakao_map"></div>
      </div>
      <div className="location_info">
        <div className="item1">
          <div className="item1_icon">
            <span className="material-symbols-rounded">
              {" "}
              <RiMapPinLine />{" "}
            </span>
          </div>
          <div className="item1_info">
            <h4>주소</h4>
            <p>795 Folsom Ave, Suite 600 San Francisco, CA 94107</p>
          </div>
        </div>
        <div className="item2">
          <div className="item2_icon">
            <span className="material-symbols-rounded">
              {" "}
              <RiHeadphoneLine />{" "}
            </span>
          </div>
          <div className="item2_info">
            <h4>전화번호</h4>
            <p>+62-111-222-333</p>
          </div>
        </div>
        <div className="item3">
          <div className="item3_icon">
            <span className="material-symbols-rounded">
              <RiMailLine />
            </span>
          </div>
          <div className="item3_info">
            <h4>이메일</h4>
            <p>from.yami@gmail.com</p>
          </div>
        </div>
        <div className="item4">
          <div className="ite4_icon">
            <span className="material-symbols-rounded">
              {" "}
              <RiKakaoTalkFill />{" "}
            </span>
          </div>
          <div className="item3_info">
            <h4>카카오 채널</h4>
            <p>from.yami@gmail.com</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Body7_map;
