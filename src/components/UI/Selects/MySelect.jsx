import React from 'react';

const MySelect = ({options, def, value, onChange}) => {
    return (
        <select value={value} onChange={(e) => onChange(e.target.value)}>
            <option disabled value={''}>{def}</option>
            {options.map(o => <option value={o.value} key={o.value}>{o.name}</option>)}
        </select>
    );
};

export default MySelect;