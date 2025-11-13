/*
 * @Description: 
 * @Author: Devin
 * @Date: 2021-12-31 15:17:49
 * @LastEditTime: 2021-12-31 15:17:50
 * @LastEditors: Devin
 * @Reference: 
 */
import variables from '@/styles/element-variables.scss'
const state = {
  theme: variables.theme,
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  }
}

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
