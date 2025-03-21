import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    return (
        <div>
            <h3>Edit Mode</h3>

            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Edit Mode"
                checked={editMode}
                onChange={() => {setEditMode(!editMode)}}
            />

            {
                editMode ?
                    <div>
                        <Form.Group controlId="formName">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control
                                type="text"
                                value={name}
                                onChange={(e) => {setName(e.target.value)}}
                            />
                        </Form.Group>
                        <Form.Check
                            type="checkbox"
                            id="student-checkbox"
                            label="Are you a student?"
                            checked={isStudent}
                            onChange={(e) => {setIsStudent(e.target.checked)}}
                        />
                    </div>
                :   <p>
                        {name} {isStudent ? "is" : "is not"} a student.
                    </p>

            }
        </div>
    );
}
