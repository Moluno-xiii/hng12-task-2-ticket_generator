import { useState } from "react";

interface Props {
  name?: string;
}

interface TicketTypes {
  name: string;
  amount?: number;
  capacity: number;
}

const ticketTypes: TicketTypes[] = [
  {
    name: "regular access",
    capacity: 20,
  },
  {
    name: "vip access",
    amount: 50,
    capacity: 20,
  },
  {
    name: "vvip access",
    amount: 150,
    capacity: 20,
  },
];

const TicketType: React.FC<Props> = ({ name }) => {
  const [selectedTicket, setSelectedTicket] = useState("regular access");

  const handleSelectTicket = (ticketName: string) => {
    setSelectedTicket(ticketName);
  };
  return (
    <div className="border-border space-y-4 rounded-2xl border p-4">
      <span>Select Ticket Type: {name}</span>
      <ul className="mt-4 grid gap-4 md:grid-cols-2">
        {ticketTypes.map((ticket) => (
          <li
            key={ticket.name}
            className={`border-border flex cursor-pointer flex-row justify-between gap-x-2 rounded-xl border p-2 transition-all duration-200 hover:bg-[#197686] ${ticket.name === selectedTicket && "bg-[#197686]"}`}
            onClick={() => handleSelectTicket(ticket.name)}
          >
            <div className="flex flex-col gap-y-2">
              <span className="uppercase">{ticket.name}</span>
              <span className="text-[14px]">{ticket.capacity} left!</span>
            </div>
            <button
              className={`p- h-[38px] w-20 rounded-md border border-[#2ba4b9] pr-2 text-end text-xl font-semibold ${ticket.name === selectedTicket ? "bg-[#0E464F]" : "bg-[#0E464F]/40"}`}
            >
              {`${ticket.amount ? "$" + ticket.amount : "Free"}`}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketType;
