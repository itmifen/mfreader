import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "indicatorContainer": {
        "backgroundColor": "#673AB7",
        "height": 48,
        "paddingTop": 0,
        "paddingBottom": 0,
        "bottom": 16
    },
    "tabItem": {
        "justifyContent": "center",
        "marginTop": 0,
        "marginRight": 15,
        "marginBottom": 0,
        "marginLeft": 15
    },
    "selectedTabItem": {
        "justifyContent": "center",
        "borderBottomWidth": 2,
        "borderColor": "#ffffff",
        "borderStyle": "solid",
        "marginTop": 0,
        "marginRight": 15,
        "marginBottom": 0,
        "marginLeft": 15
    },
    "tabTxt": {
        "fontSize": 15,
        "color": "#ffffff"
    },
    "selectedTabTxt": {
        "fontSize": 15,
        "color": "#ffffff",
        "fontWeight": "bold",
        
    }
});