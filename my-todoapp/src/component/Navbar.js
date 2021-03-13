import React, { useState } from "react";
function Navbar(props) {
  const [add, setadd] = useState([]);
  const [handleItemInput, sethandleItemInput] = useState();

  function addbtn(e) {
    e.preventDefault();
    setadd();
    // alert('The link was clicked.');
  }

  return (
    <>
      <div className="nav">
        <input onChange={handleItemInput} placeholder="write here" />
        <button onClick={addbtn}>add</button>
      </div>

      <div className="container" style={{ textAlign: "center" }}>
        {/* {add.map((item, index) => { */}
        <ul>
          <li>hi</li>
          <li>hi </li>
        </ul>
        {/* })} */}
      </div>
    </>
  );
}

export default Navbar;
