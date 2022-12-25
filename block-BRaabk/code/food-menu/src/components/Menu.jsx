import React from 'react';
import data from '../../../data.json';
import Card from './Card';
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: null,
    };
  }

  render() {
    let category = [...new Set(data.map((elm) => elm.category))];
    category.unshift('All');
    let all;
    if (this.state.category == null || this.state.category == 'all') {
      all = data.map((item, i) => <Card details={item} key={i} />);
    } else {
      all = data
        .filter((elm) => this.state.category == elm.category)
        .map((item, i) => <Card details={item} key={i} />);
    }
    return (
      <>
        <ul>
          {category.map((elm, i) => {
            return (
              <li
                key={i}
                onClick={(e) => {
                  this.setState({
                    category: e.target.innerText.toLowerCase(),
                  });
                }}
              >
                {elm.toUpperCase()}
              </li>
            );
          })}
        </ul>
        <div className="all-cards">{all}</div>
      </>
    );
  }
}
export default Menu;
