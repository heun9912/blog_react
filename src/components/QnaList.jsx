import PropTypes from "prop-types";

export default function QnaList({ contents }) {
  return (
    <ul>
      {contents.map((content, index) => (
        <section key={index}>
          <p>제목: {content.title}</p>
          <p>카테고리: {content.category}</p>
          <p>목적지: {content.destination}</p>
        </section>
      ))}
    </ul>
  );
}

QnaList.propTypes = {
  contents: PropTypes.array.isRequired,
};
