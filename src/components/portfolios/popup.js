import React from "react";

const Popup = (props) => {
  return (
    <div className="popup-wrap">
      <div className="popup-window">
        <img src={props.img} alt={props.imageTitle} />
        <button onClick={props.onClickFunk}>
          <i class="fa fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  )
};

export default Popup; 