import "./App.css";
import { Tab } from "./components/Tab";
import { TabPanel } from "./components/TabPanel";

function App() {
  return (
    <>
      <div>
        <TabPanel />
      </div>
      <div className="tab-panel">
        <Tab>Hola</Tab>
        <Tab>es</Tab>
        <Tab>una</Tab>
        <Tab>prueba</Tab>
      </div>
    </>
  );
}

export default App;
