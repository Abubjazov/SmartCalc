/* eslint-disable import/no-anonymous-default-export */
import * as CalcActionCreators from './calc.actionCreators'
import * as AuthActionCreators from './auth.actionCreators'

export default {
	...CalcActionCreators,
	...AuthActionCreators,
}
