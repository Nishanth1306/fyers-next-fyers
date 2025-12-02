export default function MTFProgressBar({ funding, total , bottomLine }) {
  const width = total ? (funding / total) * 100 : 0;
  return (
    <div className="w-full md:w-[65%] min-h-3 bg-[#cecece] border border-[#cecece] rounded-xl relative overflow-hidden self-center">
      <div
        className={`h-[0.7rem] rounded-xl absolute right-0 bg-[#299e47]`}
        style={{ width: `${Math.min(100, Math.max(0, width))}%` }}
      />
    </div>
  );
}
