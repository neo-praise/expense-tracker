import noDataImage from "../assets/datanotfound.png";

export default function DataNotFound() {
  return (
    <section className="w-full h-[100vh] bg-[#f6f2fe] flex justify-center items-center">
      <div className="w-1/2 h-auto">
        <img src={noDataImage} alt="No data." />
      </div>
    </section>
  );
}
