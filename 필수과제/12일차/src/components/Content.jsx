export default function Content({ content }) {
  return (
    <div className="flex flex-col items-start gap-1.25">
      <img className="w-75 rounded-[10px] mb-0.75" src={content.img} alt={content.title} />
      <span className="text-[12px] text-[#d7fa00] border border-[#d7fa00] py-1 px-1.25 rounded-[3px]">모집중</span>
      <div className="text-[18px] font-semibold leading-[26px]">{content.title}</div>
      <p className="text-[12px] text-[#a0a0a0]">{content.subtitle}</p>
    </div>
  );
}
