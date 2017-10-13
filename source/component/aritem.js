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
    Image
} from 'react-native';

import {
    Card
} from 'react-native-elements'

import {filterhtml,cutstr} from '../common/tools'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import * as PostAction from '../action/blog';
import styles from '../style/aritemstyle';
import { dataApi, appinfo } from '../config';

class AritemComponent extends Component {


    constructor(props) {
        super(props);
    }


    onselect() {
        requestAnimationFrame(() => {
            this.props.onSelect(this.props.itemdata)
        })
    }


    render() {
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                underlayColor="#cccccc"
                onPress={(e) => {
								this.onselect();
							}}>
                <View>
                    <Card
                        title={this.props.itemdata?this.props.itemdata.Title:''}
                        titleStyle={{textAlign:'left'}}>

                        <View style={styles.atitemdateview}>
                            <View>
                                <View style={styles.atitemcontent}>
                                    <Text
                                        style={styles.atitletext}>{this.props.itemdata ? this.props.itemdata.Description : ''}</Text>
                                </View>
                                <View style={styles.atitetimeview}>
                                    <View><Text
                                        style={styles.atitemdatetext}>发布于:{this.props.itemdata ? this.props.itemdata.PostDate : ''}</Text></View>
                                    <View style={styles.atitetimetext}><Text
                                        style={styles.atitemdatetext}>浏览({this.props.itemdata ? this.props.itemdata.ViewCount : ''})</Text></View>
                                </View>
                            </View>
                        </View>

                    </Card>
                </View>
            </TouchableOpacity>

        );
    }
}


export default AritemComponent;
