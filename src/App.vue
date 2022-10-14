<template>
  <div class="main">
    <div class="content">
      <div class="from-content">
        <h3>Registration</h3>
        <form action="" method="POST">
          <input type="text" placeholder="name">
          <input type="text" placeholder="email">
          <input type="text" placeholder="password">
          <select name="Area" id="">
            <option value="US"></option>
            <option value="ES"></option>
            <option value="Asia"></option>
          </select>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// const tg = window.Telegram.WebApp
export default {
  name: 'App',
}
</script>

<style>
body {
  background: var(--tg-theme-bg-color);
  color: var(--tg-theme-text-color);
}
</style>
