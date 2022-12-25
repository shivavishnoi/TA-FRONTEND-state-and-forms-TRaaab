function Modal(props) {
  return (
    <article className="modal">
      <div className="modal-top">
        <h1>Title: {props.details.Title}</h1>
        <span onClick={props.closeModal}>CLOSE</span>
      </div>
      <h3>Director: {props.details.Director}</h3>
      <h3>Released: {props.details.Released}</h3>
      <h4>Actors: {props.details.Actors}</h4>
      <h4>Genre: {props.details.Genre}</h4>
      <h4>Awards: {props.details.Awards}</h4>
      <h4>imdbRating: {props.details.imdbRating}</h4>
      <h4>Rated: {props.details.Rated}</h4>
    </article>
  );
}
export default Modal;
