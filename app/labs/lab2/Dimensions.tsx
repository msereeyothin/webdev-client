export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        <div id="wd-ai-dimension" className="wd-ai-dimension">
          This box is declared 120 by 60 pixels, so a long sentence like this
          one cannot make it any bigger
        </div>
        <div className="wd-dimension-wide wd-bg-color-green wd-fg-color-white">
          HelloHelloHelloHelloHelloHelloHelloHelloHello
        </div>
      </div>
    </div>
  );
}
