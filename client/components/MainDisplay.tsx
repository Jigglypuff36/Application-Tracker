import React from 'react';
import CardDisplay from './CardDisplay';

const MainDisplay = () => {
  // iterate through the data and create a card for each company they have applied for

  return (
    <div className="flex flex-col w-full">
        <div className="card w-200 h-96 bg-primary image-full">
            <div className="card-body">
                <div className="card-actions justify-end">
                    <CardDisplay/>

                </div>
            </div>
        </div>
    </div>
  );
};

export default MainDisplay;
