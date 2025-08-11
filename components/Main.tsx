interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <div className="relative border-y">
      <div className="mx-auto max-w-5xl border-x px-4 py-6">{children}</div>
    </div>
  );
};

export default Main;
