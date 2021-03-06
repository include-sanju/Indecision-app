
class IndecisionApp extends React.Component{
  constructor(props){
    super(props);
    this.removeAll = this.removeAll.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleRemoveOption = this.handleRemoveOption.bind(this);
    this.state = {
      options : []
    }
  }
  componentDidMount(){
    try {
    const json = localStorage.getItem('options');
    const options = JSON.parse(json);

    if(options){
    this.setState(()=>({ options }));
    }
  }
    catch(e){

      }
    }

  componentDidUpdate(prevProps,prevState){
    if(this.state.options.length !== prevState.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options',json);
    }
  }
  handleRemoveOption(optionToRemove){
    this.setState((prevState)=> ({
     options : prevState.options.filter((option)=> optionToRemove !== option)
   }));
  }
  removeAll(){
    this.setState(()=>({ options : []}));
  }
  handleClick(){
    const randomNumber = Math.floor(Math.random()*this.state.options.length);
    alert(this.state.options[randomNumber]);
  }
  handleAddOption(option){
    if(!option){
      return 'enter valid option ';
    }
    else if (this.state.options.indexOf(option)>-1) {
      return 'option already exists';
    }
    this.setState((prevState)=>({options : prevState.options.concat(option)}));
  }
  render(){
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer!';

    return (
      <div>
      <Header  subtitle={subtitle}/>
      <Action options={this.state.options}
        handleClick={this.handleClick}
        hasOptions={this.state.options.length>0}
      />
      <Options
      options={this.state.options}
      handleRemoveAll = {this.removeAll}
      handleRemoveOption = {this.handleRemoveOption}
      />
      <AddOption
      handleAddOption = {this.handleAddOption} />
      </div>
    );
  }
}

const Header = (props) =>{
  return (<div>

        <h1>{props.title}</h1>
        <h2> {props.subtitle}</h2>
        </div>);
}

Header.defaultProps = {
  title : 'Indecision'
};

const Action = (props) =>{
  return (
    <div>
    <button disabled={!props.hasOptions}
    onClick={props.handleClick}> What should I do? </button>
    </div>);
}


const Options = (props) => {
  return (<div>
  <button onClick={props.handleRemoveAll}>remove all </button>
  {props.options.length===0 && <p> Please add an option to get started!</p>}
  {

    props.options.map((option) => {
      return <div key={option}>
      <Option key={option}
      handleRemoveOption={props.handleRemoveOption}
       optionText={option} />
       </div>
    })
  }
  </div>);
}

const Option = (props) =>{
  return (
    <div>
    {props.optionText}
    <button onClick={(e)=>{props.handleRemoveOption(props.optionText)}}>remove</button>
    </div>);
}



class AddOption extends React.Component{
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error : undefined
    }
  }
  handleAddOption(e){
    e.preventDefault();
    const op=e.target.elements.option.value.trim();

    const error = this.props.handleAddOption(op);
      this.setState(()=>({error}));
      if(!error){
        e.target.elements.option.value='';
      }


  }
  render(){
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p>}
      <form onSubmit={this.handleAddOption}>
      <input type="text" name="option"/>
      <button> Add option</button>
        </form>
      </div>);
  }
}
ReactDOM.render(<IndecisionApp  options={['yo']}/>,document.getElementById('app'));
