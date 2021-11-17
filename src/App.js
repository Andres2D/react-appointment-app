import { Fragment, useState } from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';

function App() {
  
  // Appointments arr
  const [appointments, saveAppointments] = useState([]);

  // Function to get the current appointments and add a new one
  const createAppointment = appointment => {
    saveAppointments([
      ...appointments,
      appointment
    ]);
  }
  
  return (
    <Fragment>
      <h1>Admin appointments</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form
              createAppointment={createAppointment} />
          </div>
          <div className="one-half column">
            <h2>Appointments</h2>  
            {appointments.map(appointment => (
              <Appointment 
                key={appointment.id}
                appointment={appointment}
              />
            ))}
          </div>
        </div>
      </div> 
    </Fragment>
  );
}

export default App;
