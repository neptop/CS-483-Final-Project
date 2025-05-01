import React, { useState } from 'react';
import api from '../services/api';

function DiaryEntryCard({ entry, onUpdate, onDelete}) {
  const { title, content, createdAt, weather, location } = entry;
  const date = new Date(createdAt).toLocaleString();

  const [edit, setEdit] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editContent, setEditContent] = useState(content);

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.put(`/diary/${entry._id}`, {
        title: editTitle,
        content: editContent,
        location: location || 'unknown',
      });
      onUpdate(res.data);
      setEdit(false);
    } catch (err) {
      console.error('update failed', err);
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`/diary/${entry._id}`);
      onDelete(entry._id);
    } catch (err) {
      console.error('delete failed', err);
    }
  };

  return (
    <div className="card p-4 mb-4 shadow rounded-2xl">
      {edit ? (
        <form onSubmit={handleEdit}>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            required
          />
          <textarea
            rows="3"
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            required
          />
          <button type="submit">Save</button>
          <button onClick={() => setEdit(false)}>Cancel</button>
        </form>
      ) : (
        <>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-sm text-gray-500">{date}</p>
          {weather && (
            <p className="text-sm mb-2">
              {weather.condition} · {weather.temperature}°F
            </p>
          )}
          {location && (
            <p className="text-sm italic mb-1">📍 {location}</p>
          )}
          <p className='text-base'>{content}</p>
          <button onClick={() => setEdit(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
}

export default DiaryEntryCard;