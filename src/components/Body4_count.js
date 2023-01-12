import "../assets/Body4_count.scss";
import { MdApartment, MdPeopleOutline } from "react-icons/md";
import { BsLink45Deg } from "react-icons/bs";
import { RiLeafLine } from "react-icons/ri";

function Body4_count() {
  return (
    <article id="section_4">
      <div className="count_1">
        <span className="material-symbols-rounded">
          {" "}
          <MdApartment />{" "}
        </span>
        <h2>8465m</h2>
        <p>품질은 양보다 더 중요하다</p>
      </div>
      <div className="count_2">
        <span className="material-symbols-rounded">
          {" "}
          <MdPeopleOutline />{" "}
        </span>
        <h2>99%</h2>
        <p>품질은 양보다 더 중요하다</p>
      </div>
      <div className="count_3">
        <span className="material-symbols-rounded">
          {" "}
          <BsLink45Deg />{" "}
        </span>
        <h2>146+</h2>
        <p>품질은 양보다 더 중요하다</p>
      </div>
      <div className="count_4">
        <span className="material-symbols-rounded">
          {" "}
          <RiLeafLine />{" "}
        </span>
        <h2>2022</h2>
        <p>품질은 양보다 더 중요하다</p>
      </div>
    </article>
  );
}

export default Body4_count;
