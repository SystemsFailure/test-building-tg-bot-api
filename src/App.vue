<template>
  <div class="main">
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

body {
  background: var(--tg-theme-bg-color);
  color: var(--tg-theme-text-color);

}

</style>
