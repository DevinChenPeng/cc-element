/*
 * @Description:
 * @Date: 2021-09-16 10:08:12
 * @LastEditTime: 2021-09-17 10:11:40
 * @FilePath: \mds\src\store\modules\app.js
 * @Author: Devin
 */
import Cookies from 'js-cookie';

const state = {
  sidebar: {
    opened: Cookies.get('sidebarStatus') == 0 ? false : true,
    withoutAnimation: false
  }
};

const mutations = {
  SWITCH_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened;
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 1);
    } else {
      Cookies.set('sidebarStatus', 0);
    }
  }
};

const actions = {
  switchSidebar({ commit }) {
    commit('SWITCH_SIDEBAR');
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
