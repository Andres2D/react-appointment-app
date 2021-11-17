import { Fragment } from 'react'

const Form = () => {
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
                />

                <label>Parent name</label>
                <input 
                    type="text"
                    name="parent"
                    className="u-full-width"
                    placeholder="Parent Name"
                />

                <label>Date</label>
                <input 
                    type="date"
                    name="date"
                    className="u-full-width"
                />

                <label>Time</label>
                <input 
                    type="time"
                    name="time"
                    className="u-full-width"
                />

                <label>Description</label>
                <textarea 
                    className="u-full-width"
                    name="description">
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
