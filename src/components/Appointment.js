import React from 'react';

const Appointment = ({appointment}) => (
    <div className="cita">
        <p>Pet: <span>{appointment.pet}</span></p>
        <p>Parent: <span>{appointment.parent}</span></p>
        <p>Date: <span>{appointment.date}</span></p>
        <p>Time: <span>{appointment.time}</span></p>
        <p>Description: <span>{appointment.description}</span></p>
    </div>
);

export default Appointment;
