// import React, { useState, useEffect, useRef } from "react";
// import { CSSTransition } from "react-transition-group";
// import { ReactComponent as CogIcon } from "./cog.svg";
// import { ReactComponent as ChevronIcon } from "./chevron.svg";

// const DropdownMenu = (props) => {
//   const [activeMenu, setActiveMenu] = useState("main");
//   const [menuHeight, setMenuHeight] = useState(null);
//   const dropdownRef = useRef(null);
//   const DropdownItem = (props) => {
//     return (
//       <a
//         href="#"
//         className="menu-item"
//         onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
//       >
//         <span className="icon-button">{props.leftIcon}</span>
//         {props.children}
//         <span className="icon-right">{props.rightIcon}</span>
//       </a>
//     );
//   };

//   return (
//     <div className="dropdown" ref={dropdownRef}>
//       <CSSTransition
//         in={activeMenu === "main"}
//         timeout={500}
//         classNames="menu-primary"
//         unmountOnExit
//         // onEnter={calcHeight}
//       >
//         <div className="menu">
//           <DropdownItem
//             leftIcon={<CogIcon />}
//             rightIcon={<ChevronIcon />}
//             goToMenu="settings"
//           >
//             Langugage
//           </DropdownItem>
//         </div>
//       </CSSTransition>
//     </div>
//   );
// };

// export default DropdownMenu;
