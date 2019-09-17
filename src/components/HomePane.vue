<template>
    <div>
        <HomeTopContent navBarHeight='3.5rem' contentHeight='200px'></HomeTopContent>
        <b-container class='content'>
            <b-row>
                <b-col cols=12 class='py-2'>
                    <h1>About myself</h1>
                    <p class='bg-white text-left'>Hello, my full name is Lucas Suzuki Segawa. Currently I am undergraduate student at Northeastern University studying Computer Science and Mathematics graduating in 2021. I have a strong interest in Web Application Development and Artificial Intelligence.</p>
                    <h2>My qualifications</h2>
                    <p class='bg-white text-left'></p>
                    <h2>My national identity</h2>
                    <p class='bg-white text-left'></p>
                    <h2>My other interests</h2>
                    <p class='bg-white text-left'></p>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script lang='ts'>
import HomePane from './HomePane';
export default HomePane;
</script>
<style lang='scss'>
p.content {
    z-index: 1;
}
</style>
