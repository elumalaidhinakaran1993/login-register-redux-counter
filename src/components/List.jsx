import React from "react";

import { useState, useEffect } from "react";

function List() {
  const [todo, setTodo] = useState(0);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let response = await (
      await fetch("https://jsonplaceholder.typicode.com/todos")
    ).json();
    setTodo(response.splice(0, 12));

  };

  return (
    <div className="container ">
      <div className="row  justify-content-center align-items-center mt-3">
        {todo.length > 0 ? (
          <div className="row pb-4">
            {todo.map((item, index) => (
              <div
                key={`${item.userId}${index}`}
                className="col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mt-2"
              >
                <div className="card card_hover h-100 shadow">
                  <div className="card-body">
                    <div className="mt-2 text-center p-2">
                      <p className="FormContent">Id: {item.id}</p>

                      <p className="FormPlaceholder">Title: {item.title}</p>

                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h1>Loading posts...</h1>
        )}
      </div>
    </div>
  );
}

export default List;
