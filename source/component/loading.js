import React, {
    Component
} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator
} from 'react-native';

class LoadingComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{paddingTop:10,marginBottom:10}}>
                <ActivityIndicator color="#cccccc" size="large" />
            </View>
        )
    }
}

export default LoadingComponent;


