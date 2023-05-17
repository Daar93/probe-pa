import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import EmployeeForm from "../Components/EmployeeForm";

const createHobby = (hobby) => {
    return fetch("/api/hobby", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(hobby),
    }).then((res) => res.json());
  };

export default function CreateNewHobbies() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState("");
    const [hobby, setHobby] = useState(""); 


    return <>
         <form className="HobbyForm" >
            <div className="hobby-name">
                <label htmlFor="name">Name:</label>
                <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
                id="name"
                />
            </div>
            <div className="hobby-description">
                <label htmlFor="description">Description:</label>
                <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                name="description"
                id="description"
                />
            </div>

      {/* <div className="control">
        <label htmlFor="level">Level:</label>
        <input
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          name="level"
          id="level"
        />
      </div>

      <div className="control">
        <label htmlFor="position">Position:</label>
        <input
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          name="position"
          id="position"
        />
      </div> */}

      <div className="buttons">
        <button type="submit">
          {hobby ? "Update Hobby" : "Create Hobby"}
        </button>

        <button type="button">
          Cancel
        </button>
      </div>
    </form>
    </>
};
