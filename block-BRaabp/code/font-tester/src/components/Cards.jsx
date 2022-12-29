let styles = [
  'serif',
  'sans-serif',
  'cursive',
  'fantasy',
  'ui-serif',
  'ui-sans-serif',
  'monospace',
  'ui-rounded',
  'math',
  'fangsong',
];
function Cards(props) {
  return (
    <section className="hero">
      {styles.map((style) => {
        return (
          <article className="card">
            <h3>{style}</h3>
            <h5>Generic Font Family</h5>
            <p
              style={{ fontFamily: `${style}`, fontSize: `${props.pixels}px` }}
            >
              {props.text}
            </p>
          </article>
        );
      })}
    </section>
  );
}

export default Cards;
