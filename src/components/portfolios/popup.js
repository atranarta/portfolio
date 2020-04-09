import React from "react";

const Popup = ({onClick, image, title}) => <div className="popup-wrap">
  <div className="popup-window">
    <img src={image} alt={title} />
    <button onClick={onClick}>
      <i class="fa fa-times" aria-hidden="true"></i>
    </button>
  </div>
</div>

export default Popup; 