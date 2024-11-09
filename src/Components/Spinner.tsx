import { FC, memo } from "react";

type SpinnerProps = {};

const Spinner: FC<SpinnerProps> = (props) => {
 return <>
 <div className="border-l-2 border-blue-400 animate-spin"></div>
 </>;
};

Spinner.defaultProps = {};

export default memo(Spinner);