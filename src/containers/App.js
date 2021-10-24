import React, {Component} from 'react';
import "./app.css"
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from "../components/Scroll.js";
import ErrorBoundary from  "../components/ErrorBoundary.js";


class App extends Component {
  constructor(){
    super();
    this.state = {
      robots: [],
      searchfield: ""
    }
  }

  onSearchChange = (event) => {
    this.setState({
      searchfield: event.target.value
    })
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response => {
      return response.json()
    })
    .then(users => {
      this.setState({robots: users})
    })
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return (robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()))
    })
    return (
      <div className="tc">
        <h1 className="f1" >ROBOFRIENDS</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots}/>
          </ErrorBoundary>
        </Scroll>
      </div>
    )
  }
}


export default App
