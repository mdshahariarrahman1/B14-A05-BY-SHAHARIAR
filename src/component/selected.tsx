import type { Dispatch, SetStateAction } from "react";
import type { DavType } from "../davStackType";
import { IoCloseSharp } from "react-icons/io5";

interface SelectedType {
  davStackSelected: DavType[];
  setdavStackSelected: Dispatch<SetStateAction<DavType[]>>;
}

const Selected = ({ davStackSelected, setdavStackSelected }: SelectedType) => {
  const handelRemover = (id: string) => {
    const newSelected = davStackSelected.filter((dav) => dav.id !== id);

    setdavStackSelected(newSelected);
  };

  const handelRemoveAll = () => {
    setdavStackSelected([]);
  };

  if (davStackSelected.length === 0) {
    return (
      <>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-bold text-slate-900">Your Stack</h3>

          <p className="mt-1 text-xs leading-5 text-slate-400">
            No Technologies selected yet.
          </p>

          <div className="mt-4 flex h-16.75 items-center justify-center rounded-xl border border-dashed border-slate-200">
            <p className="text-xs text-slate-400">Your stack is empty.</p>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-bold text-slate-900">Your Stack</h3>
          <p className="mt-1 text-xs leading-5 text-slate-400">
            {davStackSelected.length} Technology Selected
          </p>

          <div className="mt-4 space-y-2 pb-13">
            {davStackSelected.map((dav) => (
              <div
                key={dav.id}
                className="flex justify-between items-center gap-3 rounded-lg bg-slate-50 p-3"
              >
                <div className="flex items-center gap-3 rounded-lg bg-slate-50 p-3">
                  <img
                    src={dav.icon}
                    alt={dav.name}
                    className="h-8 w-8 object-contain"
                  />

                  <p className="text-sm font-medium text-slate-700">
                    {dav.name}
                  </p>
                </div>
                <div className=" pr-2.5">
                  <button
                    onClick={() => handelRemover(dav.id)}
                    className=" cursor-pointer text-red-500 hover:text-pink-500"
                  >
                    <IoCloseSharp className=" text-3xl" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        <div className="text-center">
          <button
            onClick={handelRemoveAll}
            className=" py-2 px-8 md:px-29 border border-[#D82C20] rounded-lg text-[14px] text-[#D82C20] font-semibold text-center cursor-pointer transition duration-300 hover:shadow shadow-[#D82C20]"
          >
            Remove All
          </button>
        </div>
        </div>
      </>
    );
  }
};

export default Selected;
