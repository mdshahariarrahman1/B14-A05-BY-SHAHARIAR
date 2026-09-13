import { type Dispatch, type SetStateAction } from "react";
import type { DavType } from "../davStackType";
import { Bounce, toast } from "react-toastify";

interface DavCardType {
  dav: DavType;
  davStackSelected: DavType[];
  setdavStackSelected: Dispatch<SetStateAction<DavType[]>>;
}

const MainCard = ({
  dav,
  davStackSelected,
  setdavStackSelected,
}: DavCardType) => {
  const selected = davStackSelected.filter((item) => item.id === dav.id);

  const isSelected = selected.length > 0;

  const handelSelected = () => {
    setdavStackSelected([...davStackSelected, dav]);
    // toast.success(`${dav.name} added to your stack!`);
    toast.success(`${dav.name} added to your stack!`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <>
      <div
        className={`flex ${isSelected === true ? "border border-pink-400 shadow shadow-pink-300" : ""} h-full flex-col rounded-2xl border border-[#F1F5F9] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
      >
        {/* Icon + Badge */}
        <div className="mb-5 flex items-start justify-between">
          <div className="flex h-10 w-10 items-center justify-center">
            <img
              src={dav.icon}
              alt={dav.name}
              className="h-8 w-8 object-contain"
            />
          </div>

          <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-500">
            {dav.badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-2 text-xl font-bold text-slate-900">{dav.name}</h3>

        {/* Description */}
        <p className="min-h-18 text-sm leading-6 text-slate-500">
          {dav.description}
        </p>

        {/* Divider */}
        <div className="my-4 border-t border-slate-100"></div>

        {/* Information */}
        <div className="mb-5 flex items-center justify-between gap-2 text-xs">
          <span className="rounded-md bg-slate-50 px-2 py-1 font-medium text-slate-600">
            {dav.category}
          </span>

          <span className="text-slate-500">{dav.difficulty}</span>

          <span className="flex items-center gap-1 font-medium text-slate-700">
            <span className="text-amber-400">★</span>
            {dav.rating}
          </span>
        </div>

        {/* Button */}
        <button
          onClick={handelSelected}
          className={`mt-auto w-full rounded-lg ${isSelected === true ? "bg-pink-200 border text-pink-500 font-bold" : "text-[#FFFFFF]"} bg-[#080d1d] py-3 text-sm font-medium transition  cursor-pointer`}
          disabled={isSelected === true ? true : false}
        >
          {isSelected ? (
            <>
              <i className="fa-solid fa-check"></i> Add to Stack
            </>
          ) : (
            "Add to Stack"
          )}
        </button>
      </div>
    </>
  );
};

export default MainCard;
