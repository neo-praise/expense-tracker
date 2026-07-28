import noDataImage from "../assets/nodata.png";

export default function NoData() {
  return (
    <section className="w-full h-auto bg-[#f6f2fe] flex justify-center items-center]">
      <div className="w-[60%] md:w-[25%] md:flex justify-center items-center">
        <img src={noDataImage} alt="No data." />
      </div>
    </section>
  );
}
