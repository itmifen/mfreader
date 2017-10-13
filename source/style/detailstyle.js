import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "detailtitleview":{
        alignItems:"flex-start",
        marginBottom:15
    },
    "detailtitletext":{
        lineHeight:24,
        fontSize:22,
        fontWeight:"bold"
    },
    detaildateview:{
        flex:1,
        alignItems:"flex-start",
        padding:8
    },
    "detaildatetext":{
        lineHeight:24,
        fontSize:14,
    },
    detailinfoview:{
        flex:1,
        padding:8
    },
    detailinfotext:{
        lineHeight:18,
        paddingLeft:12,
    },
    detailcontent:{
        backgroundColor:"#ffffff",
        padding:10,
        flex:1
    }
});