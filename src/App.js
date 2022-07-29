import React, { Component } from 'react'

export class App extends Component {
    constructor(props){
        super(props);
        this.state = { title : [] }
        console.log("1");
    }

    componentDidMount(){

        fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response)=>response.json())
        .then((users)=> this.setState( ()=>{return { title : users };},
        ()=>{console.log(this.state);}))
        
console.log('2');
    }

  render() {
    console.log('3');
    return (
      <div>

{this.state.title.map((element)=> <h1>id is : {element.id} and also url is :{element.thumbnailUrl}</h1> )}

      </div>
    )
  }
}

export default App