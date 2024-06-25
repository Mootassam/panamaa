import React, { useState, useEffect } from "react";
import "./Detalles.css";
import Dates from "../../shared/dates";
import Left from "../../shared/icons/Left";
import Names from "../../shared/Names";
import Number from "../../shared/Number";
function Detalles(props) {
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
    <div className="app__detalles">
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
                className={`detalles__3 ${addNewClass ? "__new" : ""}`}
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
                  className={`detalles__3 ${addNewClass ? "__new" : ""}`}
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
      <div className="detalles__subheader">
        <div>
          <img src="/Detalles/back.png" width={9} />
        </div>
        <div className="subheader__text">Detalles</div>
        <div>
          <img src="/Detalles/out.png" alt="" width={18} />
        </div>
      </div>
      <div className="detalles__content">
        <div className="detalles__logo">
          <img src="/Detalles/circle.png" alt="" width={44} />
        </div>
        <div className="detalles__exito">Con éxito</div>
        <div className="exito__date">{Dates.Detalles()}</div>
        <div className="detalles__white">
          <div className="first__detalles">
            <div className="detalles__detail">Details</div>
            <div className="detalles__detaillright">
              <span className="send__detalles">Send</span>
              <span className="usdt__detalles">
                - {props.amount} USDT{" "}
                <img src="/Detalles/usdt.png" alt="" width={25} />
              </span>
              <div className="bar__usdt">
                <img src="/Detalles/bar.png" alt="" width={239} />
              </div>
              <div className="">
                <span className="Tron">Tron</span>
              </div>
              <div className="bar__usdt">
                <img src="/Detalles/bar.png" alt="" width={239} />
              </div>
            </div>
          </div>
          <div className="second__detalles">
            <div className="second__detalles__title">
              Recom pensa para los mineros
            </div>
            <div className="trx__amount">- 27.{Number.generatedecimalpart(props.amount)} TRX</div>
          </div>
        </div>
        <div className="detalles__white2">
          <div className="detalles__from">
            <div className="detalles__fromtitle">From</div>
            <div className="full__address">
              {Names.Randomaly()}
              <br /> {Names.Randomaly3()}
            </div>
          </div>

          <div className="small__bar">
            <div></div>
            <img src="/Detalles/smallbar.png" alt="" />
          </div>
          <div className="detalles__To">
            <div className="detalles__totitle">To</div>
            <div className="fullcode">
              TWoy8YBKNTokyxkuFYuMyPaZyGYBUHc <br /> d47
            </div>
          </div>
        </div>
        <div className="detalles__white3">
          <div className="numero__transaccion">Número de transacción</div>
          <div className="white3__right">
            <span>{Names.generateRandomString()}</span>
            <span>{Names.generateRandomString()}</span>
            <label htmlFor="">See details</label>
          </div>
        </div>
      </div>
      <div className="detalles__bottom">
        <img src="/mobile/d1.png" alt="" width="182" />
      </div>
    </div>
  );
}

export default Detalles;
