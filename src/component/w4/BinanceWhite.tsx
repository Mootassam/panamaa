import React from "react";
import "./BinanceWhite.css";
import Dates from "../../shared/dates";
function W4(props) {
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
      background = "#000";
    }

    return background;
  };
  return (
    <div className="binance__white">
      <div className="binance__whiteheader">
        <div className="whiteheader__time">
          <span>{Dates.currentTime()}</span>
        </div>
        <div className="rightbinance__white">
          <div className="signal__whitebinance">
            <div className="whitesignal__1"></div>
            <div className="whitesignal__2"></div>
            <div className="whitesignal__3"></div>
            <div className="whitesignal__4"></div>
          </div>
          <div className="lte__binance">LTE</div>
          <div className="lte__battery">
            <div className="lte__cover">
              <div
                className="lte__level"
                style={{ width: `${limit}%`, background: CheckstatusBattery() }}
              ></div>
            </div>
            <div className="binance__border"></div>
          </div>
        </div>
      </div>

      <div className="whitebinance__subheader">
        <img src="/whiteBinance/back.png" alt="" width={18} />
      </div>
      <div className="whitebinance__content">
        <div className="logo__binancewhite">
          <img src="/whiteBinance/logo.png" alt="" width={90} />
        </div>
        <div className="binancewhite__withdraw">Withdrawal Processing</div>

        <div className="binancewhite__amount">{props.amount} USDT</div>
      </div>

      <div className="whitebinance__bottom">
        <div className="detaill__button">
          <span className="estimated">Estimated completion time</span>
          <span className="date__white">2023-09-11 7:07:20 p. m..</span>
        </div>
        <div className="receive__email">
          You will receive an email once withdrawal is completed....
        </div>
        <div className="whitebinance__button __margin__bottom">
          <div className="button__text">View History</div>
        </div>
        <div className="white__w1">
          <img src="/mobile/w4.png" alt="" width={194} />
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default W4;
