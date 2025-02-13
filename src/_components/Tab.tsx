import { useTabContext } from "../_contexts/TabContext";
import ProgressBar from "./ProgressBar";

interface Props {
  title: string;
  children: React.ReactNode;
}

const Tab: React.FC<Props> = ({ title, children }) => {
  const { activeTab: tabNumber } = useTabContext();
  const tabPercentage = (tabNumber / 3) * 100;
  return (
    <div
      className="border-border mx-auto flex max-w-[700px] flex-col gap-y-5 rounded-4xl border bg-[#041E23] p-4 md:p-12"
      aria-labelledby="ticket selection form"
    >
      {/* <div
      className="border-border bg-secondary/20 mx-auto flex max-w-[700px] flex-col gap-y-5 rounded-4xl border p-4 md:bg-[#041E23] md:p-12"
      aria-labelledby="ticket selection form"
    > */}
      <div className="flex flex-col gap-y-1">
        <div className="test flex flex-row justify-between">
          <span
            aria-labelledby="form title"
            className="text-2xl capitalize md:text-[32px]"
          >
            {title}
          </span>
          <span aria-labelledby="form step number">Step {tabNumber}/3</span>
        </div>
        <ProgressBar color="#24A0B5" value={tabPercentage} />
      </div>

      <div>{children}</div>
    </div>
  );
};

export default Tab;
