<template>
  <div>
    <HeaderTop title="搜索" />
    <section class="search">
      <!-- <header class="header">
        <a class="header_title">
          <span class="header_title_text ellipsis">搜索</span>
        </a>
      </header> -->
      <form class="search_form" @submit.prevent="fn">
        <input type="search" placeholder="请输入商家名称" class="search_input" v-model="keyWord">
        <input type="submit" class="search_submit">
      </form>
      <section class="list">
        <ul class="list_container">
          <router-link :to="{ path: '/shop', query: { id: item.id } }" tag="li" v-for="item in
searchShops" :key="item.id" class="list_li">
            <section class="item_left">
              <img :src="imgBaseUrl + item.image_path" class="restaurant_img">
            </section>
            <section class="item_right">
              <div class="item_right_text">
                <p>
                  <span>{{ item.name }}</span>
                </p>
                <p>月售 {{ item.month_sales || item.recent_order_num }} 单</p>
                <p>{{ item.delivery_fee || item.float_minimum_order_amount }} 元起送 / 距离
                  {{ item.distance }}</p>
              </div>
            </section>
          </router-link>
        </ul>
      </section>
    </section>
  </div>
</template>
<script>
import HeaderTop from '@/components/HeaderTop/HeaderTop.vue';
import { mapState } from 'vuex';
export default {
  components: { HeaderTop },
  data() {
    return {
      keyWord: '',
      imgBaseUrl: 'http://cangdu.org:8001/img/'
    }
  },
  computed:{
    ...mapState(['searchShops'])
  },
  methods: {
    fn() {
      const keyWord = this.keyWord.trim()
      if (keyWord) {
        this.$store.dispatch('getSearchShops', this.keyWord)
      }
    }
  }
}
</script>
<style scoped lang="less">
.search {
  width: 100%;
  height: 100%;

  .search_form {
    // clearFix()
    margin-top: 45px;
    background-color: #fff;
    padding: 12px 8px;

    input {
      height: 35px;
      padding: 0 4px;
      border-radius: 2px;
      font-weight: bold;
      outline: none;

      &.search_input {
        float: left;
        width: 79%;
        border: 4px solid #f2f2f2;
        font-size: 14px;
        color: #333;
        background-color: #f2f2f2;
      }

      &.search_submit {
        float: right;
        width: 18%;
        border: 4px solid #02a774;
        font-size: 16px;
        color: #fff;
        background-color: #02a774;
      }
    }
  }

  .list {
    .list_container {
      background-color: #fff;

      .list_li {
        display: flex;
        justify-content: center;
        padding: 10px;
        border-bottom: 1px solid;

        .item_left {
          margin-right: 10px;

          .restaurant_img {
            width: 50px;
            height: 50px;
            display: block;
          }
        }

        .item_right {
          font-size: 12px;
          flex: 1;

          .item_right_text {
            p {
              line-height: 12px;
              margin-bottom: 6px;

              &:last-child {
                margin-bottom: 0;
              }
            }
          }
        }
      }
    }
  }

  .search_none {
    margin: 0 auto;
    color: #333;
    background-color: #fff;
    text-align: center;
    margin-top: 0.125rem;
  }
}</style>