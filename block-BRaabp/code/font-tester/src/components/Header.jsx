function Header(props) {
  return (
    <div className="header">
      <input
        onChange={props.handleText}
        type="text"
        placeholder="Enter text here..."
        value={props.text}
      />
      <span className="bar">
        <input
          onChange={props.handlePixels}
          type="range"
          min="12"
          max="45"
          value={props.pixels}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;{props.pixels + 'px'}
      </span>
    </div>
  );
}
export default Header;
