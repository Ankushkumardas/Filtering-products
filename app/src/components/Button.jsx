import React from 'react';

function Button({ handleclick, value, title }) {
  return (
    <div>
      <button onClick={handleclick} value={value}className='px-2 py-1 transition-all border rounded-md shadow-sm hover:shadow-md hover:scale-110'>
        {title}
      </button>
    </div>
  );
}

export default Button;
