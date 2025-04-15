import { useState, useEffect } from 'react';

export default function SearchUser() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (searchTerm.length > 2) {
      fetch(`https://jsonplaceholder.typicode.com/users?name_like=${searchTerm}`)
        .then(res => res.json())
        .then(data => setResults(data));
    } else {
      setResults([]);
    }
  }, [searchTerm]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>🔍 Live User Search</h2>
      <input 
        type="text"
        placeholder="Search user..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {results.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

