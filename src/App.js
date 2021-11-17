import { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';

function App() {

  // Appointments on localstorage
  let initialsAppointments = JSON.parse(localStorage.getItem('appointments'));

  if(!initialsAppointments) {
    initialsAppointments = [];
  }
  
  // Appointments arr
  const [appointments, saveAppointments] = useState(initialsAppointments);

  // Use effect to make operations when the state change
  useEffect( () => {
    console.log(appointments);
    localStorage.setItem('appointments', JSON.stringify(appointments)); 
  }, [appointments]);

  // Function to get the current appointments and add a new one
  const createAppointment = appointment => {
    saveAppointments([
      ...appointments,
      appointment
    ]);
  }

  // Delete appointment by id
  const deleteAppointment = id => {
    const newAppointments = appointments.filter(a => a.id !== id);
    saveAppointments(newAppointments);
  }

  // Message conditional
  const title = appointments.length === 0 ? 'Empty' : 'Appointments'; 
  
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
            <h2>{title}</h2>  
            {appointments.map(appointment => (
              <Appointment 
                key={appointment.id}
                appointment={appointment}
                deleteAppointment={deleteAppointment}
              />
            ))}
          </div>
        </div>
      </div> 
    </Fragment>
  );
}

export default App;
