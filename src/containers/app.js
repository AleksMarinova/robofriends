import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import { setSearchField } from "../actions";
import './app.css';

const mapStateToProps = (state) => {
    return {
        searchfield: state.searchfield
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

const App = (props) => {
    

    const [robots, setRobots] = useState([]);
    const searchfield = props.searchfield;


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users));
    }, [])


    const filteredRobots = robots.filter(robot=>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return (
            !robots.length===0 ?
            ( <h1>Loading...</h1>) :
          (
                <div className="tc">
                   <h1 className='f1'>RoboFriends</h1>
                   <SearchBox searchChange={(e)=>props.onSearchChange(e)}/>
                   <Scroll>
                         <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                         </ErrorBoundary>   
                    </Scroll>
                  
                </div> 
            )
    ) 
    
}

export default connect(mapStateToProps, mapDispatchToProps)(App);




