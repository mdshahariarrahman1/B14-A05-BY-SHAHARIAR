import { use, useState } from "react";
import type { DavType } from "../davStackType";
import MainCard from "./MainCard";
import Selected from "./selected";

interface DavPromiseType {
  DavStack: Promise<DavType[]>;
}

const Main = ({ DavStack }: DavPromiseType) => {
  const davStack = use(DavStack);

  const [davStackSelected, setdavStackSelected] = useState<DavType[]>([])

  return (
    <>
    <div className="w-full md:container md:mx-auto grid grid-cols-12 gap-5 mb-22 px-4 md:px-0">
      <div className="  col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-5">
        {davStack.map((dav) => {
          return <MainCard key={dav.id} dav={dav} davStackSelected={davStackSelected} setdavStackSelected={setdavStackSelected} />;
        })}
      </div>

      <div className=" col-span-12 md:col-span-3">
        <Selected davStackSelected={davStackSelected} setdavStackSelected={setdavStackSelected} />
      </div>

    </div>
    </>
  );
};

export default Main;
