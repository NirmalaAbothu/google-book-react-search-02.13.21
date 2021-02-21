import React from "react";

function Jumbotron({ children }) {
     return (
          <div
               style={{
                    height: 300,
                    clear: "both",
                    paddingTop: 120,
                    textAlign: "center",
                    marginTop: "20px",
               }}
               className="jumbotron"
          >
               {children}
          </div>
     );
}

export default Jumbotron;
