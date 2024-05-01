import React, { useState } from "react";

import { Link } from "react-router-dom";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(true);
  };

  const [addMoreCert, setAddMoreCert] = useState(false);


  return (
    <>
      <button
        type="button"
        onClick={(e) => {
          handleModal();
          e.stopPropagation();
        }}
        className="font-bold p-2 text-sm"
      >
        Add Certification
      </button>

      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">General Info</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="opacity-7 block font-extrabold text-red-500 mt-3">
                      CLOSE
                    </span>
                  </button>
                </div>

                <div className="relative p-6 flex-auto">
                  <form className="bg-blue-100 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-black text-sm font-bold mb-2">
                      Add Certificate(s)
                    </label>
                    <input
                      className="shadow w-full p-5 m-3 appearance-none border rounded text-gray-700"
                      type="file"
                      name="cert"
                      id="cert"
                      accept="image/*"
                    />
                    {/* <input
                      type="file"
                      name="cert"
                      id="cert"
                      accept="image/*"
                      onChange={(e) => handleUserImgUpload(e, "cert")}
                    /> */}
                    {addMoreCert && (
                      <span className="flex items-center">
                        {/* <input
                          className="p-3 outline-none focus:border-b-2 focus:border-blue-400"
                          type="text"
                          name="certCourseTitle"
                          placeholder="Certification Course Title"
                          onChange={handleUserDetails}
                          value={userDetails.certCourseTitle}
                          required
                        /> */}

                        <input
                          className="shadow w-full p-5 m-3 appearance-none border rounded text-gray-700"
                          type="file"
                          name="cert"
                          id="cert"
                          accept="image/*"
                          // onChange={(e) => handleUserImgUpload(e, "cert")}
                        />
                      </span>
                    )}
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  {/* <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setAddMoreCert(!addMoreCert)}
                  >
                    Add
                  </button> */}
                  <button
                    className="text-white bg-blue-500 hover:bg-blue-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
