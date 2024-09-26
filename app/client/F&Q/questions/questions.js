export default function Questions({ question, answer }) {
  return (
    <div className="w-full p-4 rounded-3xl  bg-terinary flex flex-col items-center gap-4">
      <div className="w-full flex items-center justify-between px-2">
        <p className="text-white text-2xl font-bold ">{question}</p>
        <p className="text-white text-4xl font-light ">+</p>
      </div>
      <p className="p-4 text-black text-sm w-full bg-white rounded-xl">
        {answer}
      </p>
    </div>
  );
}
