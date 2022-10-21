<template>
  <div class="from-content">
    <h3>Registration</h3>
    <form action="" method="POST">
      <div class="inp-div-class item-div-class">
        <input type="text" placeholder="name" v-model="queryName">
        <Transition name="slide-up" mode="out-in">
          <i v-if="queryResult.isName" class='bi bi-check-lg' style='font-size:18px; color: #00ff62'></i>
          <i v-else class='bi bi-x' style='font-size:18px; color:red'></i>
        </Transition>
      </div>
      <div class="inp-div-class item-div-class">
        <input type="text" placeholder="email" v-model="queryEmail">
        <Transition name="slide-up" mode="out-in">
          <i v-if="queryResult.isEmail" class='bi bi-check-lg' style='font-size:18px; color: #00ff62'></i>
          <i v-else class='bi bi-x' style='font-size:18px; color:red'></i>
        </Transition>

      </div>
      <div class="inp-div-class item-div-class">
        <input type="text" placeholder="password" v-model="queryPassword">
        <Transition name="slide-up" mode="out-in">
          <i v-if="queryResult.isPassword" class='bi bi-check-lg' style='font-size:18px; color: #00ff62'></i>
          <i v-else class='bi bi-x' style='font-size:18px; color:red'></i>
        </Transition>
      </div>

    </form>
  </div>
</template>

<script>
const tg = window.Telegram.WebApp
const regexEmail = '[a-z0-9]+@[a-z]+\\.[a-z]{2,3}'
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
  },
  watch: {
    queryName: {
      handler(newValue) {
        if(newValue !== '' && newValue.length < 16) {
          this.queryResult.isName = true
          console.log(this.queryResult.isName)
        } else {
          this.queryResult.isName = false
          console.log(this.queryResult.isName)
        }
      },
      deep: true
    },
    queryEmail: {
      handler(newValue) {
        if(newValue.match(regexEmail)) {
          this.queryResult.isEmail = true
          console.log(this.queryResult.isEmail)
        } else {
          this.queryResult.isEmail = false
          console.log(this.queryResult.isEmail)
        }
      },
      deep: true
    },
    queryPassword: {
      handler(newValue) {
        if(newValue.match(regexPass)) {
          this.queryResult.isPassword = true
          console.log(this.queryResult.isPassword)
        } else {
          this.queryResult.isPassword = false
          console.log(this.queryResult.isPassword)
        }
      },
      deep: true
    },
    queryResult: {
      handler() {
        if(this.queryResult.isName && this.queryResult.isEmail && this.queryResult.isPassword) {
          tg.MainButton.show()
          console.log('success')
        } else {
          tg.MainButton.hide()
          console.log('no')
        }
      },
      deep: true
    }
  }

}
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.from-content h3 {
  color: var(--tg-theme-text-color);
}

form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.inp-div-class {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}

form input {
  background: none;
  border: 1px solid gray;
  width: auto;
  height: 20px;
  padding: 5px;
  margin-right: 10px;
  color: var(--tg-theme-text-color);
}

</style>