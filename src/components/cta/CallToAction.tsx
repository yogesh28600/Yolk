import "./CallToAction.css";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { useState } from "react";
const CallToAction = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div id="cta-btn-container">
      {isHover && <p id="btn-info">Call for more information</p>}
      <button
        id="cta-btn"
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
      >
        <MdOutlinePhoneInTalk />
      </button>
    </div>
  );
};
export default CallToAction;
