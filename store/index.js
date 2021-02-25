import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		searchHistory : uni.getStorageSync("search_history") || []
	},
	mutations:{
		ADD_SEARCH_HISTORY(state,history){
			state.searchHistory = history;
		},
		DEL_SEARCH_HISTORY(state,history){
			state.searchHistory = history;
		},
		CLEAR_SEARCH_HISTORY(state){
			state.searchHistory = [];
		},
	},
	actions:{
		add_history({commit,state},history){
			let list = state.searchHistory;
			let index = list.indexOf(history);
			if(index > 0){
				list.splice(index,1);
			}
			list.unshift(history);
			uni.setStorageSync("search_history",list);
			commit("ADD_SEARCH_HISTORY",list);
		},
		del_history({commit,state},index){
			let list = state.searchHistory;
			list.splice(index,1);
			uni.setStorageSync("search_history",list);
			commit("DEL_SEARCH_HISTORY",list);
		},
		clear_history({commit}){
			uni.removeStorageSync("search_history");
			commit("CLEAR_SEARCH_HISTORY");
		}
	}
})
export default store;