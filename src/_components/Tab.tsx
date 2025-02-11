interface Props {
  title: string;
  tabNumber: number;
  children: React.ReactNode;
}

const Tab: React.FC<Props> = ({ title, tabNumber, children }) => {
  return (
    <div className="border-border mx-auto flex max-w-[700px] flex-col gap-y-5 rounded-4xl border bg-[#041E23] md:p-12">
      <div className="flex flex-col gap-y-1">
        <div className="flex flex-row justify-between">
          <span className="text-[32px] capitalize">{title}</span>
          <span>Step {tabNumber}/3</span>
        </div>
        <div className="bg-secondary h-1"></div>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default Tab;
