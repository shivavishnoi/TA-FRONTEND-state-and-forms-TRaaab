import React from 'react';

class Cards extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let data = this.props;
    return (
      <div className="card">
        <h3>{data.item.Title}</h3>
        <img src={data.item.Images[0]} alt={data.item.Title} width="350px" />
        <span>Released On: {data.item.Released}</span>
      </div>
    );
  }
}

// function Cards(props) {
//   return (
//     <div className="card">
//       <h3>{props.item.Title}</h3>
//       <img src={props.item.Images[0]} alt={props.item.Title} width="350px" />
//       <span>Released On: {props.item.Released}</span>
//     </div>
//   );
// }
export default Cards;
