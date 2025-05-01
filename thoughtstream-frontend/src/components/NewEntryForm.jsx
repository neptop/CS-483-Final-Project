import React, { useState } from 'react';
import api from '../services/api';

export default function NewEntryForm({ onSuccess }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { title, content, location }; 
      console.log('Submitting payload', payload);  // <— add this
      const res = await api.post('/diary', payload);
      onSuccess(res.data);
    } catch (err) {
      console.error('Error creating entry:', err.response?.data || err);
    }
  };  

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }}
        />
      </div>
      <div>
        <textarea
          placeholder="Content"
          value={content}
          onChange={e => setContent(e.target.value)}
          required
          rows={4}
          style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={e => setLocation(e.target.value)}
          style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        style={{ padding: '0.5rem 1rem' }}
      >
        {loading ? 'Saving...' : 'Save Entry'}
      </button>
    </form>
  );
}
