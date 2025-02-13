import { useFormContext } from "../_contexts/FormContext";
import { useTabContext } from "../_contexts/TabContext";
import TicketTitle from "./TicketTitle";
import TicketType from "./TicketType";

const TicketSelection = () => {
  const { dispatch } = useFormContext();
  const { onNextTab } = useTabContext();

  const options = Array.from({ length: 20 }, (_, index) => index + 1);
  return (
    <div className="md:border-border font-roboto space-y-8 rounded-4xl md:border md:bg-[#08252B] md:p-8">
      <TicketTitle />

      <div className="bg-secondary h-1"></div>

      <TicketType />

      <div className="space-y-2">
        <div className="mb-4 flex flex-col gap-y-2">
          <label>Number of Tickets</label>
          <select
            aria-labelledby="ticket number selection"
            className="border-border ml-2 cursor-pointer rounded-md border p-3 px-2"
            onChange={(e) =>
              dispatch({
                type: "TICKET_QUANTITY",
                payload: Number(e.target.value),
              })
            }
          >
            {options.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className="flex h-12 flex-col justify-between gap-x-6 gap-y-3 max-md:flex-col-reverse md:flex-row">
          <button
            onClick={() => dispatch({ type: "RESET" })}
            aria-labelledby="cancel form input button"
            className="hover:bg-primary flex-1 rounded-xl border border-[#24A0B5] text-[#24A0B5] transition-all duration-300 max-md:p-3"
          >
            Cancel
          </button>
          <button
            onClick={onNextTab}
            aria-labelledby="next form button"
            className="w-full rounded-xl border border-[#24A0B5] bg-[#24A0B5] text-white transition-all duration-300 hover:bg-[#24A0B5]/70 max-md:p-3 md:flex-1"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketSelection;
