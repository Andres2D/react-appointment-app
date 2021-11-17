import { Fragment, useState } from 'react'

const Form = () => {

    // Create state of appointments
    const [appointment, updateAppointment] = useState({
        pet: '',
        parent: '',
        date: '',
        time: '',
        description: ''
    });


    // Function on change input
    const updateState = () => {
        console.log('writing');
    }

    return ( 
        <Fragment>
            <h2>Create appointment</h2>  

            <form>
                <label>Pet's name</label>
                <input 
                    type="text"
                    name="pet"
                    className="u-full-width"
                    placeholder="Pet's Name"
                    onChange={updateState}
                />

                <label>Parent name</label>
                <input 
                    type="text"
                    name="parent"
                    className="u-full-width"
                    placeholder="Parent Name"
                    onChange={updateState}
                />

                <label>Date</label>
                <input 
                    type="date"
                    name="date"
                    className="u-full-width"
                    onChange={updateState}
                />

                <label>Time</label>
                <input 
                    type="time"
                    name="time"
                    className="u-full-width"
                    onChange={updateState}
                />

                <label>Description</label>
                <textarea 
                    className="u-full-width"
                    name="description"
                    onChange={updateState}>
                </textarea>

                <button 
                    type="submit"
                    className="u-full-width button-primary">
                        Add appointment
                </button>  
            </form>    
        </Fragment>
     );
}
 
export default Form;
