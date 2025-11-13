import axios from '@/utils/axios/index';

/**
 * 附件上传
 *
 * @param data
 * @returns {AxiosPromise}
 */
export function fileUpload(data) {
  return axios({
    url: '/csrfile/one/upload',
    method: 'post',
    headers: { 'Content-Type': 'multipart/form-data' },
    data: data
  })
}

/** 
 * 查看（针对图片）复制
 *
 * @param data
 * @returns {AxiosPromise}
 */
export function lookPhoto(uploadId, expires) {
  return axios({
    url: '/csrfile/one/' + uploadId + '/' + expires + '',
    method: 'get',
    isLoading: false
  })
}