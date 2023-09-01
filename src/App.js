import "./styles.css";
import { useState } from "react";

export default function App() {
  let names = [
    { id: 1, Cname: "LAVG" },
    { id: 2, Cname: "SWAS" },
    { id: 3, Cname: "MOAL" }
  ];
  const [delName, setDelName] = useState(names);
  const [undoName, setUndoName] = useState([]);

  const handleDel = (nam, id) => {
    let deleted = [...delName];
    deleted.splice(id, 1);
    setDelName(deleted);
    setUndoName([nam, ...undoName]);
  };
  const handleUndo = () => {
    if (undoName.length > 0) {
      setDelName([undoName[0], ...delName]);
      let unDoDel = [...undoName];
      unDoDel.splice(unDoDel[0], 1);
      setUndoName(unDoDel);
    }
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {delName.map((name, index) => (
        <>
          <div key={name.id}>
            {name.Cname}
            <button onClick={() => handleDel(name, index)}>Delete</button>
          </div>
        </>
      ))}
      <br />
      <button onClick={handleUndo}>Undo</button>
    </div>
  );
}
