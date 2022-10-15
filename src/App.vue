<template>
  <div class="main">
    <div class="content">
      <div class="from-content">
        <h3>Registration</h3>
        <form action="" method="POST">
          <input type="text" placeholder="name" v-model="queryName">
          <input type="text" placeholder="email" v-model="queryEmail">
          <input type="text" placeholder="password" v-model="queryPassword">
<!--          <select name="Area" id="Area">-->
<!--            <option value="US">US</option>-->
<!--            <option value="ES">US</option>-->
<!--            <option value="Asia">US</option>-->
<!--          </select>-->
        </form>
      </div>
    </div>
  </div>
</template>

<script>
const tg = window.Telegram.WebApp
const regexEmail = '/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/'
const regexName = '/^[a-zA-Z ]+$/'
const regexPass = '(?=.*[!@#$%^&*])'
export default {
  name: 'App',
  data() {
    return {
      queryName: '',
      queryEmail: '',
      queryPassword: '',

      queryResult: {
        isName: false,
        isEmail: false,
        isPassword: false
      }
    }
  },

  mounted() {
    tg.MainButton.setParams({
      text: 'Confirm'
    })
    tg.MainButton.show()
  },
  watch: {
    queryName: {
      handler(newValue) {
        this.queryResult.isName = regexEmail.test(newValue)
      },
      deep: true
    },
    queryEmail: {
      handler(newValue) {
        this.queryResult.isEmail = regexName.test(newValue)
      },
      deep: true
    },
    queryPassword: {
      handler(newValue) {
        this.queryResult.isPassword = regexPass.test(newValue)
      },
      deep: true
    },
    queryResult: {
      handler() {
        if(this.queryResult.isName && this.queryResult.isEmail && this.queryResult.isPassword) {
          tg.MainButton.show()
        } else {
          console.log('Enter data please. Or check data which write')
          tg.MainButton.hide()
        }
      },
      deep: true
    }
  }

}
</script>

<style>
body {
  background: var(--tg-theme-bg-color);
  color: var(--tg-theme-text-color);
}

.main {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
form input {
  background: none;
  border: 1px solid gray;
  margin-top: 10px;
  width: auto;
  height: 20px;
  padding: 5px;
}

form select {
  background: none;
  border: 1px solid gray;
  margin-top: 10px;
  width: 500px;
  height: 30px;
  padding: 5px;
}

form select option {

}
</style>
