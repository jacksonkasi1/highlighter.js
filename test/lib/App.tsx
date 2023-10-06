// App.tsx
import { Highlighter } from "./Highlighter";
import SamplePage from "./SamplePage";

function App() {
  return (
    <>
      <div>
        <Highlighter color="green" size="20px" show="Puff" />
      </div>
      <SamplePage />
    </>
  );
}

export default App;
