import { useContext, useEffect, useState } from "react";
import MainContext from "../../context/QueryContext";

const Query = (props) => {
  const { setQuery, queryHistory } = useContext(MainContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [list, setList] = useState(queryHistory[props.type]);

  const renderQueryList = (array) => {
    return array.map((i, index) => {
      return (
        <div key={index} className='cursor-pointer bg-white p-1 rounded-md mb-2'>
          <code onClick={() => setQuery(i)}>{i}</code>
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
