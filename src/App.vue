<template>
  <div class="main">
    <div class="cont-select area-select">
      <select name="Area" id="Area">
        <option value="US">Register</option>
        <option value="ES">Auth</option>
      </select>
    </div>
    <div class="content">
      <form-register-comp></form-register-comp>
    </div>
  </div>
</template>

<script>
import FormRegisterComp from "@/components/FormRegisterComp";
export default {
  components: {FormRegisterComp}
}
</script>

<style>
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
}


body {
  background: var(--tg-theme-bg-color);
  color: var(--tg-theme-text-color);

}

</style>
