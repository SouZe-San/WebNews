import loading01 from "../../assets/loading/loading.gif";

const Spinner = () => {
  return (
    <div className=" h-[20vh]">
      <img style={{ height: "inherit" }} src={loading01} alt="loading" />
    </div>
  );
};

export default Spinner;
