// create your App component here
import React from 'react'
class App extends React.Component{  
    constructor(){
        super()
        this.state={
            peopleInSpace:[]
        }
    }
   
    render(){
        return (
            <div>
                 {this.state.peopleInSpace.map((e,id)=><h1 key={id}>{e.name}</h1>)}
            </div>
        )
    }
     componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(response=>response.json())
        .then(({people}) => this.setState({ peopleInSpace: people }))
    }     
}
export default App