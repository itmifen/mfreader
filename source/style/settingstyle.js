import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "content": {
        "backgroundColor": "#673AB7",
        "height": 48,
        "paddingTop": 0,
        "paddingBottom": 0,
        "bottom": 64
    }
});