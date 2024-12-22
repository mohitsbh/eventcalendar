import React, { useState, useEffect } from 'react';
import CalendarComponent from './components/CalendarComponent';
import Modal from './components/Modal';
import ExportImportButtons from './components/ExportImportButtons';
import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const exampleEvents = [
      {
        start: new Date(),
        end: new Date(new Date().setHours(new Date().getHours() + 1)),
        title: 'Sample Event',
      },
      {
        start: new Date(new Date().setDate(new Date().getDate() + 1)),
        end: new Date(new Date().setDate(new Date().getDate() + 1)).setHours(new Date().getHours() + 1),
        title: 'Another Event',
      },
    ];
    setEvents(exampleEvents);
  }, []);

  const handleEventClick = (event) => {
    alert(`Event: ${event.title}\nStart: ${event.start.toLocaleString()}\nEnd: ${event.end.toLocaleString()}`);
  };
  const handleSelectSlot = ({ start }) => {
    setSelectedDate(start);
    setIsModalOpen(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Calendar Application</h1>
        <ExportImportButtons events={events} setEvents={setEvents} />
      </header>
      <main>
        <CalendarComponent events={events} onEventClick={handleEventClick} onSelectSlot={handleSelectSlot} />
        <Modal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} date={selectedDate} events={events} setEvents={setEvents} />
      </main>
    </div>
  );
};

export default App;