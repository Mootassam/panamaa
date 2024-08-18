import React from "react";
import "./DetaillBinance.css";
import Dates from "../../shared/dates";
import Left from "../../shared/icons/Left";
import Names from "../../shared/Names";
import { BsWifi } from "react-icons/bs";
function DetaillBinance(props) {
  const limit = Math.floor(Math.random() * (100 - 6 + 1)) + 6;

  return (
    <div className="detaill__binance">
      <div className="detaill__header">
        <div className="detaill__left">
          <div className="detaill__signal">
            <img
              src="/mobile/lte.png"
              alt=""
              className="lte__image"
              width={11}
            />
            <div className="signal__detaill">
              <div className="detaill__signal1"></div>
              <div className="detaill__signal2"></div>
              <div className="detaill__signal3"></div>
              <div className="detaill__signal4"></div>
              <div className="detaill__signal5"> </div>
            </div>
          </div>

          <Left />
        </div>
        <div className="detaill__right">

          <BsWifi size={15}  color="white"/>
          <div className="detaill__battery">
            <div className="binancedetaill__cover">
              <div
                className="level__cover"
                style={{ width: `${limit}%` }}
              ></div>
            </div>
            <div className="binancedetaill__border"> </div>
          </div>
          <span className="detaill__time">{Dates.currentTime()}</span>
        </div>
      </div>
      <div className="detaill__subheader">
        <div>
          <img src="/DetaillBinance/back.png" alt="" width={20} />
        </div>
        <div className="title__subheader">Withdrawal Detail</div>
        <div>
          <img src="/DetaillBinance/logout.png" alt="" width={14} />
        </div>
      </div>
      <div className="detaillbinance__content">
        <div className="detaillbinance__amount">
          <div className="monto">Amount</div>
          <div className="binances__amount">
            <div className="amount__">{props.amount}</div>
            <div className="currency">USDT</div>
          </div>
        </div>
        <div className="detaillbinance__completed">
          <div>
            <img src="/DetaillBinance/completed.png" alt="" width={13} />
          </div>
          <div className="completed__text">Completed</div>
        </div>

        <div className="detaill__completed">
          <span>Cryptocurrencies transferred from Binance. Contact</span>
          <span>
          the recipient's platform to obtain the receipt of the
          </span>
          <span>transaction.</span>
        </div>
        <div className="detaill__yellow">Why hasn't my withdrawal arrived?</div>
        <div className="bar">
          <img src="/DetaillBinance/bar.png" alt="" />
        </div>
      </div>
      <div className="other__detail">
        <div>
          <div className="other__left">Confirmations</div>
          <div className="other__first"> 30 / 1</div>
        </div>
        <div className="red__space">
          <div className="other__left">Grid</div>
          <div className="other__first">TRX</div>
        </div>
        <div className="retiro__space">
          <div className="other__left">Retirement Wallet</div>
          <div className="other__second">Funds wallet</div>
        </div>
        <div className="direcion__space">
          <div className="other__left">Address</div>
          <div className="direction__row">
            <div className="direction__column">
              <span>TVKMGh1QR6onCmTPu1YmCn</span>
              <span>HK4c3CLgZ×W6</span>
              <label htmlFor="">Save address</label>
            </div>
            <div>
              <img src="/DetaillBinance/copy.png" alt="" width={16} />
            </div>
          </div>
        </div>
        <div className="txid__space">
          <div className="other__left">Txid</div>
          <div className="txid__detail">
            <div className="txid__left">
              <span>{Names.generateRandomString()}</span>
              <span>{Names.generateRandomString()}</span>
              <span>{Names.generateRandomString10()}</span>
            </div>
            <div className="txid__right">
              <img src="/DetaillBinance/copy.png" alt="" width={16} />
            </div>
          </div>
        </div>
        <div className="red__space">
          <div className="other__left">Network Commission</div>
          <div className="usdt__class">1 USDT</div>
        </div>
        <div className="date__space">
          <div className="other__left">Date</div>
          <div className="date__">{Dates.datetime()}</div>
        </div>
      </div>
      <div className="down__box">
        <div>
          <img src="/DetaillBinance/logo.png" alt="" width={27} />
        </div>
        <div className="box__detail">
          <span>Enable one-step withdrawal to withdraw</span>
          <span>easily to the addresses included in the</span>
          <span>white list</span>
        </div>
        <div>
          <img src="/DetaillBinance/next.png" alt="" width={12} />
        </div>
      </div>
      <div className="detaill__footer">
        <img src="/DetaillBinance/mobile.png" alt="" width={168} />
      </div>
    </div>
  );
}

export default DetaillBinance;
