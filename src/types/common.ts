import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../redux/store";

export type TDispatch = ThunkDispatch<RootState, void, any>;
