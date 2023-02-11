import { Dimensions } from "react-native";

import { isWeb } from "../utils";

export const ElementsText = {
  AUTOPLAY: "AutoPlay",
};

export const window = isWeb
  ? {
      ...Dimensions.get("window"),
      width: 375,
    }
  : Dimensions.get("window");
