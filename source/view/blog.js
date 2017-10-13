
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

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import RecommendBlog from '../component/recommendblog';

import * as PostAction from '../action/blog';


class BlogPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {postAction,post} = this.props;

        return (
            <RecommendBlog {...post} actions={postAction}/>
        );
    }
}
BlogPage.navigationOptions = {
    title: 'Blog'
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



export default connect(
    mapStateToProps,mapDispatchToProps
)(BlogPage);