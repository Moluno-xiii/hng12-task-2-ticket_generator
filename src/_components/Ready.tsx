const Ready: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-y-6">
      <div className="text-center">
        <p className="mb-2 text-xl md:text-4xl">Your Ticket is Booked!</p>
        <span>You can download or Check your email for a copy</span>
      </div>

      <div>
        <img src="ticket-large.svg" alt="ticket image" />
      </div>

      <div className="flex w-full flex-col justify-between gap-x-6 gap-y-3 max-md:flex-col-reverse md:h-12 md:flex-row">
        <button className="hover:bg-primary flex-1 rounded-xl border border-[#24A0B5] text-[#24A0B5] transition-all duration-300 max-md:p-3">
          Book Another Ticket
        </button>
        <button className="w-full rounded-xl border border-[#24A0B5] bg-[#24A0B5] text-white transition-all duration-300 hover:bg-[#24A0B5]/70 max-md:p-3 md:flex-1">
          Download Ticket
        </button>
      </div>
    </div>
  );
};

export default Ready;
