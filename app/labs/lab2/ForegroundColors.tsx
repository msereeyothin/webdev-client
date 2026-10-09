export default function ForegroundColors() {
  return (
    <div id="wd-css-colors">
      <h2>Colors</h2>
      <h3 className="wd-fg-color-blue">Foreground color</h3>
      <p className="wd-fg-color-red">
        The text in this paragraph is red but{" "}
        <span className="wd-fg-color-green">this text is green</span>
      </p>
      <p id="wd-ai-fg" className="wd-fg-color-blue">
        A nested span can override the color it inherits,{" "}
        <span className="wd-fg-color-black">so this part is black</span>
      </p>
      <p className="wd-fg-color-blue">
        Hello my words are blue
        <span className="wd-fg-color-red">Goodbye these words are in  red</span>
      </p>
    </div>
  );
}
