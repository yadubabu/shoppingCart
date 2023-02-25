// import { calculateNewValue } from "@testing-library/user-event/dist/utils";
// import React, { useState } from "react";
// import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
// import "./style/test.scss";

// const Test = () => {
//   const [it1, setIt1] = useState();
//   const [it2, setIt2] = useState("none");
//   const toggle = (e) => {
//     return setIt1("0.5");
//   };
//   return (
//     <div>
//       <button id={1} style={{ opacity: `${it1}` }} onClick={toggle}>
//         Item1
//       </button>
//       <br />
//       <button id={2} style={{ opacity: `${it2}` }} onClick={toggle}>
//         item2
//       </button>
//     </div>
//   );
// };

// export default Test;

function type(name, type) {
  this.name = name;
  this.type = type;
}
function value(value) {
  this.value = value;
  type.call(this, "shift", "ver12");
  console.log(this);
}
value(12000);
