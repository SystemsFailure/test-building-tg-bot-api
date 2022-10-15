<template>
  <div class="main">
    <div class="content">
      <div class="from-content">
        <h3>Registration</h3>
        <form action="" method="POST">
          <input type="text" placeholder="name">
          <input type="text" placeholder="email">
          <input type="text" placeholder="password">
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
export default {
  name: 'App',
  mounted() {
    tg.MainButton.show()
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
  width: 500px;
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
