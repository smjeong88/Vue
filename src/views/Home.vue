<template>
    <div>
        <h1>Welcome to Home {{city}}!</h1>
        <input type="text" v-model="input" />
        <button type="button" @click="getData">Get</button>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                title : "개발자의 품격",
                city : "Seoul",
                input : "정세민", 
            };
        },
        methods:{
            getData(){
                alert(this.input);
            } 
        },
    };
</script>
