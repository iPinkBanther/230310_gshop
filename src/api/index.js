// 包含n个接口请求函数的模块
import ajax from './ajax';
/**
* 获取地址信息(根据经纬度串)
*/
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)

/**
* 获取 msite 页面食品分类列表
*/
export const reqFoodTypes = () => ajax('/index_category')
/**
* 获取 msite 商铺列表(根据经纬度)
*/

/**
* 账号密码登录
*/

/**
* 获取短信验证码
*/

/**
* 手机号验证码登录
*/

/**
* 获取用户信息(根据会话)
*/

/**
* 请求登出
*/