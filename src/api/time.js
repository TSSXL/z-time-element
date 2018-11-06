import request from 'common/js/request';

let pageSize=20;
export function getUserList(page) {
  return request({
    url: '/users',
    method: 'get',
    params:{page,size:pageSize}
  })
}


export function sendMessage(data) {
  return request({
    url:'/messages/send-message',
    method:'post',
    data
  })
}

export function  addUser(data) {
  return request({
    url:'/users',
    method:'post',
    data
  })
}

export  function userMessage(userId) {
  return request({
    url:'/messages/search/findBySendUser',
    method:'get',
    params: {userId}
  })
}
export function receiveMessage(userId) {
  return request({
    url:'/messages/search/findByUserId',
    method:'get',
    params: {userId}
  })
}

export function ReadStatus(id,userId) {
  return request({
    url:`/messages/${id}/user-readed`,
    method:'put',
    params: {userId}
  })
}
