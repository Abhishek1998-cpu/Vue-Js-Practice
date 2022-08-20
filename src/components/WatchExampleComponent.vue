<template>
<div>
<input type="text" v-model="inputData"/>
<button v-on:click="getData">Get Data</button>
<h2 v-if="typing">User is Typing...</h2>
</div>
</template>

<script>
export default {
    name: "WatchExampleComponent",
    data(){
        return {
            inputData: "",
            typing: false
        }
    },
    watch:{
    // inputData(newValue, oldValue)    
    inputData(){
        this.typing = true
        setTimeout(()=>{
            this.typing = false
        }, 3000)
    }
    },
    methods: {
        getData(){
            console.log("Data = " + this.inputData)
        }
    }
}
</script>

<style scoped></style>