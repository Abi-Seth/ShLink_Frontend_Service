import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
function Redirect() {
  const [redirect, setredirect] = useState(false);
  const [nothing, setnothing] = useState(true);
  const [view, setview] = useState(0);
  const { id } = useParams();

  function Here() {
    return (
      <>
        {nothing ? (
          <></>
        ) : (
          <>
            <div className="w-full h-screen flex justify-center items-center">
              <h2>BRUH YOUR ARE LOST!</h2>
            </div>
          </>
        )}
      </>
    );
  }
  useEffect(() => {
  }, []);

  return (
    <>
      {redirect ? (
        <Helmet>
          <title>Redirecting...</title>
          <meta http-equiv="refresh" content={`0; url = ${redirect}`} />
        </Helmet>
      ) : (
        <>
          <Here />
        </>
      )}
    </>
  );
}

export default Redirect;
