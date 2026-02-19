 export default function Header() {
  return (
    <header className="flex justify-between items-center py-2.5 px-5 bg-black">
      <h2 className="text-2xl font-bold leading-8.75">OZ코딩스쿨</h2>
      <ul className="flex justify-center items-center gap-5">
        <li className="list-none font-normal text-[13px]">로그인</li>
        <li className="list-none font-normal text-[13px]">회원가입</li>
        <li className="list-none font-normal text-[13px]">내클래스</li>
      </ul>
    </header>
  );
}
