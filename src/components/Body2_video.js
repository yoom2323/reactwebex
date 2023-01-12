import "../assets/Body2_video.scss";

function Body2_video(props) {
  return (
    <article id="section2">
      <h2>
        <span>위대한 일</span>은 언제나 다른 사람과 협력해야만 이뤄낼 수
        있습니다.
      </h2>
      <p>
        우리는 많은 것을 할 수 있는 기회 없고, 모든 사람들은 훌륭히 해내야만
        한다. 이건 우리 인생이기 때문이다. 인생은 짧고 끝이 있다. 우리 모두는
        맡은 일을 하도록 선택되었다. 그러니까 정말 훌륭하게 해내야 하고 가치있게
        만들어야 한다.
      </p>
      <div className="section2_video">
        <video
          src="./images/171124_H1_006.mp4"
          muted={true}
          loop={true}
          autoPlay={true}
        ></video>
      </div>
    </article>
  );
}

export default Body2_video;
