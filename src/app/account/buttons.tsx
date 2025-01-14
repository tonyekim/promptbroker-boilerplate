export default function Buttons() {
  return (
    <div className="flex flex-col-reverse sm:flex-row justify-between mx-2 sm:mx-12">
      <div className="sm:pl-0 pl-4">
        <button className="rounded-full bg-[#393954] text-xs font-semibold text-white py-2 px-3 ml-3">
          Dashboards
        </button>
        <button className="rounded-full bg-[#393954] text-xs font-semibold text-white py-2 px-3 ml-3">
          Prompts
        </button>
        <button className="rounded-full bg-[#393954] text-xs font-semibold text-white py-2 px-3 ml-3">
          Bundles
        </button>
        <button className="rounded-full bg-[#393954] text-xs font-semibold text-white py-2 px-3 ml-3">
          Sales
        </button>
        <button className="rounded-full bg-[#393954] text-xs font-semibold text-white py-2 px-3 ml-3">
          Perks
        </button>
        <button className="rounded-full bg-[#393954] text-xs font-semibold text-white py-2 px-3 ml-3">
          Payouts
        </button>
        <button className="rounded-full bg-[#393954] text-xs font-semibold text-white py-2 px-3 ml-3">
          Favorites
        </button>
        <button className="rounded-full bg-white text-xs font-semibold text-gray-700 py-2 px-3 ml-3">
          Settings
        </button>
      </div>
      <div className="mb-7 sm:mb-0">
        <button className="bg-white text-gray-700 rounded-md text-sm font-semibold py-1 px-2 ml-3">
            Stripe Dashboard
          </button>
        <button className="bg-white text-gray-700 rounded-md text-sm font-semibold py-1 px-2 ml-3">
          Public Profile
        </button>
      </div>
    </div>
  );
}
