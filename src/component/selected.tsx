const Selected = () => {
  return (
    <>
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h3 className="text-base font-bold text-slate-900">Your Stack</h3>

        <p className="mt-1 text-xs leading-5 text-slate-400">
          No technologies selected yet.
        </p>

        <div className="mt-4 flex h-16.75 items-center justify-center rounded-xl border border-dashed border-slate-200">
          <p className="text-xs text-slate-400">Your stack is empty.</p>
        </div>
      </div>
    </>
  );
};

export default Selected;
