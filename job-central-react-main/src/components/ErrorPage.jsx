import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import errorAnimation from "../../public/errorAnimation.json";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  console.log(error, status);
  return (
    <div>
      <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
        <div className="flex flex-col items-center justify-center px-5 mx-auto my-8">
          <Lottie animationData={errorAnimation} loop={true} />
          <div className="max-w-md text-center">
            <p className="text-2xl font-semibold md:text-3xl mb-8">
              {error?.message}
            </p>
            <Link to="/">
              <button className="btn-primary">Back to homepage</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
