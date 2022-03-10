import React, { useState } from "react";
import Image from "next/image";
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";

const Todo = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const addItem = () => {
    if (item) {
      setList([...list, item]);
      setItem("");
    } else {
      alert("Please Add Item First 😇");
    }
  };

  const deleteItem = (idx) => {
    const updatedList = list.filter((elem, index) => {
      return idx !== index;
    });
    setList(updatedList);
  };

  const deleteList = () => {
    setList([]);
  };

  return (
    <>
      <div
        className="flex flex-col justify-between h-screen overflow-y-scroll"
        style={{ backgroundColor: "#151B54" }}
      >
        <div className="flex flex-col items-center p-10">
          {/* title */}
          <div className="flex flex-col items-center text-white m-5">
            <Image
              src="/List.webp"
              alt="Picture of the author"
              width={50}
              height={50}
            />
            <h3 className="mt-3">Add Your List Here ✌️</h3>
          </div>

          {/* Add space */}
          <div className="flex mb-6">
            <input
              type="text"
              placeholder="✍️   Add Item..."
              className="p-2 focus:outline-none text-2xl text-violet-600 rounded-tl-md rounded-bl-md"
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
            <AiOutlinePlus
              className="bg-white text-5xl p-2 hover:cursor-pointer hover:text-violet-900 rounded-tr-md rounded-br-md"
              onClick={addItem}
            />
          </div>

          {/* List items */}
          <div>
            {list.map((elem, index) => {
              return (
                <div
                  key={index}
                  className="flex bg-violet-900 text-white py-2 px-5 w-48 text-xl rounded-md justify-between items-center m-2 hover:bg-white hover:text-violet-900"
                >
                  {elem}
                  <AiOutlineDelete
                    className="hover:cursor-pointer hover:text-red-900 hover:text-2xl"
                    onClick={() => deleteItem(index)}
                  />
                </div>
              );
            })}
          </div>

          {/* Delete List */}
          <button
            className="bg-slate-400 p-2 rounded-md mt-5 hover:bg-slate-600 hover:text-white"
            onClick={deleteList}
          >
            Delete List
          </button>
        </div>
        <div className=" text-violet-900 flex flex-col items-center">
          <a
            href="https://github.com/Vivek27951/TODO"
            className="hover:text-white"
          >
            Source Code
          </a>
          <h1>Code By : Vivek Kumar Singh 😎</h1>
        </div>
      </div>
    </>
  );
};

export default Todo;
