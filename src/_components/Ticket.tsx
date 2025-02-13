import { useFormContext } from "../_contexts/FormContext";

const TechemberTicket = () => {
  const {
    state: { name, email, ticketType, quantity, specialRequest, imageUrl },
  } = useFormContext();
  const storedState = localStorage.getItem("formData");
  const stateObj = storedState ? JSON.parse(storedState) : null;

  return (
    <div className="flex items-center justify-center p-4">
      <div className="shape w-full max-w-md space-y-2 bg-[#71a7af]/20">
        <div className="bottom-right"></div>
        <div className="bottom-left"></div>
        <div className="mid-right"></div>
        <div className="mid-left"></div>
        <div className="">
          <div className="">
            <div
              id="inner-div"
              className="from-secondary via-primary relative m-2 space-y-6 rounded-2xl border border-[#24A0B5] bg-linear-150 to-[#24A0B5]/50 p-4 md:m-4 md:p-6"
            >
              <div className="flex flex-col items-center space-y-2 text-center">
                <h1 className="font-rage text-3xl font-bold tracking-wider text-white">
                  Techember Fest '25
                </h1>
                <div
                  className="space-y-1 text-gray-300"
                  aria-labelledby="event details"
                >
                  <p aria-labelledby="event location">
                    📍 04 Rumens road, Ikoyi, Lagos
                  </p>
                  <p aria-labelledby="event time">
                    🕐 March 15, 2025 | 7:00 PM
                  </p>
                </div>
              </div>

              <div className="2 flex flex-row items-center justify-center">
                <img
                  aria-labelledby="user image"
                  src={(imageUrl as string) || stateObj.imageUrl}
                  alt="user image"
                  className="size-[140px] rounded-2xl border-4 border-[#24a0b5] border-b-[#24a0b5]/50"
                />
              </div>

              <div className="bg-secondary flex flex-col gap-0 rounded-xl p-2 max-md:text-xs">
                <div className="grid grid-cols-2">
                  <div className="border-border border-r border-b p-2 text-center text-wrap">
                    <span className="text-[#fff]">Enter your name:</span>
                    <p
                      aria-labelledby="user's name"
                      className="text-center font-bold text-white capitalize"
                    >
                      {name || stateObj.name}
                    </p>
                  </div>
                  <div className="border-border border-b p-2">
                    <span className="text-[#fff]">Ticket for:</span>
                    <p
                      aria-labelledby="user's email"
                      className="h-fit w-full font-bold text-white"
                    >
                      {email || stateObj.email}
                    </p>
                  </div>
                  <div className="border-border border-r border-b p-2">
                    <span className="text-[#fff]">Ticket Type:</span>
                    <p
                      className="text-white uppercase"
                      aria-labelledby="ticket type"
                    >
                      {ticketType || stateObj.ticketType}
                    </p>
                  </div>
                  <div className="border-border border-b p-2">
                    <span className="text-[#fff]">Ticket for:</span>
                    <p
                      aria-labelledby="number of tickets"
                      className="font-bold text-white"
                    >
                      {quantity || stateObj.quantity}
                    </p>
                  </div>
                </div>
                <div className="p-2">
                  <span className="text-[#fff]">Special request?</span>
                  <p
                    aria-labelledby="user special request"
                    className="font-bold text-white"
                  >
                    {specialRequest || stateObj.specialRequest}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-border border-t-4 border-dashed">
          <div className="relative top-5 my-8 flex flex-row items-center justify-center rounded-lg px-5 max-md:p-2">
            <img
              src="bar-code-large.svg"
              className="h-full w-full"
              alt="bar code image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechemberTicket;
