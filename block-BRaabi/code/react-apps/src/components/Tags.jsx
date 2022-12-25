import React from 'react';
import { data } from '../data';
import People from './People';
class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeHouse: '',
    };
  }
  handleClick = (house) => {
    this.setState({
      activeHouse: house,
    });
  };
  render() {
    let houseNames = data.houses.map((house) => house.name);
    let everyone;
    if (!this.state.activeHouse) {
      everyone = data.houses.reduce((acc, cv) => {
        acc = acc.concat(cv.people);
        return acc;
      }, []);
    } else {
      everyone = data.houses.find((house) => {
        return house.name === this.state.activeHouse;
      }).people;
    }
    return (
      <>
        <ul className="tags">
          {houseNames.map((house) => {
            return (
              <li
                key={house}
                onClick={() => this.handleClick(house)}
                className={this.state.activeHouse == house ? 'active' : ''}
              >
                {house}
              </li>
            );
          })}
        </ul>
        <People everyone={everyone} />
      </>
    );
  }
}

export default Tags;
