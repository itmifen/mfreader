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
    Dimensions

} from 'react-native';

import { BackHandler } from "react-native";

import basestyles from '../style/basestyle';
import styles from '../style/homestyle';

import Aritem from '../component/aritem';
import MyBlog from '../component/myblog';

import * as PostAction from '../action/blog';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class HomePage extends Component {

    constructor(props) {
        super(props);
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }


    render() {
        const {postAction,post} = this.props;

        return (
            <MyBlog {...post} actions={postAction}/>
        );
    }

}

HomePage.navigationOptions = {
    title: 'IT米粉'
};

const mapStateToProps = ((state) => {
    return {
        post: {
            list: state.post
        },
        nav: state.nav
    }
});

const mapDispatchToProps = ((dispatch) => {
    return {
        postAction: bindActionCreators(PostAction, dispatch)
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);


