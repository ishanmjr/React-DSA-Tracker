import './Landing.css'
import React from 'react';
const Landing = () => {
    const styles = {
        height : "60vh",
        font : 'Inter',
    }
    const headingStyles = {
        padding : "5%",
        fontWeight : '900'
    }
    const changecolor = () => {
        document.getElementsByClassName("App")[0].classList.toggle("change-back-to-dark");
        document.getElementsByClassName("bm-burger-bars")[0].classList.toggle("change-color-dark-bright");
        document.getElementsByClassName("bm-burger-bars")[1].classList.toggle("change-color-dark-bright");
        document.getElementsByClassName("bm-burger-bars")[2].classList.toggle("change-color-dark-bright");
        let ele = document.getElementsByTagName("h1");
        for(let i=0;i<ele.length;i++){
            ele[i].classList.toggle("change-head-color");
        }
    }
    return (
        <div className="Landing text-center" style={styles}>
            <h1 style={headingStyles}> DSA PROGRESS TRACKER </h1>
            <div id = "toggle-view">
            <div id="toggle1">Bright</div>
            <label class="switch">
            <input type="checkbox" onClick = {changecolor}></input>
            <span class="slider round"></span>
            </label>
            <div id = "toggle1">Dark</div>
            </div>
            {/* <h1>{getCount()} / 180 </h1> */}

            {/* <div className="TopicList">
                <div className="container item">
                    <div className="row">
                        <div className="col">
                            Arrays 
                        </div>
                        <div className="col">
                            Linked List
                        </div>
                        <div className="col">
                            Linked List and Arrays
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            Greedy Algorithm
                        </div>
                        <div className="col">
                            Recursion
                        </div>
                        <div className="col">
                            Recursion and Backtracking
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            Binary Search
                        </div>
                        <div className="col">
                            Trie
                        </div>
                        <div className="col">
                            Stacks and Queues
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            String
                        </div>
                        <div className="col">
                            Binary Tree
                        </div>
                        <div className="col">
                            Binary Tree
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            Graphs
                        </div>
                        <div className="col">
                            Dynamic Programming
                        </div>
                    </div>
                </div>
            </div> */}

        </div>
    )

}
export default Landing;