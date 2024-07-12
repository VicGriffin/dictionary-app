import React, { useState } from 'react';
import axios from 'axios';
import './home.css';

function Home() {
  const [keyWord, setKeyWord] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const api = "https://api.dictionaryapi.dev/api/v2/entries/en";

  const handleSearch = async () => {
    if (!keyWord) return;
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`${api}/${keyWord}`);
      setResult(res.data[0]);
    } catch (e) {
      setError("Word not found or API error");
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setKeyWord('');
    setResult(null);
    setError(null);
  };

  return (
    <div className="home-section">
      <div className="title">
        <h2>Search for any word</h2>
      </div>
      <div className="search-section">
        <input
          value={keyWord}
          onChange={(e) => setKeyWord(e.target.value)}
          type="text"
          className="search-input"
          placeholder="Search for any word"
        />
        <button
          type='button'
          className="search-button"
          onClick={handleSearch}
          disabled={loading}
        >
          Search
        </button>
        <button
          type='button'
          className="clear-button"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {result && (
        <div className="result-section">
          <h3>Word: {result.word}</h3>
          <p>Meaning: {result.meanings[0].definitions[0].definition}</p>
        </div>
      )}
    </div>
  );
}

export default Home;
