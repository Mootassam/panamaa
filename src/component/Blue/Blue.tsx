import React from 'react'
import './blue.css'
import Dates from '../../shared/dates';
import { IoIosWifi } from 'react-icons/io';
function Blue(props) {
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
    <div className="div">
    <div className="div-2">
      <div className="div-3">
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
              <div className="binance__level" style={{ width: `${limit}%`, background: CheckstatusBattery(), }}></div>
              <span>{limit}</span>
            </div>
            <div className="binance__border"></div>
          </div>
        </div>
      </div>
      <div style={{marginTop:30 , marginBottom:43}}>
        <img src="/blue/left.png" alt="" style={{width:18}} />
      </div>
        <div className="btc-btc-deposit">BTC (BTC) Deposit</div>
        <div className="processed">Processed</div>
        <div className="jul-21-2024-at-3-06-12-am">
          Jul 21, 2024 at 3:06:12 AM
        </div>
      </div>
      <div className="div-5">
        <div className="div-6">
          <div className='plus'>+</div>
          <div className="time1">0.00712756</div>
          <div className="btc">BTC</div>
        </div>
        <div className="time2">+${props.amount} USD</div>
        <div className="deposit-details">Deposit details</div>
        <div className="div-7" />
        <div className="div-8">
          <div className="div-9">
            <div>Deposit from</div>
          </div>
          <div className="div-10">
            <div className="bc-1-qwzn-9056-khjlf-4-ws-6-ln-7-j-7-yu">
              bc1qwzn9056khjlf4ws6ln7j7yu
              tuzp6xv8vuxz9jy
            </div>
          </div>
        </div>
        <div className="div-8" style={{marginTop:14}}>
          <div className="div-99">
            <div className="network-type">Network Type</div>
          </div>
          <div className="div-10">
            <div className="bitcoin1">Bitcoin</div>
          </div>
        </div>
        <div className="div-11" />
      </div>
    </div>
  </div>
  
  )
}

export default Blue