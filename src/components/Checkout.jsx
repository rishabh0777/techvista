import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import StripeContext from '../Context/StripeContext'
import CheckoutForm from './CheckoutForm'

const Checkout = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [indexing, setIndexing] = useState(0);
  const [finalShipDet, setFinalShipDet] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const navigate = useNavigate()
  const total = useSelector((state)=> state.productInfo.selectedProductInfo)
  

 

  const getfName = (e) => {
    setFirstName(e.target.value);
    const newName = e.target.value
   
  };
  const getlName = (e) => {
    setLastName(e.target.value);
  };
  const getAddL1 = (e) => {
    setAddressLine1(e.target.value);
  };
  const getAddL2 = (e) => {
    setAddressLine2(e.target.value);
  };
  const postCode = (e) => {
    setPostalCode(e.target.value);
  };
  const selectAddress = (e) => {
    setSelectedAddress(parseInt(e.target.value, 10));
  };
 


  const getDetails = (e) => {
    e.preventDefault();
    setIndexing(indexing + 1);
    const detail = {
      key: indexing,
      name: `${firstName} ${lastName}`,
      address: `${addressLine1} ${addressLine2}`,
      postal: postalCode,
    };
    setFinalShipDet([detail, ...finalShipDet]);

    

    // Reset form fields
    setFirstName("");
    setLastName("");
    setAddressLine1("");
    setAddressLine2("");
    setPostalCode("");
  };

  const selectedDetail = finalShipDet.find((detail) => detail.key === selectedAddress);
  const orderedItem = ()=>{
    setFinalShipDet(selectedDetail)
    navigate('ordered', {replace:true})
  }

  return (
    <StripeContext>
    <main className="w-screen bg-[#ccc] dark:bg-[#555]">
      <div
        id="landingPage"
        className="w-[100vw] min-h-[100vh] z-10 flex flex-col items-center justify-center"
      >
        <div
          id="data"
          className="w-[95%] md:min-h-[85vh] p-4 relative z-[15] mx-[2.5%] lg:mt-[7.8%] xl:mt-[9.5%] xsm:mt-[20%] sm:mt-[20%] md:mt-[12.5%] bg-white dark:bg-zinc-900 dark:text-white shadow-lg shadow-black rounded-3xl overflow-hidden  flex md:flex-row xsm:flex-col items-center box-sizing justify-items-center gap-5"
        >
          <div
            id="left"
            className="md:w-1/2 xsm:w-full md:h-[85vh] flex flex-col items-center xsm:py-2 md:py-4"
          >
            <h1 className="text-3xl font-bold my-1">Shipping Address</h1>

            <form
              className="md:w-[80%] md:h-[90%] bg-white dark:bg-black xsm:h-full justify-self-center items-center flex flex-col shadow-lg shadow-black py-2"
              action=""
              onSubmit={getDetails}
            >
              {/* {finalShipDet.length > 0 && ( */}
                <select
                  className="bg-[#adacac] dark:bg-[#555] w-[70%] py-4 px-3 mt-1 rounded-2xl text-[0.9em]"
                  name="address"
                  onChange={selectAddress}
                  value={selectedAddress || ""}
                >
                  <option value="" disabled>Select an address</option>
                  {finalShipDet.map((detail) => (
                    <option
                      key={detail.key}
                      value={detail.key}
                      className="rounded-2xl py-3 w-[70%] h-[12%] mt-3"
                    >
                      {`${detail.name}, ${detail.address}, ${detail.postal}`}
                    </option>
                  ))}
                </select>
              {/* )} */}

              <input
                onChange={getfName}
                value={firstName}
                className="py-3 px-2 rounded-2xl mt-4 w-[65%] dark:bg-zinc-900 shadow-sm shadow-black outline-none"
                type="text"
                placeholder="First name"
              />
              <input
                onChange={getlName}
                value={lastName}
                className="py-3 px-2 rounded-2xl mt-4 w-[65%] dark:bg-zinc-900 shadow-sm shadow-black outline-none"
                type="text"
                placeholder="Last name"
              />
              <input
                onChange={getAddL1}
                value={addressLine1}
                className="py-3 px-2 rounded-2xl mt-4 w-[65%] dark:bg-zinc-900 shadow-sm shadow-black outline-none"
                type="text"
                placeholder="Address line 1"
              />
              <input
                onChange={getAddL2}
                value={addressLine2}
                className="py-3 px-2 rounded-2xl mt-4 w-[65%] dark:bg-zinc-900 shadow-sm shadow-black outline-none"
                type="text"
                placeholder="Address line 2"
              />
              <input
                onChange={postCode}
                value={postalCode}
                className="py-3 px-2 rounded-2xl mt-4 w-[65%] dark:bg-zinc-900 shadow-sm shadow-black outline-none"
                type="text"
                placeholder="Postal Code"
              />
              <button
                type="submit"
                className="bg-[#3ab611] text-white py-3 px-2 mt-4 w-[65%] rounded-2xl"
              >
                Add Shipping Details
              </button>
            </form>
          </div>
          <div
            id="right"
            className="md:w-1/2 xsm:w-full md:h-[85vh]  flex flex-col items-center xsm:py-2 md:py-4"
          >
            <h1 className="text-2xl font-bold my-1">Order Summary</h1>
            <div className="md:w-[80%] md:h-[90%] xsm:w-[90%] bg-white dark:bg-black xsm:min-h-[50vh] justify-self-center items-center flex flex-col shadow-lg shadow-black py-2">
              <div className="w-full h-[12%] flex items-center justify-around mt-4">
                <h3 className="text-lg font-bold">Subtotal</h3>
                <p className="text-[0.9em]">${total.price}</p>
              </div>
              {selectedDetail ? (
                <div className="h-[26%] w-full px-4 py-2 ">
                  <h3 className="text-lg font-bold">Shipping Details:</h3><br />
                  <p className="text-[0.9em] tracking-wide"><span className="text-md font-bold">Billing To - </span>{selectedDetail.name}</p>
                  <h3 className="text-[0.9em] tracking-wide"><span className="text-md font-bold">Address - </span>{selectedDetail.address}, {selectedDetail.postal}</h3>

                </div>
                
              ):(
                <div className="w-full h-[10%] md:text-2xl xsm:text-xl text-center tracking-tighter mt-10">Please Provide your Address</div>
              )
            }
            <div className="w-full md:h-[30%] xsm:h-[40%] xsm:mt-8 md:mt-0 px-4 py-2 flex flex-col items-center">
            <CheckoutForm />
             
             
            </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </StripeContext>
  );
};

export default Checkout;

