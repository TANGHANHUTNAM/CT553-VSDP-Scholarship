interface IBodyLayoutProps {
  children: React.ReactNode;
  classProp?: string;
}

const BodyLayout: React.FC<IBodyLayoutProps> = ({ children, classProp }) => {
  return (
    <div className={`${classProp}`}>
      <div className="mx-auto max-w-screen-xl">{children}</div>
    </div>
  );
};

export default BodyLayout;
