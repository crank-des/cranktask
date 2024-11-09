// import { ChangeEvent, FC, memo } from "react";
// import { connect } from "react-redux";
// import { showsFetchAction } from "../actions";
// import { Shows } from "../Models/Shows";
// import { showQuerySelector, ShowSelector } from "../selector";
// import { State } from "../store";
// import ShowRow from "./ShowRow";

// type ShowListProps = {
//   query: string;
//   shows: Shows[];
//   fetchShow: (query: string) => void;
// };

// const ShowList: FC<ShowListProps> = ({ shows, fetchShow, query }) => {
//   const onhandleChange = (event: ChangeEvent<HTMLInputElement>) => {
//     fetchShow(event.target.value);
//   };

//   return (
//     <div>
//       <input
//         placeholder="Search"
//         value={query}
//         className="rounded-md border"
//         onChange={onhandleChange}
//       />
//       <div className=" p-4 ">
//         {shows.map((t) => (
//           <ShowRow show={t} key={t.id} />
//         ))}
//       </div>
//     </div>
//   );
// };

// ShowList.defaultProps = {};

// const mapStateToProps = (s: State) => ({
//   shows: ShowSelector(s),
//   query: showQuerySelector(s),
// });
// const mapDispatchToPorps = {
//   fetchShow: showsFetchAction,
// };

// export default connect(mapStateToProps, mapDispatchToPorps)(memo(ShowList));

// ShowList.tsx
import React from 'react';

const ShowList = () => {
  return <div>Show List</div>;
};

export default ShowList;
