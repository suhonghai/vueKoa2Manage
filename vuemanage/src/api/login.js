/*
 * @Descripttion:
 * @version:
 * @Author: SueSea
 * @LastEditors: SueSea
 * @LastEditTime: 2020-03-27 18:36:34
 */
import request from "@/utils/request.js"
export const login = (userInfo) =>
    request.post(`/login`, userInfo)
export const regist = (userInfo) =>
    request.post(`/regist`, userInfo)