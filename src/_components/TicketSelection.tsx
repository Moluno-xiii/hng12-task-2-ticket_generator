import TicketTitle from "./TicketTitle";
import TicketType from "./TicketType";

const TicketSelection = () => {
  const options = Array.from({ length: 20 }, (_, index) => index + 1);
  return (
    <div className="border-border space-y-8 rounded-4xl border bg-[#08252B] md:p-8">
      <TicketTitle />

      <div className="bg-secondary h-1"></div>

      <TicketType />

      <div className="space-y-2">
        <div>
          <label>Number of Tickets</label>
          <select className="border-border ml-2 cursor-pointer rounded-md border p-2 px-2">
            {options.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>

        <div className="border-border flex h-12 w-full flex-row justify-between gap-x-12 rounded-full border px-12">
          <button className="hover:bg-primary flex-1 rounded-xl border border-[#24A0B5] text-[#24A0B5] transition-all duration-300">
            Cancel
          </button>
          <button className="flex-1 rounded-xl border border-[#24A0B5] bg-[#24A0B5] text-white transition-all duration-300 hover:bg-[#24A0B5]/70">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketSelection;
