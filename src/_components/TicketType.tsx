import { useFormContext } from "../_contexts/FormContext";

interface TicketTypes {
  name: string;
  amount: number | string;
  capacity: number;
}

const ticketTypes: TicketTypes[] = [
  {
    name: "regular access",
    amount: "free",
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

const TicketType: React.FC = () => {
  const {
    dispatch,
    state: { ticketType },
  } = useFormContext();

  const handleTicketData = (
    ticketPrice: string | number,
    ticketType: string,
  ) => {
    dispatch({ type: "TICKET_PRICE", payload: ticketPrice });
    dispatch({ type: "TICKET_TYPE", payload: ticketType });
  };

  return (
    <div
      aria-labelledby="event ticket type"
      className="border-border space-y-4 rounded-2xl border p-4"
    >
      <span>Select Ticket Type:</span>
      <ul className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        {ticketTypes.map((ticket) => (
          <li
            key={ticket.name}
            className={`border-border flex cursor-pointer flex-col justify-between gap-x-2 rounded-xl border p-2 transition-all duration-200 hover:bg-[#197686] ${ticket.name === ticketType && "bg-[#197686]"}`}
            onClick={() => handleTicketData(ticket.amount, ticket.name)}
          >
            <button
              aria-labelledby={"ticket amount"}
              className={`h-[38px] text-start text-xl font-semibold`}
            >
              {`${typeof ticket.amount === "string" ? "Free" : "$" + ticket.amount}`}
            </button>
            <div className="flex flex-col gap-y-2">
              <span aria-labelledby="ticket name" className="uppercase">
                {ticket.name}
              </span>
              <span className="text-[14px]" aria-labelledby="ticket capacity">
                {ticket.capacity} left!
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketType;
