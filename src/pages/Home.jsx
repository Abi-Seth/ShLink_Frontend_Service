import React, { useState, useEffect, useReducer } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import QRCode from "react-qr-code";
import copy from "copy-to-clipboard";

function Home() {
  const [url, seturl] = useState("");
  const [short, setshort] = useState("");
  const [shortCheck, setshortCheck] = useState(false);
  const [urlCheck, setUrlcheck] = useState("");

  let sup = [];
  const [dialog, setdialog] = useState(false);

  const copyToClipboard = () => {
    copy(`${window.origin}/${shortCheck}`);
  };
  useEffect(() => {
  }, [sup]);

  const generateShortURL = () => {

  }

  return (
    <div className=" max-w-2xl py-10 mt-5 md:mt-15 mx-auto">
      <div
        className="  max-w-md mx-auto
      p-3 mb-3  rounded-lg text-center "
      >
        <p className="text-4xl md:text-6xl">
          🔫 ShLink Gun
        </p>
        <br />
        <p className=" text-lg  md:text-2xl">
          A URL shortener that has zero limits{" "}
        </p>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {dialog ? (
        <>
          <div className=" flex justify-between rounded-md relative bg-accent max-w-md mx-3 sm:mx-auto mb-5 p-5">
            <div>
              <div className="mb-3 text-neutral  relative">
                <div className="text-2xl ">SHORT URL:</div>
                <div className="text-lg">
                  <li>
                    {window.origin}/{shortCheck}
                  </li>
                </div>
              </div>
              <button
                onClick={copyToClipboard}
                className="btn btn-primary mr-2"
              >
                Copy
              </button>
              <label
                for="my-modal-2"
                className="btn btn-primary modal-button      "
              >
                QR Code
              </label>
              <input
                type="checkbox"
                id="my-modal-2"
                className="modal-toggle relative"
              />
              <div class="modal">
                <div class="modal-box">
                  <QRCode
                    className="mx-auto rounded-md  "
                    value={`${window.origin}/${shortCheck}`}
                  />
                  <div className="modal-action">
                    {/* <label for="my-modal-2" className="btn btn-primary">
                    Accept
                  </label> */}

                    <label
                      for="my-modal-2"
                      className="btn btn-circle btn-sm btn-ghost top-3 right-3 absolute"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block w-6 h-6 stroke-current"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => setdialog(false)}
              className="btn btn-sm btn-circle btn-ghost "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </>
      ) : (
        <>
          {" "}
          <h1></h1>
        </>
      )}
      <form
        className="form-control mx-2 max-w-lg sm:mx-auto bg-base-300 p-5 rounded-md"
        onSubmit={generateShortURL}
      >
        <label class="label">
          <span class="label-text text-lg ">Add any url: </span>
        </label>
        <input
          className="input input-accent input-bordered mb-5"
          value={url}
          required
          type="url"
          placeholder="https://example.com"
          onChange={(e) => seturl(e.target.value)}
        ></input>
        <div className=" p-5 card bg-base-200">
          <p className=" text-lg"></p>
          <label className="label">
            <span className="label-text">Optional: </span>
          </label>
          <input
            className="input input-bordered mb-5"
            value={short}
            placeholder="Custom short URL path:"
            type="text"
            onChange={(e) => setshort(e.target.value)}
          ></input>
        </div>
        <div className="divider"></div>
        <button className="btn btn-primary" type="submit">
          Fire Recoiling
        </button>
      </form>
    </div>
  );
}

export default Home;
