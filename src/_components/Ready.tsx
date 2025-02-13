import { useTabContext } from "../_contexts/TabContext";
import TechemberTicket from "./Ticket";

const Ready: React.FC = () => {
  const { onPreviousTab } = useTabContext();
  return (
    <div
      className="flex flex-col items-center gap-y-6"
      aria-labelledby="booked ticket details"
    >
      <div className="space-y-4">
        <p className="test text-[32px] font-bold">Your Ticket is Booked!</p>
        <span className="font-roboto">
          Check your email for a copy or you can{" "}
          <span className="font-bold">download</span>
        </span>
      </div>
      <TechemberTicket />
      <div className="flex w-full flex-col justify-between gap-x-6 gap-y-3 max-md:flex-col-reverse md:h-12 md:flex-row">
        <button
          onClick={() => onPreviousTab(1)}
          aria-labelledby="download ticket button"
          className="hover:bg-primary flex-1 rounded-xl border border-[#24A0B5] text-[#24A0B5] transition-all duration-300 max-md:p-3"
        >
          Book Another Ticket
        </button>
        <button
          className="w-full rounded-xl border border-[#24A0B5] bg-[#24A0B5] text-white transition-all duration-300 hover:bg-[#24A0B5]/70 max-md:p-3 md:flex-1"
          aria-labelledby="button to book another ticket"
        >
          Download Ticket
        </button>
      </div>
    </div>
  );
};

export default Ready;
