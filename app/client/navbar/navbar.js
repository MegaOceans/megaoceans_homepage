export default function Navbar() {
  return (
    <div className="w-view py-4 flex items-center justify-between text-white">
      <div className="flex items-center gap-2">
        <p className="text-3xl font-semibold ">Mega Oceans</p>
      </div>
      <div className="flex items-center gap-8">
        <p className="text-base font-medium hover:cursor-pointer hover:text-green">
          Contact Us
        </p>
        <button className="text-base text-black font-medium px-4 py-2 rounded-full bg-secondary">
          Book a Call
        </button>
      </div>
    </div>
  );
}
