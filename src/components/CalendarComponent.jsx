import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './CalendarComponent.css';
// import '../'

const localizer = momentLocalizer(moment);

const CalendarComponent = ({ events, onEventClick, onSelectSlot }) => {
  return (
    <div className="calendar-container">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '80vh', margin: '20px' }}
        views={['month', 'week', 'day']}
        defaultView="month"
        selectable
        onSelectEvent={onEventClick}
        onSelectSlot={onSelectSlot}
      />
    </div>
  );
};

export default CalendarComponent;