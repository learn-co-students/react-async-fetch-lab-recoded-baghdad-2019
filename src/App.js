// create your App component here
import React from 'react'
class App extends React.Component {
    state = {
        inSpace:[]
    }
    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(({people}) => this.setState({inSpace:people}))
    }
    render(){
        return(
            <div>
                <h1>People in space:</h1>
               <ul>{this.state.inSpace.map((person,index) =><li key={index}>{person.name}</li>)}</ul>
            </div>
        )
    }
}
export default App