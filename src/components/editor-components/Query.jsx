import { useContext, useEffect, useState } from "react";
import MainContext from "../../context/QueryContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Query = (props) => {
  const { setQuery, queryHistory, setQueryHistory } = useContext(MainContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [list, setList] = useState(queryHistory[props.type]);

  const handleDeleteItem = (index) => {
    setQueryHistory((prev) => ({
      ...prev,
      [props.type]: prev[props.type].filter((i, idx) => idx !== index),
    }));
  }

  const renderQueryList = (array) => {
    return array.map((i, index) => {
      return (
        <div key={index} className='cursor-pointer flex justify-between bg-white p-1 rounded-md mb-2'>
          <code onClick={() => setQuery(i)} className="text-left">{i}</code>
          <div className="h-auto">
            <div className="w-fit p-0.5 hover:bg-gray-200 rounded-sm min-w-[2rem] relative top-1/2 -translate-y-1/2 my-auto" onClick={() => handleDeleteItem(index)}>
              <FontAwesomeIcon icon={faTrash} />
            </div>
          </div>
        </div>
      );
    });
  };

  useEffect(() => {
    setList(queryHistory[props.type]);
  }, [props, queryHistory]);

  useEffect(() => {
    setList(
      queryHistory[props.type].filter((i) =>
        i.toLowerCase().includes(searchQuery.toLowerCase())
      )
    ); // eslint-disable-next-line
  }, [searchQuery]);

  return (
    <div className='max-h-[35vh] overflow-auto'>
      <div className='search-bar'>
        <input
          placeholder='Search...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {list.length > 0 ? (
        renderQueryList(list)
      ) : (
        <div className='text-opacity-30 font-bold text-2.5xl flex flex-col h-full items-center justify-center mt-8 text-center placeholder-text'>
          <span className='fa fa-exclamation-circle'></span>
          <p>No queries found.</p>
        </div>
      )}
    </div>
  );
};

export default Query;
