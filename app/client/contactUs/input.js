export default function Input({ label, name, placeholder, value, onChange }) {
  return (
    <div className="w-full flex flex-col gap-2 items-start">
      <p className="text-base font-semibold text-white">{label}:</p>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 rounded-xl text-lg text-black"
      />
    </div>
  );
}
