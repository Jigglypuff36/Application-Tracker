import { array } from 'prop-types';
import React from 'react';

const CardDisplay = () => {
  // iterate through the data and create a card for each company they have applied for
// const newCard = [];
// for (let i = 0; i < asdf; i++){
//   <div className="card w-96 bg-base-100 shadow-xl image-full">
//   <div className="card-body">
//     <h2 className="card-title">{company}</h2>
//     <p>status</p>
//     <div className="card-actions justify-end">
//       <button>
//         <label htmlFor="my-modal-6" className="btn">
//           open modal
//         </label>
//         <input type="checkbox" id="my-modal-6" className="modal-toggle" />
//         <div className="modal modal-bottom sm:modal-middle">
//           <div className="modal-box">
//             <h3 className="font-bold text-lg">Congratulations</h3>
//             <p className="py-4">Info about the application</p>
//             <div className="modal-action">
//               <label htmlFor="my-modal-6" className="btn">
//                 Yay!
//               </label>
//             </div>
//           </div>
//         </div>
//       </button>
//     </div>
//   </div>
// </div>
// }



  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <div className="card-body">
        <h2 className="card-title">Company Name!</h2>
        <p>status</p>
        <div className="card-actions justify-end">
          <button>
            <label htmlFor="my-modal-6" className="btn">
              open modal
            </label>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Congratulations</h3>
                <p className="py-4">Info about the application</p>
                <div className="modal-action">
                  <label htmlFor="my-modal-6" className="btn">
                    Yay!
                  </label>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDisplay;
