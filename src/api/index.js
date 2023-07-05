import ajax from "./ajax";
const base_url = '/api'
//1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)
export const reqAddress = (geohash) => ajax(`${base_url}/position/${geohash}`)
//2、获取食品分类列表](#2获取食品分类列表)
export const reqFoodCategorys = () => ajax(`${base_url}/index_category`)
//3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)
export const reqShops = (longitude, latitude) => ajax(`${base_url}/shops`, {longitude, latitude})
//4、根据经纬度和关键字搜索商铺列表](#4根据经纬度和关键字搜索商铺列表)
export const reqSearchShops = (geohash, keyword) => ajax(`${base_url}/search_shops`, {geohash, keyword})
//6、用户名密码 登陆](#6用户名密码登陆)
export const reqPasswordLogin = ({name, pwd, captcha}) => ajax(`${base_url}/login_pwd`, {name, pwd, captcha}, 'POST')
//7、发送短信验证码](#7发送短信验证码)
export const reqSMSVerification = (phone) => ajax(`${base_url}/sendcode`, {phone})
//8、手机号验证码 登陆](#8手机号验证码登陆)
export const reqSPhoneVerification = (phone, code) => ajax(`/login_sms`, {phone, code}, 'POST')
//9、根据会话获取用户信息](#9根据会话获取用户信息)
export const reqUserInfo = () => ajax(`${base_url}/userinfo`)
//10、用户登出](#10用户登出)
export const reqLogout = () => ajax(`${base_url}/logout`)

//获取商家信息
export const reqShopInfo = () => ajax('/info')
//获取商家评价数组 
export const reqShopRatings = () => ajax('/ratings')
//获取商家商品数组
export const reqShopGoods = () => ajax('/goods')