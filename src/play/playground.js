

let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
}
const minusOne = () => {
  count --;
    renderCounterApp();
}
const reset = () => {
  count = 0;
    renderCounterApp();
}
const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateThree = (
    <div>
    <h1> Count: {count} </h1>
    <button id='myId' onClick = {addOne}>+1</button>
      <button id='myId' onClick = {minusOne}>-1</button>
        <button id='myId' onClick = {reset}>reset</button>
    </div>

  );

  ReactDOM.render(templateThree,appRoot);
}
renderCounterApp();
