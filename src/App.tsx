import { Layout } from "./view/Layout/Layout";
import "./App.css";

import DebitCards from "./view/DebitCards";
import { Tabs } from "./components/ui/tabs";

function App() {
  const tabs = [
    {
      id: "tab1",
      label: "My debit cards",
      content: <DebitCards />,
    },
    {
      id: "tab2",
      label: "All company cards",
      content: <div>Content for second tab</div>,
    },
  ];
  return (
    <Layout>
      <Tabs tabs={tabs} />
    </Layout>
  );
}

export default App;
