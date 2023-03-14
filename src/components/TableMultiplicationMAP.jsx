const TableMultiplicationMAP = () => {
  // const tab = Array.from({ length: 5 }, (x) => 1 ); // [1, 2, ... 10]
  const tab = [1, 2, 3, 4, 5, 6];

  return (
    <table>
      {/* Création de lignes */}
      {tab.map((i) => {
        // Création du contenu de la ligne
        const cells = tab.map((j) => {
          return <td>{j * i}</td>;
        });

        return <tr>{cells}</tr>;
      })}
    </table>
  );
};

export default TableMultiplicationMAP;
