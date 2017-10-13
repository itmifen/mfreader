/**
 * Created by joylee on 17/2/17.
 */

import React, {
    Component
} from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    Navigator,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    ListView,
    TimerMixin,
    InteractionManager,
    BackAndroid,
    NativeModules,
    ToastAndroid,
    Dimensions,
    WebView,
    Platform

} from 'react-native';
import {
    IndicatorViewPager,
    PagerTabIndicator
} from 'rn-viewpager';
import HTMLView from 'react-native-htmlview';
//import HTML from 'react-native-fence-html'

import styles from '../style/detailstyle';

import * as PostAction from '../action/blog';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { postCategory } from '../config/index';
import {createhtml} from '../common/tools'
import  LoadingComponent from '../component/loading'

import AutoHeightWebView from 'react-native-autoheight-webview';

const { width } = Dimensions.get('window');


class DetailPage extends Component {

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.fetchPostData();
    }


    fetchPostData() {
        const rowdata = this.props.navigation ? this.props.navigation.state.params : "";
        if (rowdata) {
            const postAction = this.props.postAction;
            if (rowdata) {
                postAction.getBlogDetail(rowdata.data.Id);
            }
        }
    }


    renderhtml() {

        const rowdata = this.props.navigation ? this.props.navigation.state.params : "";
        let htmlcontent = "";
        if (rowdata) {
            htmlcontent = createhtml(this.props.detail && this.props.detail[rowdata.data.Id] ? this.props.detail[rowdata.data.Id] : "");
            //htmlcontent = this.props.detail && this.props.detail[rowdata.data.Id] ? this.props.detail[rowdata.data.Id] : "";
        }

        if (htmlcontent && htmlcontent != "") {
            return (
                    <AutoHeightWebView
                        source={{html:htmlcontent}}
                        scalesPageToFit={Platform.OS === 'android' ? true : false}
                        style={{ width: Dimensions.get('window').width - 15 }}
                        enableAnimation={false}
                        startInLoadingState={true}
                    />

            )
        } else {
          return  (
              <LoadingComponent />
          )
        }
    }


    render() {
        const rowdata = this.props.navigation ? this.props.navigation.state.params : "";
        if (rowdata&&rowdata.data) {
            return (
                <ScrollView style={styles.detailcontent} >
                    <View>
                        <Text style={styles.detailtitletext}>{rowdata.data.Title}</Text>
                    </View>
                    { this.renderhtml() }
                </ScrollView>
            );
        }
    }


}

DetailPage.navigationOptions = {
    title: '详情'
};


const mapStateToProps = ((state) => {
    return {
        detail: state.getBlogDetailByID
    }
});



const mapDispatchToProps = (dispatch) => ({
    postAction: bindActionCreators(PostAction, dispatch)
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailPage);