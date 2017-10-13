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
    Image,
    ListView,
    RefreshControl,
    InteractionManager,
    ActivityIndicator
} from 'react-native';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { NavigationActions } from 'react-navigation';


import basestyles from '../style/basestyle';
import styles from '../style/homestyle';

import Aritem from '../component/aritem';
import  LoadingComponent from '../component/loading'

import * as PostAction from '../action/blog';
import * as Page from '../view';

import { accessInfo,dataApi } from '../config';


var ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});


class RecommendBlog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: ds,
            pageindex: 1,
        };
    }


    componentDidMount() {
        this.fetchPostData();

    }


    componentWillReceiveProps(props) {
        let rows = [];
        if ((props.list) && (props.list.items)) {
            rows = props.list.items;
            this.setState({
                dataSource: ds.cloneWithRows(rows)
            });
        }
    }


    fetchPostData(pageindex) {
        const post = this.props;
        if((!post.list.isFetching)&&(!post.list.isLoadAll)) {
            const postAction = this.props.actions;
            if (!pageindex) {
                pageindex = 1;
            }
            postAction.getrecommendBlogList(pageindex);
            this.setState({pageindex: this.state.pageindex + 1});
        }
    }

//下拉加载更多
    loadmore() {
        this.fetchPostData(this.state.pageindex);
    }


//LIST中的每一行
    _renderRow(rowData, rowID) {
        if (rowData && rowData.Title) {
            const {Onpress} = this.props;
            return (
                <Aritem
                    itemdata={rowData}
                    onSelect={() => Onpress(rowData) }/>

            )
        } else {
            return null
        }

    }

    renderfooter()
    {
        const post = this.props;
        if(post.list.isFetching)
        {
            return (
                <LoadingComponent />
            )
        }
        else {
            return null;
        }
    }



    render() {

        const post = this.props;
        const {dataSource}=this.state;

        return (
            <View>
                <ListView
                    dataSource={dataSource}
                    renderRow={this._renderRow.bind(this)}
                    enableEmptySections={true}
                    onEndReached={this.loadmore.bind(this) }
                    renderFooter={this.renderfooter.bind(this)}
                />
            </View>
        )

    }

}


const mapStateToProps = ((state) => {
    return {
        list: state.getrecommendBlogList
    }
});

const mapDispatchToProps = (dispatch) => ({
    Onpress: (item) =>dispatch(
        NavigationActions.navigate({routeName: 'Detail', params: {data: item}})
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(RecommendBlog);
