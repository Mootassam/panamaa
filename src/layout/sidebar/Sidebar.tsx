import React, { useEffect } from "react";
import "./sidebar.css";
import optionBank from "../../data/OptionBank";
import { FaEraser, FaUndo } from "react-icons/fa";
function Sidebar({
  screenshot,
  value,
  setvalue,
  setAmount,
  setSize,
  size,
  undo,
  erase,
  color,
  changeColor,
  brushSize,
  changeBrushSize,
  clear,
}) {
  useEffect(() => {
    let data;
  }, [value]);

  return (
    <div className="app__sidebar">
      <div className="sidebar__form">
        <div className="form__group">
          <label htmlFor=""> 选择银行</label>
          <select
            name="bank"
            className="app__select"
            onChange={(e) => setvalue(e.target.value)}
          >
            {optionBank.map((item) => (
              <option value={item.value}>{item.name} </option>
            ))}
          </select>
        </div>
        {value === "800" && (
          <div className="form__group">
            <label htmlFor=""> Select Size</label>
            <select
              name="bank"
              className="app__select"
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="small">Small</option>
              <option value="large">Large</option>
            </select>
          </div>
        )}
        <div className="form__group">
          <label htmlFor=""> 写下金额</label>
          <input onChange={(e) => setAmount(e.target.value)}></input>
        </div>
        <div className="form__group">
          <label htmlFor="">工具</label>
          <div className="app__tools">
            <input
              type="color"
              value={color}
              onChange={changeColor}
              className="btn--color"
            />
            <button className="undo" onClick={undo}>
              <FaUndo />
            </button>
            <button onClick={erase} className="erase__button">
              <FaEraser />
            </button>
          </div>
        </div>
        <div className="form__group">
          <label htmlFor="">刷子大小</label>
          <input
            type="range"
            min="1"
            max="70"
            value={brushSize}
            onChange={changeBrushSize}
          />
          <button onClick={clear} className="clear__button">
            Clear
          </button>
        </div>
      </div>
      <div className="app__screenshot" onClick={() => screenshot()}>
        <img src="sidebar/screenshot.png" alt="" width={140} />
      </div>
    </div>
  );
}

export default Sidebar;
