import React, { useEffect } from "react";
import { connect } from 'react-redux';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import { setSearchField, requestRobots } from "../actions";
import './app.css';

const mapStateToProps = (state) => {
    return {
        searchfield: state.searchRobots.searchfield,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

const App = (props) => {

    const robots = props.robots;
    const searchfield = props.searchfield;

    useEffect(() => {
        props.onRequestRobots();
    }, []);


    const filteredRobots = robots.filter(robot=>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return (
            props.isPending ?
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




