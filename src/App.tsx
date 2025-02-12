import NavHeader from "./_components/NavHeader";
import Tab from "./_components/Tab";
import TicketSelection from "./_components/TicketSelection";
import AttendeeDetails from "./_components/AttendeeDetails";
import Ready from "./_components/Ready";
import { useTabContext } from "./_contexts/TabContext";

interface TabsTypes {
  title: string;
  number: number;
  element: React.ReactElement;
}

const tabs: TabsTypes[] = [
  {
    title: "ticket selection",
    number: 1,
    element: <TicketSelection />,
  },
  {
    title: "attendee details",
    number: 2,
    element: <AttendeeDetails />,
  },
  {
    title: "ready",
    number: 3,
    element: <Ready />,
  },
];
function App() {
  const { activeTab } = useTabContext();
  return (
    <div className="from-primary to-secondary min-h-dvh space-y-10 bg-linear-to-b px-3 py-2 text-white md:px-5 md:py-5">
      <NavHeader />
      {tabs.map(
        (tab) =>
          activeTab === tab.number && (
            <Tab title={tab.title}>{tab.element}</Tab>
          ),
      )}
    </div>
  );
}

export default App;
