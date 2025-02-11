import TicketTitle from "./TicketTitle";
import TicketType from "./TicketType";

const TicketSelection = () => {
  const options = Array.from({ length: 20 }, (_, index) => index + 1);
  return (
    <div className="md:border-border space-y-8 rounded-4xl md:border md:bg-[#08252B] md:p-8">
      <TicketTitle />

      <div className="bg-secondary h-1"></div>

      <TicketType />

      <div className="space-y-2">
        <div className="flex flex-col gap-y-2 max-md:mb-4 md:flex-row">
          <label>Number of Tickets</label>
          <select className="border-border ml-2 cursor-pointer rounded-md border p-3 px-2">
            {options.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className="border-border flex w-full flex-col gap-x-12 gap-y-3 md:h-12 md:flex-row md:justify-between md:rounded-full md:border md:px-12">
          <button className="hover:bg-primary flex-1 rounded-xl border border-[#24A0B5] text-[#24A0B5] transition-all duration-300 max-md:p-3">
            Cancel
          </button>
          <button className="w-full rounded-xl border border-[#24A0B5] bg-[#24A0B5] text-white transition-all duration-300 hover:bg-[#24A0B5]/70 max-md:p-3 md:flex-1">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketSelection;
