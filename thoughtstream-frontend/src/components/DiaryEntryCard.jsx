import React from 'react';

function DiaryEntryCard({ entry }) {
  const { title, content, createdAt, weather } = entry;
  const date = new Date(createdAt).toLocaleString();

  return (
    <div className="card p-4 mb-4 shadow rounded-2xl">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-500 mb-1">{date}</p>
      {weather && (
        <p className="text-sm mb-2">
          <span>{weather.condition}</span>{' '}
          <span>{weather.temperature}°F</span>
        </p>
      )}
      <p className="text-base">{content}</p>
    </div>
  );
}

export default DiaryEntryCard;