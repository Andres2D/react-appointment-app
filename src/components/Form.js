import { Fragment, useState } from 'react';
import {v4 as uuid} from 'uuid'; 

const Form = () => {

    // Create state of appointments
    const [appointment, updateAppointment] = useState({
        pet: '',
        parent: '',
        date: '',
        time: '',
        description: ''
    });

    const [error, updateError] = useState(false);

    // Function on change input
    const updateState = ({target}) => {
        updateAppointment({
            ...appointment,
            [target.name] : target.value
        });
    }

    // Extract the values
    const {pet, parent, date, time, description } = appointment;

    // Send form
    const submitAppointment = event => {
        event.preventDefault();
        
        // validate
        if(pet.trim() === '' || parent.trim() === '' || date.trim() === '' 
        || time.trim() === '' || description.trim() === '') {
            console.log('Invalid pet');
            updateError(true);
            return;
        }

        // Disable error alert
        updateError(false);

        // asign Id
        appointment.id = uuid();
        console.log(appointment);

        // create appointment

        // restart form
    }

    return ( 
        <Fragment>
            <h2>Create appointment</h2>  
            { error ? <p className="alerta-error">All fields are required</p> : null}
            <form
                onSubmit={submitAppointment}>
                <label>Pet's name</label>
                <input 
                    type="text"
                    name="pet"
                    className="u-full-width"
                    placeholder="Pet's Name"
                    onChange={updateState}
                    value={pet}
                />

                <label>Parent name</label>
                <input 
                    type="text"
                    name="parent"
                    className="u-full-width"
                    placeholder="Parent Name"
                    onChange={updateState}
                    value={parent}
                />

                <label>Date</label>
                <input 
                    type="date"
                    name="date"
                    className="u-full-width"
                    onChange={updateState}
                    value={date}
                />

                <label>Time</label>
                <input 
                    type="time"
                    name="time"
                    className="u-full-width"
                    onChange={updateState}
                    value={time}
                />

                <label>Description</label>
                <textarea 
                    className="u-full-width"
                    name="description"
                    onChange={updateState}
                    value={description}>
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
