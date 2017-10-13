
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
    ActivityIndicator
} from 'react-native';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class NewsPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <ActivityIndicator color="#0000ff" />
            </View>
        )
    }
}
NewsPage.navigationOptions = {
    title: '新闻'
};


const mapStateToProps = ((state) => {
    return {
        state
    }
});


export default connect(
    mapStateToProps
)(NewsPage);