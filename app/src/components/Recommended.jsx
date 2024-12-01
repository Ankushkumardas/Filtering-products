import React from 'react';
import Button from './Button';

function Recommended({ handlebuttonchange }) {
  return (
    <div className="p-4">
      <h2 className="mb-2">Recommended:</h2>
      <div className="flex gap-2">
        <Button handleclick={handlebuttonchange} value={""} title={"All Products"} />
        <Button handleclick={handlebuttonchange} value={"Nike"} title={"Nike"} />
        <Button handleclick={handlebuttonchange} value={"Adidas"} title={"Adidas"} />
        <Button handleclick={handlebuttonchange} value={"Puma"} title={"Puma"} />
        <Button handleclick={handlebuttonchange} value={"Vans"} title={"Vans"} />
      </div>
    </div>
  );
}

export default Recommended;
