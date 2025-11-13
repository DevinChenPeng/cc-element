import { config } from "@/utils/cc-components-config/table";
const props = {
  // Element UI Table attributes
  isLoading: {
    type: Boolean,
    default: config.isLoading,
    validator(value) {
      const types = [true, false];
      const validType = types.indexOf(value) !== -1;
      if (!validType) {
        throw new Error(`Invalid type of '${value}', please set one type of 'true' or 'false'.`);
      }
      return validType;
    }
  },
  height: [String, Number],
  maxHeight: [String, Number],
  size: { type: String, default: config.size },
  tableId: String,
  stripe: Boolean,
  border: Boolean,
  isEditorAll: { type: Boolean, default: config.isEditorAll },
  fit: {
    type: Boolean,
    default: config.fit,
    validator(value) {
      const types = [true, false];
      const validType = types.indexOf(value) !== -1;
      if (!validType) {
        throw new Error(`Invalid type of '${value}', please set one type of 'true' or 'false'.`);
      }
      return validType;
    }
  },
  showHeader: {
    type: Boolean,
    default: config.showHeader,
    validator(value) {
      const types = [true, false];
      const validType = types.indexOf(value) !== -1;
      if (!validType) {
        throw new Error(`Invalid type of '${value}', please set one type of 'true' or 'false'.`);
      }
      return validType;
    }
  },
  highlightCurrentRow: Boolean,
  currentRowKey: [String, Number],
  rowClassName: [String, Function],
  rowStyle: [String, Function],
  rowKey: { type: [String, Function], default: config.rowKey },
  emptyText: String,
  defaultExpandAll: Boolean,
  expandRowKeys: Array,
  defaultSort: Object,
  tooltipEffect: {
    type: String,
    default: config.tooltipEffect
  },
  showSummary: Boolean,
  sumText: String,
  summaryMethod: Function,
  endCol: {
    type: Boolean,
    default: config.endCol,
    validator(value) {
      const types = [true, false];
      const validType = types.indexOf(value) !== -1;
      if (!validType) {
        throw new Error(`Invalid type of '${value}', please set one type of 'true' or 'false'.`);
      }
      return validType;
    }
  },
  // custom attributes
  tableStyle: {
    type: String,
    default: config.tableStyle
  },
  fetch: {
    type: Function
  },
  url: {
    type: String
  },
  method: {
    type: String,
    default: config.method,
    validator: value => {
      const methodTypes = ['get', 'post', 'put', 'delete'];
      return methodTypes.indexOf(value.toLowerCase()) !== -1;
    }
  },
  headers: {
    type: Object,
    default: () => {
      return config.headers;
    }
  },
  listField: {
    type: String,
    default: config.listField
  },
  totalField: {
    type: String,
    default: config.totalField
  },
  params: {
    type: Object,
    default: () => {
      return config.params;
    }
  },
  formOptions: {
    type: Object
  },
  autoLoad: {
    type: Boolean,
    default: config.autoLoad,
    validator(value) {
      const types = [true, false];
      const validType = types.indexOf(value) !== -1;
      if (!validType) {
        throw new Error(`Invalid type of '${value}', please set one type of 'true' or 'false'.`);
      }
      return validType;
    }
  },
  type: {
    type: String,
    default: config.type,
    validator(value) {
      const types = ['remote', 'local'];
      const validType = types.indexOf(value) !== -1;
      if (!validType) {
        throw new Error(`Invalid type of '${value}', please set one type of 'remote' or 'local'.`);
      }
      return validType;
    }
  },
  data: {
    type: Array
  },
  dataHandler: {
    type: Function
  },
  customSort: {
    type: Boolean,
    default: config.customSort,
    validator(value) {
      const types = [true, false];
      const validType = types.indexOf(value) !== -1;
      if (!validType) {
        throw new Error(`Invalid type of '${value}', please set one type of 'true' or 'false'.`);
      }
      return validType;
    }
  },
  columns: {
    type: Array,
    required: config.columns.required
  },
  showPagination: {
    type: Boolean,
    default: config.showPagination,
    validator(value) {
      const types = [true, false];
      const validType = types.indexOf(value) !== -1;
      if (!validType) {
        throw new Error(`Invalid type of '${value}', please set one type of 'true' or 'false'.`);
      }
      return validType;
    }
  },
  spanMethod: Function,
  pageSizes: {
    type: Array,
    default: () => {
      return config.pageSizes;
    }
  },
  setPageIndex: {
    type: Number,
    default: config.setPageIndex
  },
  paginationLayout: {
    type: String,
    default: config.paginationLayout
  },
  pageIndexKey: {
    type: String,
    default: config.pageIndexKey
  },
  pageSizeKey: {
    type: String,
    default: config.pageSizeKey
  },
  infiniteScroll: {
    type: Boolean,
    default: config.infiniteScroll,
    validator(value) {
      const types = [true, false];
      const validType = types.indexOf(value) !== -1;
      if (!validType) {
        throw new Error(`Invalid type of '${value}', please set one type of 'true' or 'false'.`);
      }
      return validType;
    }
  },
  setupSort: {
    type: Boolean,
    default: config.setupSort
  },
  sortClass: {
    type: String,
    default: config.sortClass
  },
  isSortFixed: {
    type: Boolean,
    default: config.isSortFixed
  },
  openIndexMethod: {
    type: Boolean,
    default: config.openIndexMethod
  }
};

export default props;
