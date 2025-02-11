const TicketTitle = () => {
  return (
    <div className="from-secondary to-primary flex flex-col items-center gap-y-3 rounded-2xl border border-[#07373F] bg-linear-150 p-3 md:p-6">
      <p className="text-2xl font-bold md:text-[42px]">Techember Fest "25</p>
      <div className="flex flex-col gap-y-2 text-center">
        <span className="sm:max-w-[340px]">
          Join us for an unforgettable experience at [Event Name]! Secure your
          spot now.
        </span>
        <span>📍 [Event Location] || March 15, 2025 | 7:00 PM</span>
      </div>
    </div>
  );
};

export default TicketTitle;
