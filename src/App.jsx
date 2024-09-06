import { useState } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import QnaForm from "./components/QnaForm";
import QnaList from "./components/QnaList";

function App() {
  const [isWritingMode, setIsWritingMode] = useState(false);
  const [travelTopics, setTravelTopics] = useState([]);

  function handleClick() {
    setIsWritingMode(!isWritingMode);
  }

  function addTravelTopic(topic) {
    setTravelTopics([...travelTopics, topic]);
  }

  return (
    <>
      <Header onClick={handleClick} />
      {isWritingMode ? (
        <>
          <QnaForm setTravelTopics={addTravelTopic} />
          <QnaList contents={travelTopics} />
        </>
      ) : (
        <Main travelTopics={travelTopics} />
      )}
      <footer>발</footer>
    </>
  );
}

export default App;
