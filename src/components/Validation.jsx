import { IoClose } from "react-icons/io5";

export default function ConfirmModal({
  title,
  message,
  onOk,
  onClose,
  Okay,
  Close,
}) {
  return (
    <section className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="w-[90%] max-w-[400px] bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center border-b px-5 py-2">
          <h2
            className={
              message === "Are you sure you want to delete this expense?"
                ? "text-sm text-red-500 font-bold"
                : "text-lg font-bold"
            }
          >
            {title}
          </h2>

          <IoClose
            className="text-2xl cursor-pointer hover:text-red-500"
            onClick={onClose}
          />
        </div>

        {/* Body */}
        <div className="px-5 py-3">
          <p className="text-gray-600 leading-7">{message}</p>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t px-5 py-2">
          <button
            className="px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 cursor-pointer"
            onClick={onClose}
          >
            {Close}
          </button>

          <button
            className={
              message === "Are you sure you want to delete this expense?"
                ? "px-5 py-2 rounded-lg bg-[#9478e5] text-white hover:bg-red-700 cursor-pointer bg-red-500"
                : "px-5 py-2 rounded-lg bg-[#9478e5] text-white hover:bg-[#7c5fd3] cursor-pointer"
            }
            onClick={onOk}
          >
            {Okay}
          </button>
        </div>
      </div>
    </section>
  );
}
