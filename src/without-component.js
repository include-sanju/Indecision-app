console.log('app.js is running')
//jsx
let app = {
  title : 'Indecision app',
  subtitle : 'Put your life in the hands of a computer',
  options : []
};
const removeAll = () => {
  app.options = [];
  renderForm();
}
const onFormSubmit = (e) =>{
  e.preventDefault();
  const name = e.target.elements.fullName.value;

  if(name){
    app.options.push(name);
    e.target.elements.fullName.value = '';
    renderForm();

  }

}
const makeDecision = ()=>{
  const randomNumber = Math.floor(Math.random()*app.options.length);
  alert(app.options[randomNumber]);
}
const appRoot = document.getElementById('app');
const renderForm = () => {
  const template = (
    <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle && app.subtitle + '!'} </p>

    <button disabled={app.options.length === 0} onClick = {makeDecision}> What should I do? </button>
    <button onClick ={removeAll}> remove all </button>
    <form onSubmit = {onFormSubmit}>
    <input type="text" name="fullName"/>
    <button> enter name </button>
    </form>
    <ol>
    {
      app.options.map((option) => {
        return <li key={option}> {option} </li>
      })
    }
    </ol>
    </div>
  );

  ReactDOM.render(template, appRoot);

}
renderForm();

/*let user = {
  name : 'Andrew',
  age : 22,
  location: 'New York'
};
function getLocation(loc){
  if(loc)
    return 'Location: ' + loc;
  else
  return undefined;
}
const templateTwo = (
  <div>
  <h1>{user.name ? user.name : 'Anonymous'}</h1>
  <p>{getLocation(user.location)}</p>
  {user.age>18 && <p>age : {user.age}</p>}
 </div>

)*/
