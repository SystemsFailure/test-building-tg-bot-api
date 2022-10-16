<template>
  <div class="main">
    <div class="cont-select area-select">
      <select name="Area" id="Area" v-model="querySelect">
        <option value="Register">Register</option>
        <option value="Auth">Auth</option>
      </select>
    </div>
    <div class="content">
      <Transition name="fade" mode="out-in">
        <form-register-comp v-if="resultSelected === 'reg'"></form-register-comp>
        <form-auth-comp v-else></form-auth-comp>
      </Transition>
    </div>
  </div>
</template>

<script>
import FormRegisterComp from "@/components/FormRegisterComp";
import FormAuthComp from "@/components/FormAuthComp";
export default {
  data() {
    return {
      querySelect: '',
      resultSelected: 'auth'
    }
  },
  watch: {
    querySelect: {
      handler(newValue) {
        if(newValue === 'Register') {
          console.log(newValue)
          this.resultSelected = 'reg'
        } else {
          console.log(newValue)
          this.resultSelected = 'auth'
        }
      },
      deep: true
    }
  },
  components: {FormRegisterComp, FormAuthComp}
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.main {
  height: 100vh;
  width: 100%;

}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
}


.cont-select {
  display: flex;
  justify-content: center;
}

#Area {
  top: 0;
  padding: 5px;
  background: none;
  color: var(--tg-theme-text-color);
  background: var(--tg-theme-bg-color);
}

.cont-select option {
  background: var(--tg-theme-bg-color);
}


body {
  background: var(--tg-theme-bg-color);
  color: var(--tg-theme-text-color);

}

</style>
