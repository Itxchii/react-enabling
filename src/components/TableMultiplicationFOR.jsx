const TableMultiplicationFOR = () => {
  const tab = [];

  for (let i = 1; i <= 5; ++i) {
    const cells = [];

    for (let j = 1; j <= 5; ++j) {
      cells.push(<td>{j * i}</td>);
    }

    tab.push(<tr>{cells}</tr>);
  }

  return <table>{tab}</table>;
};

export default TableMultiplicationFOR;
