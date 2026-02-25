import React, { useState, useMemo, useCallback } from 'react';
import './App.css';

const ListItem = React.memo(function ListItem({ item, onClick }) {
  console.log(`Rendering ${item}`);
  return <li onClick={() => onClick(item)}>{item}</li>;
});

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const items = useMemo(() => {
    return ["Apple", "Banana", "Cherry", "Date", "Fig", "Grape"]
  },[])

  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase()))
  }, [items, searchTerm])

  const handleItemClick = useCallback((item) => {
    return setSelectedItem(item);
  }, [])

  return (
    <div className="app-wrapper">
      <div className="app-container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          className="search-input"
        />
        <ul className="item-list">
          {filteredItems.map((item) => (
            <ListItem key={item} item={item} onClick={handleItemClick} />
          ))}
        </ul>
        {selectedItem && (
          <p className="selected-item">Selected Item: {selectedItem}</p>
        )}
      </div>
    </div>
  );
};

export default App;
