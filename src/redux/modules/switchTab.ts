import { TabsEnum } from "../../utils/global.enum";
import { IgeneralState } from "../initialState/general";

export default function (state: IgeneralState, payload: { payload: TabsEnum }) {
  state.activeTab = payload.payload;
}
