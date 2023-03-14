const Table10FOR = () => {
  const tableau = [];

  for (let i = 0; i < 11; ++i) {
    tableau.push(
      <li key={i}>{i} * 10 = {i*10}</li>
    )
  }

  return (
    <ul>
      {tableau}
    </ul>
  )
}

export default Table10FOR;