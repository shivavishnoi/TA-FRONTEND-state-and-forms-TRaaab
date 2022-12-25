function Card(props) {
  return (
    <article className="card">
      <img src="../../public/food-img.jpg" width="200px" />
      <div>
        <div className="top-sec">
          <span>{props.details.title.toUpperCase()}</span>
          <span>{props.details.price + '$'}</span>
        </div>
        <hr />
        <p>{props.details.desc}</p>
      </div>
    </article>
  );
}

export default Card;
