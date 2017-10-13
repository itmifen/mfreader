import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "navBar": {
        "backgroundColor": "#512DA8",
        "height": 64,
        "flex": 1,
        "flexDirection": "row"
    },
    "navBarTitleView": {
        "flex": 1,
        "justifyContent": "center"
    },
    "navBarTitleText": {
        "color": "#ffffff",
        "fontSize": 17,
        "fontWeight": "bold"
    },
    "navBarLeftButton": {
        "flex": 1,
        "justifyContent": "center"
    },
    "navBarLeftButtontxt": {
        "color": "#ffffff",
        "fontSize": 17
    },
    "navBarRightButton": {
        "justifyContent": "flex-end"
    },
    "navBarRightButtontxt": {
        "color": "#ffffff",
        "fontSize": 17
    }
});