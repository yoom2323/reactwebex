import "../assets/Navigation.scss";

function Navigation() {
  const path = process.env.PUBLIC_URL;
  return (
    <>
      <nav>
        <h1>
          <a href="/">
            <img src={path + "/images/logo-dark.png"} alt="다미 로고" />
          </a>
        </h1>
        <ul id="gnb">
          <li>
            <a href="#">about</a>
            <ul className="sub_menu">
              <li>
                <a href="#">clean</a>
              </li>
              <li>
                <a href="#">simple</a>
              </li>
              <li>
                <a href="#">wide</a>
              </li>
              <li>
                <a href="#">history</a>
              </li>
              <li>
                <a href="#">store map</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">service</a>
            <ul className="sub_menu">
              <li>
                <a href="#">clean</a>
              </li>
              <li>
                <a href="#">simple</a>
              </li>
              <li>
                <a href="#">wide</a>
              </li>
              <li>
                <a href="#">history</a>
              </li>
              <li>
                <a href="#">store map</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">portfolio</a>
            <ul className="sub_menu">
              <li>
                <a href="#">clean</a>
              </li>
              <li>
                <a href="#">simple</a>
              </li>
              <li>
                <a href="#">wide</a>
              </li>
              <li>
                <a href="#">history</a>
              </li>
              <li>
                <a href="#">store map</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">board</a>
            <ul className="sub_menu">
              <li>
                <a href="#">clean</a>
              </li>
              <li>
                <a href="#">simple</a>
              </li>
              <li>
                <a href="#">wide</a>
              </li>
              <li>
                <a href="#">history</a>
              </li>
              <li>
                <a href="#">store map</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">contact</a>
            <ul className="sub_menu">
              <li>
                <a href="#">clean</a>
              </li>
              <li>
                <a href="#">simple</a>
              </li>
              <li>
                <a href="#">wide</a>
              </li>
              <li>
                <a href="#">history</a>
              </li>
              <li>
                <a href="#">store map</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">element</a>
            <ul class="sub_menu">
              <li>
                <a href="#">clean</a>
              </li>
              <li>
                <a href="#">simple</a>
              </li>
              <li>
                <a href="#">wide</a>
              </li>
              <li>
                <a href="#">history</a>
              </li>
              <li>
                <a href="#">store map</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">shop</a>
            <ul class="sub_menu">
              <li>
                <a href="#">clean</a>
              </li>
              <li>
                <a href="#">simple</a>
              </li>
              <li>
                <a href="#">wide</a>
              </li>
              <li>
                <a href="#">history</a>
              </li>
              <li>
                <a href="#">store map</a>
              </li>
            </ul>
          </li>
        </ul>

        <ul id="registry">
          <li>
            <a href="#">login</a>
          </li>
          <li>
            <a href="#">join</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
