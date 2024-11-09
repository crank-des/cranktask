import { FC, memo } from "react";
import { showsFetchAction } from "../actions";
import { Shows } from "../Models/Shows";

type ShowRowProps = {
  show: Shows;
};

const ShowRow: FC<ShowRowProps> = ({ show }) => {
  return (
    <div className="flex bg-slate-400 rounded-md p-4 border mt-4  ">
      <div className="shrink-0">
        <img
          className=" h-36 w-30"
          src={
            show.image?.medium ||
            "https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png"
          }
        />
      </div>
      <div className="ml-4">
        <h1>{show.name}</h1>
        <p>{show.summary}</p>
      </div>
    </div>
  );
};

ShowRow.defaultProps = {};

export default memo(ShowRow);
