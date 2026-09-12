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
    <div className="container mx-auto grid grid-cols-12 gap-5 mb-22">
      <div className="  col-span-9 grid grid-cols-3 gap-5">
        {davStack.map((dav) => {
          return <MainCard key={dav.id} dav={dav} davStackSelected={davStackSelected} setdavStackSelected={setdavStackSelected} />;
        })}
      </div>

      <div className=" col-span-3">
        <Selected davStackSelected={davStackSelected} />
      </div>

    </div>
    </>
  );
};

export default Main;
