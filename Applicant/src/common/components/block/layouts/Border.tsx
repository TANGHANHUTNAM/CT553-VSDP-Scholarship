const Border = ({ color }: { color: string }) => {
  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className="min-h-[12px] w-full rounded-t-lg"
    />
  );
};

export default Border;
