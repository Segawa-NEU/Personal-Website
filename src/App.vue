<template>
    <div id="app">
        <AppNavbar></AppNavbar>
        <router-view></router-view>
    </div>
</template>

<script lang='ts'>
import App from "./App";
export default App;
</script>

<style lang='scss'>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-top: 3.5rem;
}

h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>

