import React, { Component } from 'react';
import Navigation from './component/navigation';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducer'

import logger from './middleware/logger'
import thunk from 'redux-thunk'


const createStoreWithMW = applyMiddleware(logger, thunk)(createStore);
const store = createStoreWithMW(reducers);


class MfReader extends Component {
	render() {

		//关闭黄色警告,商务应用建议还是需要处理所有的警告
		console.disableYellowBox = true;

		return (
			<Provider store={ store }>
				<Navigation/>
			</Provider>
		);
	}
}

export default MfReader;
