<template>
    <b-navbar toggleable="lg" fixed='top' type="light" variant="primary">
        <b-navbar-brand active-class="active" to="/">About Lucas</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item v-for="(text, route) in { '/work': 'Work Experience', '/education' : 'Education', '/project': 'Personal Project' }" v-bind:key="route" active-class="active" v-bind:to='route'>{{ text }}</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
    name: 'AppNavbar'
})
</script>
