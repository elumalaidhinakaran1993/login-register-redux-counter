import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Increment, Decrement, Reset } from "./redux/counterAction";

export default function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  return (
    <>
      <div className="container">
        <div className="row col-12 mx-auto justify-content-center mt-5">
          <div className="card col-12 col-sm-12  col-md-8 col-lg-8 col-xl-4 col-xxl-4 shadow">
            <div className="card-body">
              <div className="text-center">
                <h3>Counter application </h3>
              </div>

              <div className="text-center mt-3">
                <span className="text-center">Clicked : {counter}</span>
              </div>
              <div className="text-center mt-3 mb-3">
                <button
                  className="btn btn-outline-success btn-sm me-2"
                  onClick={() => dispatch(Increment())}
                >
                  Increment
                </button>

                <button
                  className="btn btn-outline-warning btn-sm me-2"
                  onClick={() => dispatch(Decrement())}
                >
                  Decrement
                </button>

                <button
                  className="btn btn-outline-danger btn-sm "
                  onClick={() => dispatch(Reset())}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
