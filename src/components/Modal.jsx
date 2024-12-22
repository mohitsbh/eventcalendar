import React, { useState } from 'react';
import './Modal.css';
const Modal = ({ isOpen, setIsModalOpen, date, events, setEvents }) => {
  const [formData, setFormData] = useState({ title: "", start: "", end: "" });

  const handleAddEvent = () => {
    const updatedEvents = [...events];
    updatedEvents.push({
      title: formData.title,
      start: new Date(formData.start),
      end: new Date(formData.end),
    });
    setEvents(updatedEvents);
    setIsModalOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">Add Event for {date ? date.toLocaleString() : ''}</h2>
        <input
          type="text"
          placeholder="Event Title"
          className="modal-input"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <input
          type="datetime-local"
          className="modal-input"
          value={formData.start}
          onChange={(e) => setFormData({ ...formData, start: e.target.value })}
        />
        <input
          type="datetime-local"
          className="modal-input"
          value={formData.end}
          onChange={(e) => setFormData({ ...formData, end: e.target.value })}
        />
        <div className="modal-buttons">
          <button onClick={handleAddEvent} className="btn btn-primary">Add Event</button>
          <button onClick={() => setIsModalOpen(false)} className="btn btn-secondary">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;