import { travelTopics } from "./travel";

export function Main() {
  return (
    <main>
      {travelTopics.map((travel, index) => (
        <div key={index}>
          <article>
            <p>제목: {travel.title}</p>
            <p>카테고리: {travel.category}</p>
            <p>목적지: {travel.destination}</p>
          </article>
        </div>
      ))}
    </main>
  );
}
