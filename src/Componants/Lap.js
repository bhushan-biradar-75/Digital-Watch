import React, { useContext } from "react";
import TimerContaxt from "../context/TimerContex";

function Lap() {
  const Con = useContext(TimerContaxt);

  return (
    <div>
      {/*used ternory operator if nothing is in locol storage it will show nothing */}
      <div class="lap ">
        { Con.arr === null && Con.arr===undefined
            ? ("")
            :( Con.arr.flat().map((ele, ind) => {
                localStorage.setItem("localTime", JSON.stringify(Con.arr));
                if (ele != null) {
                  return (
                    <div className="lap-data animate__animated" key={ind}>
                      <h4>LAP {ind+1}</h4>
                      <h5 style={{fontFamily:" 'Orbitron', sans-serif",fontSize:'12px'}} >{ele}</h5>
                      <div className="icon" onClick={() => Con.remove(ind)}>
                        {" "}
                        <i className="fa fa-trash"></i>
                      </div>
                    </div>
                  );
                }
              }))
        }
      </div>
    </div>
  );
}

export default Lap;
