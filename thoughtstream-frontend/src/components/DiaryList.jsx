import React, { useEffect, useState } from 'react';
import DiaryEntryCard from './DiaryEntryCard';
import api from '../services/api';

function DiaryList({entries, setEntries}) {
  const handleUpdate = (updatedEntry) => {
    setEntries((prev) =>
      prev.map((e) => (e._id === updatedEntry._id ? updatedEntry : e))
    );
  };

  const handleDelete = (id) => {
    setEntries((prev) => prev.filter((e) => e._id !== id));
  };

  if (!entries.length) {
    return <p>No diary entries yet.</p>;
  }

  useEffect(() => {
    async function fetchEntries() {
      try {
        const response = await api.get('/diary');
        setEntries(response.data);
      } catch (err) {
        console.error('Error fetching diary entries', err);
      }
    }
    fetchEntries();
  }, []);

  return (
    <div className="diary-list">
      {entries.map(entry => (
        <DiaryEntryCard 
          key={entry._id || entry.id} 
          entry={entry} 
          onUpdate={handleUpdate} 
          onDelete={handleDelete} 
          />
      ))}
    </div>
  );
}

export default DiaryList;
