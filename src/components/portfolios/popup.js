import React, { useState } from "react";

const popup = () => {
  const [showPopup, togglePopupFunc] = useState(false);
  
   const togglePopup = () => {
    togglePopupFunc(!showPopup);
  }
}


export default togglePopup;