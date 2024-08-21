import React, { useState, useEffect } from "react";
import Dates from "../../shared/dates";
import Left from "../../shared/icons/Left";
import "./ocx.css";
function Ocx(props) {
  const limit = Math.floor(Math.random() * (100 - 6 + 1)) + 6;

  const CheckstatusBattery = () => {
    let background = "";

    if (limit >= 20) {
      background = "#fdd60c";
    }

    if (limit <= 20) {
      background = "#FD3731";
    }
    if (limit >= 40) {
      background = "#2332";
    }
    return background;
  };

  const [showVol2Signal, setShowVol2Signal] = useState(true);
  const [addNewClass, setAddNewClass] = useState(false);
  const randomizeVol2Signal = () => {
    setShowVol2Signal(Math.random() < 0.5); // Randomly set visibility
    setAddNewClass(Math.random() < 0.5); // Randomly add/remove __new class
  };

  useEffect(() => {
    randomizeVol2Signal();
  }, [randomizeVol2Signal]);
  return (
    <div className="div1">
      <div className="div-21">
        <div className="div-31">
          <div className="div-41">
            <div className="div-51">
 
                <div className="detalles__header">
                  <div className="detalles__left">
                    <div className="detalles__time">{Dates.currentTime()}</div>
                    <Left />
                  </div>
                  <div className="detalless__right">
                    <div className="vol1__signal">
                      <img src="mobile/vol1.png" alt="" width={14} />
                      <div className="detalles__signal">
                        <div className="detalles__1"></div>
                        <div className="detalles__2"></div>
                        <div
                          className={`detalles__3 ${
                            addNewClass ? "__new" : ""
                          }`}
                        ></div>
                        <div className="detalles__4"></div>
                      </div>
                    </div>
                    {showVol2Signal && (
                      <div className="vol2__signal">
                        <img src="mobile/vol2.png" alt="" width={14} />
                        <div className="detalles__signal">
                          <div className="detalles__1"></div>
                          <div className="detalles__2"></div>
                          <div
                            className={`detalles__3 ${
                              addNewClass ? "__new" : ""
                            }`}
                          ></div>
                          <div className="detalles__4"></div>
                        </div>
                      </div>
                    )}
                    <div className="battery__detalles">
                      <span className="detalles__level">{limit}%</span>
                      <div className="detalles__batt">
                        <div className="border__topdetalles"></div>
                        <div className="content__topdetalles">
                          <div
                            className="level__detalles"
                            style={{
                              height: `${limit}%`,
                              backgroundColor: CheckstatusBattery(),
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
      
              <div className="transfer__">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf12818f2f2f170c945ccbac8825efc929c86d7c3e5089bc43a2874ffb0d9223?placeholderIfAbsent=true&apiKey=b9ede3a07621476c9f48e26d65601acc"
                  className="img1"
                />
              <div className="transfer1">Transfer</div>
              <div>

<img src="/ocx/share.png" alt=""    className="img1 img__share"/>

              </div>
              </div>
            </div>
          </div>
          <div className="usdt1">+{props.amount} USDT</div>
          <div className="data1">≈ ${props.amount}.19</div>
        </div>
        <div className="div-61">
          <div className="div-71">
            <div>Date</div>
            <div className="status1">Status</div>
            <div className="sender1">Sender</div>
          </div>
          <div className="div-81">
            <div className="div-91">
              <div>13 Jul, 01:40</div>
              <div className="completed1">Completed</div>
            </div>
            <div className="t-bzg-jv-9-j-ww-p-rs-s-tpuv-j1">
              TBzgJv9jWw...pRsSTpuvJ
            </div>
          </div>
        </div>
        <div className="div-101">
          <div className="network-fee1">Network fee</div>
          <div className="trx1">0 TRX</div>
        </div>
        <div className="div-111">
          <div>More Details</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9bc0a4defc08348bf2d07a21273f2701f5d8d047421f31c7bd371fa4cebac34e?placeholderIfAbsent=true&apiKey=b9ede3a07621476c9f48e26d65601acc"
            className="img-21"
          />
        </div>
        <div className="div-121" />
      </div>
    </div>
  );
}

export default Ocx;
