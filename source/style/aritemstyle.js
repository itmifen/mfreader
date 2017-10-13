import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "atitemview": {
        "flex": 1
    },
    "atitemcontent": {
            overflow:"hidden"
    },
    atitletext:{
        fontSize:15,
        lineHeight:22,
        height:90,
        color:"#757575",
        overflow:"hidden"
    },
    "atitemdate": {
        "paddingTop": 4,
        "alignItems": "flex-start"
    },
    "atitemdatetext": {
        "color": "#757575",
        "lineHeight": 22
    },
    "atitemleftview": {
        width:65
    },

    "atitemimage": {
        borderRadius:1,
        width: 50,
        height: 50
    },

    atitemdateview:{
        flexDirection:'row',
    },
    atitemdatetext:{
        color:"#787878",
        fontSize:12,
        marginTop:4
    },
    atitetimeview:{
        flexDirection:'row',
        marginTop: 8,
    },
    atitetimetext:{
       paddingLeft:8
    },
});
