const Table10MAP = () => {
  // const tableau = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const tableau = Array.from({ length: 10 }, (x, i) => i + 1);

  const tableauCopy = [
    1, //  <li key={1}>{1} * 10 = {1*10}</li>
    2, //  <li key={2}>{2} * 10 = {2*10}</li>
    3, //  <li key={3}>{3} * 10 = {3*10}</li>
    4, //  <li key={4}>{4} * 10 = {4*10}</li>
    5, //  <li key={5}>{5} * 10 = {5*10}</li>
    6, //  <li key={6}>{6} * 10 = {6*10}</li>
    7, //  <li key={7}>{7} * 10 = {7*10}</li>
    8, //  <li key={8}>{8} * 10 = {8*10}</li>
    9, //  <li key={9}>{9} * 10 = {9*10}</li>
    10, //  <li key={10}>{10} * 10 = {10*10}</li>
  ];

  return (
    <ul>
      {tableau.map((nb) => {
        return (
          <li key={nb}>
            {nb} * 10 = {nb * 10}
          </li>
        );
      })}
    </ul>
  );
};

export default Table10MAP;
