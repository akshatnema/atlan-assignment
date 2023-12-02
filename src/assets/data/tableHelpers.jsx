const getTableRowsFromData = (arr) => {
  const keys = Object.keys(arr[0]);
  return arr.map((i, key) => {
    return (
      <tr key={key}>
        {keys.map((a, index) => {
          return <td key={index}>{i[a]}</td>;
        })}
      </tr>
    );
  });
};

const getTableHeadFromData = (arr) => {
  const keys = Object.keys(arr[0]);
  return (
    <tr>
      {keys.map((i, index) => {
        return <td key={index}>{i}</td>;
      })}
    </tr>
  );
};

const getTableColumns = (arr) => {
  const keys = Object.keys(arr[0]);
  return keys.map((i, index) => {
    return (
      <tr key={index}>
        <td>{i}</td>
      </tr>
    );
  });
};

export { getTableRowsFromData, getTableHeadFromData, getTableColumns };
