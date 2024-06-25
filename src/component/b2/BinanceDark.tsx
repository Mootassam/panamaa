import React from "react";
import "./Bdark.css";
import { IoIosWifi } from "react-icons/io";
import Dates from "../../shared/dates";
import Left from "../../shared/icons/Left";
import {BsAlarm} from 'react-icons/bs'
function B2(props) {
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
        <div className="modeheader__left __b2">
          <div className="signal__">
          <div className="b2_signal">
            <div className="signal__b1"></div>
            <div className="signal__b2"></div>
            <div className="signal__b3"></div>
            <div className="signal__b4"></div>
          </div>
          <div className="modeheader__left __b2">
          <div className="b2_signal">
            <div className="signal__b1"></div>
            <div className="signal__b2"></div>
            <div className="signal__b3"></div>
            <div className="signal__b4"></div>
          </div>
          </div>
        </div>
        <Left />
        </div>
        
        <div className="modeheader__right __b2">

          <BsAlarm size={12} />
          <div className="b2__globalbattery">
            <div className="b2__battery">
              <div className="b2__cover">
                <div className="b2__level" style={{width:`${limit}%`}}></div>
              </div>
              <div className="b2__border"> </div>
            </div>
            <span className="b2__number">{Dates.currentTime()}</span>
          </div>
        </div>
      </div>

      <div className="binance__subheader">
        <div className="back__binance">
          <img src="/BlackBinance/back.png" alt="" width={19} />
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
export default B2;
