import dayjs from "dayjs";
import Vue from "vue";
Vue.filter('date-format', function(value, formatStr = 'YYYY-MM-DD HH:mm:ss') {
  return dayjs(value).format(formatStr)
})