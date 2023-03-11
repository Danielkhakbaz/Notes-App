import LayoutItem from "./layout-item";

const LayoutContainer = ({ notes }) => {
  return (
    <>
      <div
        className="grid gap-3"
        style={{
          gridTemplateColumns: "repeat(auto-fill, 300px)",
          justifyContent: "center",
        }}
      >
        <LayoutItem notes={notes} />
      </div>
    </>
  );
};

export default LayoutContainer;
