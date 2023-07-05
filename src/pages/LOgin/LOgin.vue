<template>
  <div class="login">
    <span class="return" @click="$router.back()">く</span>
    <div class="loginHead">
      <div class="login--left">
        <div class="left--div1">
          <img src="https://s1.ax1x.com/2023/06/26/pCUyjcF.png" alt="back">
        </div>
        <div class="left--div2"></div>
      </div>
      <div class="login--right">
        <h1>图案外卖</h1>
      </div>
    </div>
    <div class="loginWay">
      <span :class="{ on: loginWay }" @click="loginWay = true">手机号登录</span>
      <span :class="{ on: !loginWay }" @click="loginWay = false">密码登录</span>
    </div>
    <form>
      <div class="password" v-show="!loginWay">
        <label>
          <input 
            class="usernameInput" 
            title="账号" 
            placeholder="请输入账号" 
            v-model="name"
          >
        </label><br><br>
        <label class="passwordLabel">
          <input 
            type="password" 
            title="密码" 
            placeholder="请输入密码" 
            v-show="!showPwd" 
            v-model="pwd"
          >
          <input 
            title="密码" 
            placeholder="请输入密码" 
            v-show="showPwd" 
            v-model="pwd"
            ref="passwordInput"
          >
          <i class="passwordI" @click="showHideFn">{{ showPwd ? '🐵' : '🙈' }}</i>
        </label><br><br>
        <label class="captchaLabel">
          <input
            placeholder="验证码" 
            v-model="captcha"
          >
          <div class="captchaImg">
            <img class="captcha" src="http://localhost:4000/captcha" alt="back" @click="getCaptcha" ref="captcha">
          </div>
        </label><br><br>
      </div>
      <div class="phone" v-show="loginWay">
        <label class="phoneLabel">
          <input 
            class="phoneInput" 
            title="手机号" 
            maxlength="11" 
            placeholder="手机号" 
            v-model="phone"
          >
          <button 
            :disabled="!rightPhone" 
            class="getVerification" 
            :class="{ right_phone: rightPhone }" 
            @click="getCode"
          >
            {{ computedTime ? `已发送${computedTime}s` : '获取验证码' }}
          </button>
        </label><br><br>
        <label>
          <input 
            title="验证码" 
            type="number" 
            maxlength="6" 
            placeholder="验证码" 
            v-model="code"
          >
        </label>
        <label><br><br>
        </label>
      </div>
      <button class="submit" type="button" @click="loginVerify">提交</button>
    </form>
    <MessageBox 
      v-show="warning"
      @confirmE="warning = false" 
      :text="warningText"
      type="警告warning"
    >
    </MessageBox>
  </div>
</template>
<script>
import MessageBox from '@/components/MessageBox/MessageBox.vue'
import { reqPasswordLogin,} from '@/api/index.js'
export default {
  components:{ MessageBox },
  data() {
    return {
      loginWay: false,//ture手机号登陆，false账号登录
      computedTime: 0,//获取手机验证码倒计时
      showPwd: false,//切换显示隐藏密码
      warning:false,//警告框显示与否
      warningText:'',//警告提示词
      phone: '',//手机号
      pwd: '',//密码
      code: '',//手机号验证码
      name: '',//用户名
      captcha: ''//图形验证码
    }
  },
  computed: {
    rightPhone() {
      return /^1\d{10}$/.test(this.phone)
    }
  },
  methods: {
    //获取手机验证码，30秒/次
    getCode() {
      if (this.computedTime == 0) {
        this.computedTime = 30
        const intervalId = setInterval(() => {
          this.computedTime--
          if (this.computedTime <= 0) {
            clearInterval(intervalId)
          }
        }, 1000)
      }
    },
    //弹出式提示
    confirmFn(text) {
      this.warningText = text
      this.warning = true
    },
    //基础的表单验证，为了减少无用请求
    async loginVerify() {
      //loginWay是ture手机号登陆，false账号登录
      if (this.loginWay) {//手机号登陆
        //手机号格式
        if (!this.rightPhone) {
          this.confirmFn('手机号格式不正确')
          return
        } else if (!/^\d{6}$/.test(this.code)) {
          this.confirmFn('验证码为六位或错误')
          return
        }
      } else {//账号登录
        if(!this.name) {
          this.confirmFn('账号错误')
          return
        } else if (!this.pwd) {
          this.confirmFn('密码错误')
          return
        } else if (!this.captcha) {
          this.confirmFn('验证码似乎不对哦，点按换张图片')
          return
        }
        const passwordResult = await reqPasswordLogin({name:this.name, pwd:this.pwd, captcha:this.captcha})
        if (passwordResult.code == 0) {
          const user = passwordResult.data
          console.log('登陆成功');
          this.$store.dispatch('recordUser', user)
          this.$router.replace('profile')
        } else {
          console.log(passwordResult);
          if (passwordResult.msg == '验证码不正确') {
           this.confirmFn('验证码似乎不对哦，点按换张图片')
           this.getCaptcha()
          } else {
          //尽管图形验证码是对的，但也请求过了，这玩意一次性的
           this.getCaptcha()
           this.confirmFn('用户名或密码不正确!')
          }
        }
      }
    },
    getCaptcha() {
      //尽管使用DOM，但是重复设置相同html内容，被diff算法看穿了，所以并没有替换它们，所以也就什么也没发生
      //这里加上不停止的时间，就为不重复了
      this.captcha = ''
      this.$refs.captcha.src = 'http://localhost:4000/captcha?time='+Date.now()
    },
    //密码的显示与隐藏函数
    showHideFn() {
      this.showPwd = !this.showPwd
      //显示与隐藏切换，focus会失效，因为刚用上就被切换了
      //这里nextTick在下一次事件开始
      this.$nextTick(function() {
        this.$refs.passwordInput.focus()
      })
    }
  }
}
</script>
<style scoped lang="less">
* {
  font-family: '黑体' !important;
}
.return {
  display: block;
  width: 30px;
  height: 30px;
  margin-bottom: 40px;
  font-size: 18px;
}

.loginHead {
  display: flex;

  //头像
  .login--left {
    overflow: hidden;
    width: 80px;
    height: 80px;
    margin: 40px 30px;
    background-color: #a2a2a2;
    border-radius: 40px;
    box-shadow: inset 0 0 5px 2px #666;

    &:active .left--div1 {
      transform: rotateY(-180180deg);
    }

    .left--div1 {
      width: 40px;
      height: 40px;
      margin: 6px auto 0 auto;
      background-color: #ddd;
      border-radius: 20px;
      transform: rotateY(0deg);
      transition: all 26s ease-in-out;
      transform-style: preserve-3d;

      img {
        width: 100%;
        height: 100%;
        background-color: transparent;
        transform: translateZ(-12px);
      }
    }

    .left--div2 {
      width: 60px;
      height: 60px;
      margin: 2px auto 0 auto;
      background-color: #ddd;
      border-radius: 26px;
    }
  }

  .login--right {
    margin: auto 0;
    color: #02a774;
  }
}

.loginWay {
  margin-bottom: 50px;
  text-align: center;

  span {
    margin: 0 10px;
  }

  .on {
    color: #02a774;
    padding-bottom: 6px;
    text-decoration: underline dotted #ccc;
    border-bottom: 2px solid #00895d;
    border-radius: 4px;
    box-shadow: inset -2px -1px 6px 0.5px #bbb;
    transition: padding-bottom 0.5s ease-out;
  }
}
//表单
form {
  display: flex;
  flex-flow: column;
  align-items: center;
  //手机号登录
  .phoneLabel {
    position: relative;
    .getVerification {
      position: absolute;
      top: 50%;
      right: 10px;
      color: #ccc;
      font-size: 14px;
      transform: translateY(-50%);

      &.right_phone {
        color: #000;
      }
    }
  }
  //密码登录
  .passwordLabel {
    position: relative;
    .passwordI {
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
    }
  }
  //图形验证码
  .captchaLabel{
    position: relative;
    .captchaImg{
      position: absolute;
      top: 50%;
      right: 10px;
      height: 40px;
      background-color: transparent;
      transform: translateY(-50%);
      .captcha{
        height: 100%;
        background-color: transparent;
        &:active{
          opacity: 0.6;
          transform: scale(0.8);
        }
      }
    }
  }

  input {
    width: 280px;
    height: 40px;
    background-color: #F5F5F5;
    padding: 0;
    padding-left: 10px;
    border: 1px solid #ccc;
    outline: none;
    border-radius: 3px;
    box-sizing: border-box;

    &:focus {
      border: 1px solid #42d467;
    }
  }

  .submit {
    display: block;
    width: 280px;
    height: 40px;
    margin: 0 auto;
    background-color: #42d467;
    color: #fff;
    border: none;
    border-radius: 3px;
  }
}</style>