import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import Header from '../components/Header';
import WeatherWidget from '../components/WeatherWidget';
import NewEntryForm from '../components/NewEntryForm';
import DiaryList from '../components/DiaryList';
import api from '../services/api';

export default function Dashboard() {
  const { user, token } = useContext(AuthContext);
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  // load entries once authenticated
  useEffect(() => {
    if (!token) return;
    (async () => {
      try {
        const res = await api.get('/diary');
        setEntries(res.data);
      } catch (err) {
        console.error('Failed to load diary entries:', err);
      } finally {
        setLoading(false);
      }
    })();
  }, [token]);

  // prepend new entry on form success
  const handleNewEntry = (entry) => {
    setEntries(prev => [entry, ...prev]);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <Header />
      <h2>Welcome, {user?.name}!</h2>
      <WeatherWidget location="Portland, US" />

      <NewEntryForm onSuccess={handleNewEntry} />

      {loading ? (
        <p>Loading entries…</p>
      ) : (
        <DiaryList entries={entries} />
      )}
    </div>
  );
}
