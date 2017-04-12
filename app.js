// var TodoList = (props) => {

//   // This function will be called when the first `<li>` below is clicked on
//   // Notice that event handling functions receive an `event` object
//   // We want to define it where it has access to `props`

//   var onListItemClick = (event) => {
//     console.log('I got clicked');
//   };

//   // Because we used curly braces with this arrow function
//   // we have to write an explicit `return` statement
//   return (
//     <ul>
//       <li onClick={onListItemClick}>{props.todos[0]}</li>
//       <li>{props.todos[1]}</li>
//       <li>{props.todos[2]}</li>
//     </ul>
//   );
// }

// var App = () => (
//   <div>
//     <h2>My Todo List</h2>
//     <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/> // Here we are creating an instance of the `TodoList` component
//   </div>
// );

// ReactDOM.render(<App />, document.getElementById('app'));

var GroceryListItem = (props) => {
  var onListItemClick = (event) => {
    console.log('I got clicked');
  };
  return (
    <ul>
      <li onClick={onListItemClick}>{props.list[0]}</li>
      <li>{props.list[1]}</li>
      <li>{props.list[2]}</li>
    </ul>
  );
};

var GroceryList = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryListItem list={['Peanut Butter', 'Jelly', 'Bread']}/>
  </div>
);

ReactDOM.render(<GroceryList />, document.getElementById('app'));