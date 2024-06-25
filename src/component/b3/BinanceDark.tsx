import React from "react";
import "./Bdark.css";
import { IoIosWifi } from "react-icons/io";
import Dates from "../../shared/dates";
function B3(props) {
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
  return (
    <div className="bdark__mode">
      <div className="binancedark__modeheader">
        <div className="modeheader__left">
          <span>{Dates.currentTime()}</span>
        </div>
        <div className="modeheader__right">
          <div className="binanance__signal">
            <div className="signal__1"></div>
            <div className="signal__2"></div>
            <div className="signal__3"></div>
            <div className="signal__4"></div>
          </div>
          <IoIosWifi size={19} />
          <div className="binance__battery">
            <div className="binance__cover">
              <div className="binance__level"   style={{ width: `${limit}%`, background: CheckstatusBattery(), }}></div>
              <span>{limit}</span>
            </div>
            <div className="binance__border"></div>
          </div>
        </div>
      </div>

      <div className="binance__subheader">
        <div className="back__binance">
          <img src="/BlackBinance/back.png" alt="" width={19}  />
        </div>
      </div>

      <div className="binancedark__content">
        <div className="content__binananceblack">
          <img
            src="/BlackBinance/binanceblack.png"
            alt=""
            width={84}
            height={77}
          />
          <div className="description__binanceblack">Procesando el retiro</div>
          <div className="amount__binanceBlack">
            <div className="binance__amount">{props.amount}</div>
            <div className="binance__currency">USDT</div>
          </div>
        </div>
      </div>
      <div className="binancedark__bottom">
        <div className="bottom__datetime">
          <span className="detaill__one">Hora estimada de finalización:</span>
          <span className="detaill__second">{Dates.datetime()}</span>
        </div>
        <div className="detaill__retiro">
          <span className="retiro">
            Recibirás un correo electrónico cuando se complete el retiro.
          </span>
          <span className="historial">
            Consulta el historial para accedera las últimas novedades.
          </span>
        </div>
        <div className="button__yellow">Ver historial</div>
        <div className="image__b1">

          <img src="/mobile/b3.png" alt="" width={182} />
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default B3;
