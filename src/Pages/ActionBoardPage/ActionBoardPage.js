import React from "react";
import "./ActionBoardPage.css";
import actionboard from "../../Assets/actionboard.png"

function ActionBoardPage(){
    return(
        <div className="opacity">
        <section className="action-board-outer">
            <div className="action-board-inner">
            <div className='action-board-text'>
                <h2>Experience the dynamics of real-time strategy in the comfort of your own home</h2>
                <h3>Plan your builds & blitz moves in secret and outmaneuver your enemies</h3>
            </div>
                <img className="action-board" src={actionboard}/>
            </div>
        </section>
        </div>

    )
}

export default ActionBoardPage;