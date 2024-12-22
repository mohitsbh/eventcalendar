import React from 'react';

const ExportImportButtons = ({ events, setEvents }) => {
  const exportToCSV = () => {
    const csvRows = [
      ['Title', 'Start', 'End'],
      ...events.map(event => [event.title, event.start.toISOString(), event.end.toISOString()]),
    ];

    const csvString = csvRows.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvString], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'events.csv';
    link.click();
  };

  const importFromCSV = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      const rows = text.split('\n').slice(1); // Skip header row
      const importedEvents = rows.map(row => {
        const [title, start, end] = row.split(',');
        return {
          title,
          start: new Date(start),
          end: new Date(end),
        };
      });
      setEvents(importedEvents);
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <button onClick={exportToCSV} className="btn btn-primary">Export to CSV</button>
      <input type="file" accept=".csv" onChange={importFromCSV} className="btn btn-secondary" />
    </div>
  );
};

export default ExportImportButtons;