const TicketTitle = () => {
  return (
    <div
      className="from-secondary to-primary flex flex-col items-center gap-y-3 rounded-2xl border border-[#07373F] bg-linear-150 p-3 md:p-6"
      aria-labelledby="event details"
    >
      <p
        aria-labelledby="event name"
        className="font-rage text-2xl font-bold md:text-[62px]"
      >
        Techember Fest "25
      </p>
      <div className="flex flex-col gap-y-2 text-center">
        <span className="font-roboto sm:max-w-[340px]">
          Join us for an unforgettable experience at [Event Name]! Secure your
          spot now.
        </span>
        <div className="flex flex-col max-md:gap-y-2 md:flex-row">
          <span>📍 [Event Location]{""}</span>{" "}
          <span className="mx-4 hidden md:inline-block">||</span>
          <span aria-labelledby="event time">March 15, 2025 | 7:00 PM</span>
        </div>
      </div>
    </div>
  );
};

export default TicketTitle;
