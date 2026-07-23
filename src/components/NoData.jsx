import noDataImage from "../assets/nodata.png";

export default function NoData() {
  return (
    <section className="w-full h-[100vh] bg-[#f6f2fe] flex justify-center items-center">
      <div className="w-1/2 h-auto">
        <img src={noDataImage} alt="No data." />
      </div>
    </section>
  );
}
