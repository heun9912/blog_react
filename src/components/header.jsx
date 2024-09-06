export function Header({ onClick }) {
  return (
    <>
      <header id="logo">블로그</header>
      <nav>
        <ul>
          <li href="#logo">홈으로 돌아가기</li>
          <li onClick={onClick}>쓰기</li>
        </ul>
      </nav>
    </>
  );
}
