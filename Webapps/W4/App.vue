<template>
    <div id="app">
        <Child v-for="(item, i) in array" :text="item" @delete="remove(i)" />
    </div>
</template>

<script>
import Child from "./components/Child";
export default { 
    name: "App",
    components: {
        Child,
    },
    data() {
        return {
            array: [1, 2, 3],
        };
},
methods: {
remove(i) {
    this.array.splice(i, 1);
    },
},

 
}











</script>