import React from "react";
import Fleur from "../components/fleur";

function Fleurs({fleurs}) {
  return (
    <div>
      <h3 className="text-pink m-4 mb-1">Nos Fleurs</h3>
    <div className="row g-4 p-4">
      {fleurs.map((fl) => (
        <div key={fl.id} className="col-md-4 col-lg-3 col-sm-6">
          <Fleur fleur={fl} />
        </div>
      ))}
     
    </div>
    </div>
  );
}

export default Fleurs;
