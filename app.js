class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>{this.props.list}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.lists.map(list => <GroceryListItem list={list}/>)}
  </ul>
);

var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList lists={['Peanut Butter', 'Jelly', 'Bread']}/>
  </div>
);

ReactDOM.render(<App/>, document.getElementById('app'));