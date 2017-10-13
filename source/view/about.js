
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

class AboutPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>ABOUT</Text>
            </View>
        )
    }
}
    AboutPage.navigationOptions = {
    title: '关于'
};


const mapStateToProps = ((state) => {
    return {
        state
    }
});


export default connect(
    mapStateToProps
)(AboutPage);