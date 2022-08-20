<template>
    <div>
        <h2>Computed Property is mostly used for Performance Purpose only</h2>
        <h2>{{getResult}}</h2>
    </div>
</template>

<script>
export default {
    name: "ComputedPropertyExampleComponent",
    data(){
        return {
            dollar: 100,
            rupees: 70,
            discount: 20
        }
    },
    computed: {
        getResult(){
            return (this.dollar * this.rupees) - this.discount
        }
    }
}
</script>

<style scoped></style>