import React, {
	Component
} from 'react';


import {
	ToastAndroid
} from 'react-native';

import { connect } from 'react-redux';
import { BackHandler } from "react-native";
import { addNavigationHelpers, TabNavigator,StackNavigator,NavigationActions } from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { getToken } from '../service/authorization';



import * as Page from '../view';

//tab页面
const HomeNavigator = TabNavigator({
	Home: { screen: Page.Home},
	Blog: { screen: Page.Blog},
	//News: { screen: Page.News},
	About: { screen: Page.About }
}, {
	tabBarPosition: 'bottom',
	animationEnabled: false,
	tabBarOptions: {
		showIcon: true,
		indicatorStyle: {
			height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
		},
		labelStyle: {
			fontSize: 10, // 文字大小
		},
		showLabel:false
	}
});

//页面
export const MainNavigator = StackNavigator({
	Main: { screen:HomeNavigator},
	Detail:{screen:Page.Detail}
});

//首页navigator设置
Page.Home.navigationOptions = {
	title:"IT米粉",
	tabBarLabel: 'IT米粉',
	tabBarIcon: ({ tintColor, focused }) => (
		<Ionicons
			name={focused ? 'ios-home' : 'ios-home-outline'}
			size={26}
			style={{ color: tintColor }}
		/>
	),
};

//博客navigator设置
Page.Blog.navigationOptions = {
	title:"博客",
	tabBarLabel: '博客',
	tabBarIcon: ({ tintColor, focused }) => (
		<Ionicons
			name={focused ? 'ios-paw' : 'ios-paw-outline'}
			size={26}
			style={{ color: tintColor }}
		/>
	),
};

//新闻navigator设置
Page.News.navigationOptions = {
	title:"新闻",
	tabBarLabel: '新闻',
	tabBarIcon: ({ tintColor, focused }) => (
		<Ionicons
			name={focused ? 'ios-book' : 'ios-book-outline'}
			size={26}
			style={{ color: tintColor }}
		/>
	),
};


//关于我navigator设置
Page.About.navigationOptions = {
	title:"关于",
	tabBarLabel: '关于',
	tabBarIcon: ({ tintColor, focused }) => (
		<Ionicons
			name={focused ? 'ios-person' : 'ios-person-outline'}
			size={26}
			style={{ color: tintColor }}
		/>
	),
};

class Navigation extends Component {


	componentDidMount() {
		BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
	}
	componentWillUnmount() {
		BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
	}
	onBackPress = () => {
		let lastBackPressed;
		const { dispatch, nav } = this.props;
		if (nav.index === 0) {
			if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
				//最近2秒内按过back键，可以退出应用。
				return false;
			}
			this.lastBackPressed = Date.now();
			ToastAndroid.show("再按一次退出应用", ToastAndroid.SHORT);
			return false;
		}
		dispatch(NavigationActions.back());
		return true;
	};

	render() {
		const { dispatch, nav } = this.props;
		const navigation = addNavigationHelpers({
			dispatch,
			state: nav
		});
		return <MainNavigator navigation={navigation} />;
	}
}


const mapStateToProps = ((state) => {
	return state
});

export default connect(mapStateToProps)(Navigation);
