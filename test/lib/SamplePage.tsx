import { useHighlight } from "./useHighlight";

function SamplePage() {
  const handleClick = () => {
    useHighlight(
      ["my-hello", "customer"],
      { color: "red", size: "24px" },
      "Puff",
      false,
    );
  };

  return (
    <>
      <div id="my-hello">hello</div>
      <div id="customer">
        <h1>the customer site</h1>
      </div>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}

export default SamplePage;
