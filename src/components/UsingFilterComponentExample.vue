<template>
    <div>
        <h1>
            My name is {{name | convertToUpperCase}}
        </h1>
    </div>
</template>

<script>
export default {
    name: "UsingFilterComponentExample",
    data(){
        return {
            name: "Abhishek Verma"
        }
    }
}
</script>

<style scoped></style>