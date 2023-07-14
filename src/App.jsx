import "./App.css";
import Tensfer from "@tensferhq/tensfer-js";

function App() {
  const openWidget = () => {
    Tensfer.linkWithOptions({
      companyName: "GetKova",
      publicKey: "c4a4229b9f20cd8c3773c3c91b93d8f2",
      products: ["auth", "balance"],
      onSuccess: function (data) {
        console.log("Success!", data);
      },
      onError: function (data) {
        // an error occured
        console.log("Error!", data);
      },
      onClose: function () {
        // user closed widget
        console.log("Exited!");
      },
    });
  };
  return (
    <>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <button onClick={openWidget}>Initiate widget</button>
    </>
  );
}

export default App;
