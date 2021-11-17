import React from 'react';

const Appointment = ({appointment, deleteAppointment}) => (
    <div className="cita">
        <p>Pet: <span>{appointment.pet}</span></p>
        <p>Parent: <span>{appointment.parent}</span></p>
        <p>Date: <span>{appointment.date}</span></p>
        <p>Time: <span>{appointment.time}</span></p>
        <p>Description: <span>{appointment.description}</span></p>

        <button
            className="button eliminar u-full-width"
            onClick={() =>  deleteAppointment(appointment.id)}
        >Delete &times;</button>
    </div>
);

export default Appointment;
