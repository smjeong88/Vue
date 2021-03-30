<template>
    <div>
        <h1>Welcome to Home {{city}}!</h1>
        <input type="text" v-model="input" />
        <button type="button" @click="getData">Get</button>
        <button type="button" @click="setData">Set</button>
        <select class="form-control" v-model="region" @change="changeRegion">
            <option :key="i" :value="d.v" v-for="(d,i) in options">{{d.t}}</option>
        </select>

        <!-- v-if : 특정 조건이 있을때만 리소스를 많이 잡음
             v-show : 자주 랜더링 될때 리소스를 많이 잡지 않음. -->
        <table class="table table-bordered" v-if="tableShow">
            <tr :key="i" v-for="(d,i) in options">
                <td>{{d.v}}</td>
                <td>{{d.t}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                title : "개발자의 품격",
                city : "Seoul",
                input : "정세민", 
                options:[
                    {v:"S",t:"Seoul"},
                    {v:"J",t:"Jeju"},
                    {v:"B",t:"Busan"},
                ],
                region:"J",
                tableShow:true,
            };
        },
        watch:{
            // 추적하고자 하는 변수와 동일하게 메소드를 만들어 주면된다.
            input(){
                console.log(this.input);
            }
        },
        methods:{
            // 값을 가져올때
            getData(){
                alert(this.input);
            }, 
            // 값을 셋팅할때
            setData(){
                this.input = "12345";
            },
            changeRegion(){
                alert(this.region);    
            },
        },
        // LifeCycle
        beforeCreate(){
            console.log("beforeCreate");
        },
        created(){
            console.log("created");
        },
        beforeMount(){
            console.log("beforeMount");
        },
        mounted(){
            console.log("mounted");
        },
        beforeUpdate(){
            console.log("beforeUpdate");
        },
        updated(){
            console.log("updated");
        },
        beforeDestroy(){
            console.log("beforeDestroy");
        },
        destroyed(){
            console.log("destroyed");
        },

    };
</script>
