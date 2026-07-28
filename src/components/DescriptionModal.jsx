import { IoClose } from "react-icons/io5";

export default function DescriptionModal({
  description,
  onClose,
  error,
  expenses,
}) {
  return (
    <section className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="w-[90%] max-w-[350px] bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="w-full h-12 flex justify-between items-center px-4 border-b">
          <span className="font-bold text-lg">
            {error ? (
              <span className="text-red-700">Error!</span>
            ) : (
              "Description"
            )}
          </span>
          <IoClose
            className="text-2xl cursor-pointer hover:text-red-500"
            onClick={onClose}
          />
        </div>

        {/* Body */}
        <div className="w-full min-h-[120px] p-4">
          <p className="text-gray-600 leading-7">
            {description || <span className="text-red-700">{error}</span> ||
              "No description available."}
          </p>
        </div>

        {/* Footer */}
        <div className="w-full p-4 flex justify-end border-t">
          <button
            className="px-5 h-10 bg-[#b497f7] text-white rounded-lg hover:bg-[#9f7ff1] cursor-pointer"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </section>
  );
}
