import { useRef, useState, useEffect } from "react";
import "./App.css";
import Header from "./layout/Header";
import Sidebar from "./layout/sidebar/Sidebar";
import Screenshot from "./shared/Screenshot";
import { DrawingApp } from "./shared/DrawingApp";
import BinanceDark from "./component/BinanceDark/BinanceDark";
import BinanceWhite from "./component/BinanceWhite/BinanceWhite";
import DetaillBinance from "./component/DetaillBinance/DetaillBinance";
import B1 from "./component/b1/BinanceDark";
import B2 from "./component/b2/BinanceDark";
import W1 from "./component/w1/BinanceWhite";
import W2 from "./component/w2/BinanceWhite";
import W3 from "./component/w3/BinanceWhite";
import Detalles from "./component/Detalles/Detalles";
import Detalles2 from "./component/Detalles2/Detalles";
import DetaillBinance2 from "./component/DetaillBinance2/DetaillBinance";

function App() {
  const divRef = useRef<HTMLDivElement>(null);
  const handleCaptureScreenshot = () => {
    Screenshot.handleCaptureScreenshot(divRef);
  };
  const [value, setValue] = useState("bdark");
  const [amount, setAmount] = useState(100);
  const [size, setSize] = useState("small");
  const [
    { cursor, canvasRef, color },
    { startDrawing, draw, endDrawing, ...api },
  ] = DrawingApp();
  const toolbarProps = { color, ...api };
  return (
    <>
      <Header />
      <div className="app__content">
        <Sidebar
          screenshot={handleCaptureScreenshot}
          value={value}
          setvalue={setValue}
          setAmount={setAmount}
          setSize={setSize}
          size={value}
          {...toolbarProps}
        />
        <div className="content" ref={divRef}>
          <div className="app__canvas">
            {value === "completed" ? (
              <canvas
                ref={canvasRef as any}
                width={470}
                height={801}
                style={{ cursor }}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={endDrawing}
              />
            ) : value === "green" ? (
              <canvas
                ref={canvasRef as any}
                width={440}
                height={820}
                style={{ cursor }}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={endDrawing}
              />
            ) : value === "large" ? (
              <canvas
                ref={canvasRef as any}
                width={671}
                height={820}
                style={{ cursor }}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={endDrawing}
              />
            ) : (
              // Default condition if neither "completed" nor "incomplete" is true
              <canvas
                ref={canvasRef as any}
                width={400}
                height={800}
                style={{ cursor }}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={endDrawing}
              />
            )}
          </div>
          {value === "bdark" && <BinanceDark amount={amount} />}
          {value === "bwhite" && <BinanceWhite amount={amount} />}
          {value === "detaillBinance" && <DetaillBinance amount={amount} />}
          {value === "b1" && <B1 amount={amount} />}
          {value === "b2" && <B2 amount={amount} />}
          {value === "w1" && <W1 amount={amount} />}
          {value === "w2" && <W2 amount={amount} />}
          {value === "w3" && <W3 amount={amount} />}
          {value === "detalles" && <Detalles amount={amount} />}
          {value === "detalles2" && <Detalles2 amount={amount} />}
          {value === "detaillBinance2" && <DetaillBinance2 amount={amount} />}

  
        </div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default App;
