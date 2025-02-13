import { useFormContext } from "../_contexts/FormContext";
import "./ticket.css";

const TechemberTicket = () => {
  const {
    state: { name, email, ticketType, quantity, specialRequest, imageUrl },
  } = useFormContext();
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md space-y-2">
        <div className="relative">
          <div className="absolute inset-0"></div>

          <div className="px-7 py-10">
            <div
              id="inner-div"
              className="from-secondary via-primary relative space-y-6 rounded-2xl border border-[#24A0B5] bg-linear-150 to-[#24A0B5]/50 p-6"
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

              <div className="rounded-lg p-2">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <img
                    aria-labelledby="user image"
                    src={(imageUrl as string) || "/user-image.svg"}
                    alt="user image"
                    className="h-full w-full"
                  />
                </div>
              </div>

              <div className="bg-secondary grid grid-cols-1 gap-0 rounded-xl p-2 max-md:text-xs">
                <div className="grid grid-cols-2">
                  <div className="border-border border-r border-b p-2">
                    <span className="text-gray-500">Enter your name:</span>
                    <p
                      aria-labelledby="user's name"
                      className="font-bold capitalize"
                    >
                      {name || " Avi Chukwu"}
                    </p>
                  </div>
                  <div className="border-border border-b p-2">
                    <span className="text-gray-500">Ticket for:</span>
                    <p aria-labelledby="user's email" className="font-bold">
                      {email || "User@email.com"}
                    </p>
                  </div>
                  <div className="border-border border-r border-b p-2">
                    <span className="text-gray-500">Ticket Type:</span>
                    <p className="uppercase" aria-labelledby="ticket type">
                      {ticketType || "VIP"}
                    </p>
                  </div>
                  <div className="border-border border-b p-2">
                    <span className="text-gray-500">Ticket for:</span>
                    <p aria-labelledby="number of tickets" className="">
                      {quantity || "1"}
                    </p>
                  </div>
                </div>
                <div className="p-2">
                  <span className="text-gray-500">Special request?</span>
                  <p aria-labelledby="user special request">
                    {specialRequest ||
                      " Nil? Or the users sad story they write in there gets this whole space, Max of three rows."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-32">
          <div className="absolute inset-0">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 400 150"
              preserveAspectRatio="none"
            >
              <path
                d="M40,0 C40,0 80,0 120,0
                   C360,0 360,0 360,0
                   C360,0 400,40 400,40
                   L400,110 C400,110 360,150 360,150
                   L40,150 C40,150 0,110 0,110
                   L0,40 C0,40 40,0 40,0 Z"
                fill="none"
                stroke="#24A0B5"
                strokeWidth="2"
                className="h-full w-full"
              />
            </svg>
          </div>

          <div className="absolute inset-4">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 400 150"
              preserveAspectRatio="none"
            >
              <path
                d="M35,0 C35,0 75,0 115,0
                   C365,0 365,0 365,0
                   C365,0 400,35 400,35
                   L400,115 C400,115 365,150 365,150
                   L35,150 C35,150 0,115 0,115
                   L0,35 C0,35 35,0 35,0 Z"
                fill="none"
                stroke="#24A0B5"
                strokeWidth="2"
                className="h-full w-full"
              />
            </svg>
          </div>

          <div className="relative top-5 my-8 flex h-20 flex-row items-center justify-center rounded-lg max-md:p-2">
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
