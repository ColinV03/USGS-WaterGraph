import React, {useState} from 'react';

export default function Input() {
    //react hooks to store individual data from userfield 
    const [targetPoint, setTargetPoint] = useState()
    
    
    const handleSubmit = (e) => {
        //prevent reloading of the page
        e.preventDefault();

        //data validation: must be filled. 
        if (targetPoint === null || targetPoint === undefined) {
            alert("Please Enter a value")
        } else {
            console.log(`Submitting value ${targetPoint}`)
        }
        // reset();
    }
    
    return (
        
        <div>
            <form onSubmit={handleSubmit}>
                <label>Please provide the sample point:</label>
                <br></br>
                <input type="text" placeholder="Please Enter Code" value={targetPoint} onChange={e => setTargetPoint(e.target.value)}/>
                <button type="submit"value="Submit"> Enter</button>
            </form>
        </div>


    )


}
