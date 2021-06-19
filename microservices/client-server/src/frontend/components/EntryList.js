import React, { useState, useEffect } from 'react';

export function EntryList(props) {
  const [entryList, setEntryList] = useState([]);

  useEffect(() => {
    fetch('/api/entry')
      .then((res) => {
        return res.json();
      })
      .then((data) => setEntryList(data));
  }, []);

  return (
    <div>
      <article>
        <h1>André's Zettelkasten</h1>
        <p>André's personal knowledge database</p>
      </article>
      <article>
        <h2>Entries</h2>
        {entryList.map((l) => (
          <p>
            <details>
              <summary>{l.title}</summary>
              <dl>
                {l.tags.map((t) => (
                  <dt>{t}</dt>
                ))}
              </dl>
              {l.description}
            </details>
          </p>
        ))}
      </article>
    </div>
  );
}
