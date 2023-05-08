import React, { useState } from "react";

export default function NameDisplay() {
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    }

    return (
        <div>
            <input type = "text" valuue = { name } onChange = { handleChange } />
            <p>Hello, {name}!</p>
        </div>
    );
}