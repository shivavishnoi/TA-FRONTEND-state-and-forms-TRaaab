function People(props) {
  return (
    <section className="cards">
      {props.everyone.map((person) => {
        return (
          <article key={person.name}>
            <img src={person.image} />
            <h3>{person.name}</h3>
            <p>{person.description}</p>
            <button>
              <a href={person.wikiLink}>Know More</a>
            </button>
          </article>
        );
      })}
    </section>
  );
}
export default People;
