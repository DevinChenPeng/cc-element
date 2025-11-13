/*
 * @Description: 
 * @Author: Devin
 * @Date: 2021-12-29 14:09:01
 * @LastEditTime: 2021-12-29 14:13:50
 * @LastEditors: Devin
 * @Reference: 
 */
export const config = {
  isLoading: true,
  size: 'small',
  isEditorAll: false,
  fit: true,
  showHeader: true,
  rowKey: 'id',
  tooltipEffect: 'light',
  endCol: false,
  tableStyle: 'width:100%;margin-top:0px;',
  method: 'get',
  headers: {},
  listField: 'data.records',
  totalField: 'data.total',
  params: {},
  autoLoad: true,
  type: 'remote',
  customSort: false,
  columns: {
    required: true
  },
  showPagination: true,
  pageSizes: [5, 15, 30, 50],
  setPageIndex: 1,
  paginationLayout: 'total, prev, pager, next, jumper, sizes',
  pageIndexKey: 'pageNum',
  pageSizeKey: 'limit',
  infiniteScroll: false,
  setupSort: false,
  sortClass: '.sortClas',
  isSortFixed: false,
  openIndexMethod: true
}