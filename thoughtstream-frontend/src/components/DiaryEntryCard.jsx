import React from 'react';

function DiaryEntryCard({ entry }) {
  const { title, content, createdAt, weather, location } = entry;
  const date = new Date(createdAt).toLocaleString();

  return (
    <div className="card p-4 mb-4 shadow rounded-2xl">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-sm text-gray-500">{date}</p>

      {location && (
        <p className="text-sm italic mb-1">📍 {location}</p>
      )}

      {weather && (
        <p className="text-sm mb-2">
          {weather.condition} · {weather.temperature}°F
        </p>
      )}

      <p>{content}</p>
    </div>
  );
}

export default DiaryEntryCard;