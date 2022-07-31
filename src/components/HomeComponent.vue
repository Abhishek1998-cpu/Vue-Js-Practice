<template>
<div>
<h1 v-if="show">Welcome to the Home Component {{userName}}</h1>
<button v-on:click="hello('Abhishek Verma')">Call Hello Function</button>
</div>
</template>

<script>
export default {
    name: "HomeComponent",
    props: {
        userName: String
    },
    // All the core function of the co mponent will come inside the method props 
    methods: {
        hello(msg){
            console.log(msg)
        }
    },
    // Implementing any conditional rendering or logic is implemented in data
    data(){
        return {show: false}
    }
}
</script>