// 云函数入口文件
const cloud = require('wx-server-sdk');

cloud.init();
const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
    const skipNum = parseInt((event.page - 1) * event.pageSize);
    const limitNum = parseInt(event.pageSize);
    return await db.collection('diary')
        .where({
            userid: event.userid
        })
        .skip(skipNum)
        .limit(limitNum)
        .get();
};