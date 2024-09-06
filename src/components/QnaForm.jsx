import { Fragment, useState } from "react";

export default function QnaForm({ setTravelTopics }) {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function submitForm() {
    const newTopic = { title: text, category: "기타", destination: "미정" }; // 예시 데이터
    setTravelTopics(newTopic);
    setText(""); // 제출 후 텍스트 입력란 비우기
  }

  return (
    <Fragment>
      <textarea
        onChange={handleChange}
        placeholder="내용을 추가 하세요"
        value={text}
      ></textarea>
      <button onClick={submitForm}>제출</button>
    </Fragment>
  );
}
