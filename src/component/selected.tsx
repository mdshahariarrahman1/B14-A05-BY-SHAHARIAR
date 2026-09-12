import type { DavType } from "../davStackType";

interface SelectedType {
  davStackSelected: DavType[];
}

const Selected = ({ davStackSelected }: SelectedType) => {
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

        <div className="mt-4 space-y-2">
          {davStackSelected.map((dav) => (
            <div
              key={dav.id}
              className="flex items-center gap-3 rounded-lg bg-slate-50 p-3"
            >
              <img
                src={dav.icon}
                alt={dav.name}
                className="h-8 w-8 object-contain"
              />

              <p className="text-sm font-medium text-slate-700">{dav.name}</p>
            </div>
          ))}
        </div>
      </div>
      </>
    );
  }
};

export default Selected;
