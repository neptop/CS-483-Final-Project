import React, { useEffect, useState } from 'react';
import DiaryEntryCard from './DiaryEntryCard';
import api from '../services/api';

function DiaryList() {
  const [entries, setEntries] = useState([]);

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

  if (!entries.length) {
    return <p>No diary entries yet.</p>;
  }

  return (
    <div className="diary-list">
      {entries.map(entry => (
        <DiaryEntryCard key={entry._id || entry.id} entry={entry} />
      ))}
    </div>
  );
}

export default DiaryList;
