import React, { useState } from 'react';

function Checkbox() {
    const [isChecked, setIsChecked] = useState(false);

    function handleCheckboxChange(event) {
        setIsChecked(event.target.checked);
    }
    return (
        <div>
        <label>
            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
            Lembrar de mim
        </label>
        </div>
    );
}
export default Checkbox;