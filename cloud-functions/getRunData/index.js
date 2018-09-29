// 云函数入口文件
const cloud = require('wx-server-sdk')
const WXBizDataCrypt = require('WXBizDataCrypt.js');
const AppId = 'wxf6c91f679a67b89c';

cloud.init();

// 云函数入口函数
exports.main = async (event, context) => {
    var pc = new WXBizDataCrypt(AppId, event.session_key);
    return pc.decryptData(event.encryptedData, event.iv);
};