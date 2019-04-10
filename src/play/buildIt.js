const appRoot = document.getElementById('app');

class VisibilityToggle extends React.Component{
  constructor(props){
    super(props);
    this.clicked = this.clicked.bind(this);
    this.state = {
      visibility : false
    };

  }
clicked (){

    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
});
 console.log(this.state.visibility);
}

  render(){
    return (
      <div>
      <h1>Visibility Toggle</h1>
      <button onClick={this.clicked}> { this.state.visibility ? 'Hide details':'Show details'} </button>
           { this.state.visibility &&
(           <p> 'Here are the details!' </p>)}
      </div>
    );
  }
}



  ReactDOM.render(<VisibilityToggle />,appRoot);
