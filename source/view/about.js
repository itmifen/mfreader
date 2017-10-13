
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
            <View style={{padding:15}}>
                <Text style={{lineHeight:25}}>mfreader是基于博客园个人博客,使用react native开发的一个开源博客系统.项目会持续维护,包括个人博客,博客园博客,新闻,并且会完善评论点赞相关功能,此版本为原始版本,后期会逐渐完成剩余功能.</Text>
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