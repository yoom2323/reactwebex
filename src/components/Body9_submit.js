import "../assets/Body9_submit.scss";

function Body9_submit() {
  return (
    <article id="section_9">
      <h2>궁금한 내용이 있으신가요?</h2>
      <p>궁금하신 내용을 남겨주시면 담당 부서에서 확인 후 답변 드리겠습니다.</p>
      <form id="section9_form">
        <p>회사명</p>
        <input type="text" name="company" id="comapany" />
        <p>연락처</p>
        <input type="text" name="call" id="call" />
        <p>메일주소</p>
        <input type="text" name="mail" id="mail" />
        <p>문의내용</p>
        <input type="text" name="inqury" id="inquiry" />
        <div className="submit_btn">
          <a href="#">
            <p>개인정보 동의 후 전송</p>
          </a>
        </div>
      </form>
    </article>
  );
}

export default Body9_submit;
