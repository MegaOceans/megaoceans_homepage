export default function Input({ placeholder, label }) {
  return (
    <div className="w-full  flex flex-col gap-2 items-start  ">
      <p className="text-base font-semibold text-white">{label}:</p>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-4 py-2 rounded-xl text-lg text-black "
      />
    </div>
  );
}
