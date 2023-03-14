import Concatenation from "./components/Concanetation";
import DoubleComposant from "./components/DoubleComposant";
import Image from "./components/Image";
import ResultatCalcul from "./components/ResultatCalcul";
import Table10FOR from "./components/Table10FOR";
import Table10MAP from "./components/Table10MAP";
import TableMultiplicationFOR from "./components/TableMultiplicationFOR";
import TableMultiplicationMAP from "./components/TableMultiplicationMAP";
import TextVariable from "./components/TextVariable";
import Titre from "./components/Titre";

function App() {
  return (
    <div className="App">
      <h1>Exercices : </h1>
      
      <TextVariable />
      <ResultatCalcul />
      <Concatenation />
      <Image />
      <Titre />
      <DoubleComposant />
      <Table10FOR />
      <Table10MAP />
      <TableMultiplicationMAP />
      <TableMultiplicationFOR />
    </div>
  );
}

export { App };