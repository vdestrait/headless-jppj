import React from "react";
import sanitinizer from "../../../helpers/sanitinizer";


function History({data}) {

  return (
    <>
      {data && (
        <>
          <h2>{data[0].acf.history_title}</h2>

          <div className="container">
            <div className="row mb-2">
              <div className="col-md-6 mb-4">
                <div className="bcg-wrap">
                  <div
                    className="bcg-img"
                    style={{
                      backgroundImage: `url(${data[0].acf.history_image})`
                    }}
                  ></div>
                </div>
              </div>
              <div
                className="col-md-6"
                dangerouslySetInnerHTML={sanitinizer(data[0].acf.history_text)}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default History;
