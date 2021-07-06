import React from 'react'
import './Form.css'

const Form = ({ userinput, click }) => {
    return (
        <div className="form">
            <div className="row1">My Daily Nutrition Requirement</div>
            <div className="row2"><input className="input" type="number" placeholder="  Enter Your Age" onChange={(e) => userinput(e, "age")} /></div>
            <div className="row3"><input className="input" type="number" placeholder="  Enter Your Weight in Pounds" onChange={(e) => userinput(e, "weight")} /></div>
            <div className="row4"><input className="input" type="number" placeholder="  Enter Your Height in cm" onChange={(e) => userinput(e, "height")} /></div>
            <div className="row5">
                <input type="radio" name="gender" value="male" onChange={(e) => userinput(e, "gender")} />
                <label for="html">Male </label>
                <input type="radio" name="gender" value="female" onChange={(e) => userinput(e, "gender")} />
                <label for="html">Female </label>

            </div>
            <div className="row6">
                <input className="button" type="button" value="Submit" onClick={(e) => click(e)} />
            </div>


        </div>
    )
}

export default Form
