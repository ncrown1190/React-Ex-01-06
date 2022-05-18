import { useState } from "react";
import "./ArraysEx.css";

interface Pet {
  name: string;
  type: string;
  id: number;
}

export default function ArraysEx() {
  const [colors, setColors] = useState(["red", "green", "blue"]);
  const [newColor, setNewColor] = useState("");
  const [pets, setNewPets] = useState<Pet[]>([
    {
      name: "  Fluffer Nutters",
      type: "Cat",
      id: 1,
    },
    {
      name: "Mocha",
      type: "Dog",
      id: 2,
    },
    {
      name: "sophie",
      type: "Hamster",
      id: 3,
    },
  ]);
  function addColor(color: string): void {
    setColors([...colors, color]);
  }

  function removePet(pet: Pet) {
    setNewPets(pets.filter((p) => p.id !== pet.id));
  }
  return (
    <div>
      <ol>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ol>
      <button onClick={() => addColor("green")}>Add green</button>
      <button onClick={() => addColor("purple")}>Add purple</button>
      <button onClick={() => addColor("pink")}>Add pink</button>
      <input
        value={newColor}
        onChange={(e) => setNewColor(e.target.value)}
        type="text"
      />
      <button
        onClick={() => {
          addColor(newColor);
          setNewColor("");
        }}
      >
        Add color
      </button>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {pets.map((pet) => (
            <tr key={pet.id}>
              <td>{pet.id}</td>
              <td>{pet.name}</td>
              <td>{pet.type}</td>
              <td>
                <button onClick={() => removePet(pet)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
