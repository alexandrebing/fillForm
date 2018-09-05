<template>
    <div class="conteiner">
        <h1>{{day}}</h1>
        <table class="centralized">
            <tr>
                <th>Atividade</th>
                <th>Início</th>
                <th>Fim</th>
                <th>Remover</th>
            </tr>
            <my-line :key="index" v-for="index in activities.length"
            :inputValues="activities[index-1]"
            :previousActivity="activities[index-2]"
            :nextActivity="activities[index]"
            @activityRemoved="removeActivity(index-1)"/>
            <!--
            <tr :key="index" v-for="index in activities.length">
                    <th><input type="text" v-model="activities[index-1].activity"></th>
                    <th><input type="number" v-model="activities[index-1].start"></th>
                    <th><input type="number" v-model="activities[index-1].end"></th>
                    <th><button @click="removeActivity(index-1)">remover</button></th>
            </tr>
            -->
        </table>
          <button @click="addActivity(dayIndex)">Adicionar Atividade</button>
          <button @click="copyPreviousDay()">Copiar Dia Anterior</button>
    </div>
    
</template>

<script>
import Line from '../shared/Line';
import Button from '../shared/Button'
export default {
    props:{
        activities:{
            required: true,
            type: Array
        },
        day:{
            required: true,
            type: String
        },

        dayIndex:{
            required: true,
            type: Number
        }
    },    

    data: ()=>{
        return{
            allChecked: false
        }
    },

    components: {
        'my-line': Line,
        'my-button': Button
    },

    methods:{

        addActivity(index){
            let lastActivityIndex = this.activities.length - 1
            if(this.activities[lastActivityIndex].end >= 24){
                alert("Não é possível adicionar atividades após as 24h, vá para o próximo dia")
                return
            }
            let lastActivity=this.activities[lastActivityIndex]
            let data = {
                index: index,
                newActivityStart: lastActivity.end,
                newActivityEnd: Number(lastActivity.end) + 1,
            }
            console.log(lastActivity)
            this.$emit("activityAdded", data)
            // this.validateActivities()
        },

        removeActivity(index){
            if(this.activities.length == 1){
                alert("Os dias precisam ter pelo menos uma atividade!")
                return
            }
            let data = {
                day: this.dayIndex,
                position: index
            }
            console.log(data)
            this.$emit("activityRemoved", data)
            // this.validateActivities()
        },

        copyPreviousDay(){
            this.$emit("copyPreviousDay", this.dayIndex)
        },

        // validateActivities(){
        //     let len = this.activities.length
        //     let maxHour = 24
        //     if(this.activities[1]){
        //         maxHour = this.activities[1].start
        //     }
        //     //first activity
        //     if(this.activities[0].start !=0 || this.activities[0].end != maxHour){
        //         debugger
        //         this.activities[0].valid = false
        //     } else {
        //         this.activities[0].valid = true
        //     }
        //     for(let i = 1; i < len-1; i++){
        //         let previousActivityEnd = this.activities[i-1].end
        //         let currentActivityStart = this.activities[i].start
        //         console.log("Inicio da atividade atual: " + currentActivityStart + " fim da atividade anterior: " + previousActivityEnd)
        //         if(currentActivityStart === previousActivityEnd ){
        //             this.activities[i].valid = true
        //             this.activities[i-1].valid = true
        //         } else {
        //             this.activities[i].valid = false
        //             this.activities[i-1].valid = false
        //         }
        //     }
        //     //last activity
        //     if(len > 1){
        //         if(this.activities[len-1].end == 24 && (this.activities[len-1].start == this.activities[len-2].end)){
        //             this.activities[len-1].valid = true
        //         } else{
        //             this.activities[len-1].valid = false
        //         }

        //     }
        // }
        
    }
    
}
</script>

<style scoped>

li{
    display: block;
}

.conteiner{
    background-color: rgba(255, 255, 255, 0.4);
    width: 80%;
    margin: 0 auto;
    padding: 20px;
    height: 350px;
    overflow-y: auto;
}

.centralized{
    margin: 0 auto;
}

.button-div{
    margin-top: 50px
}

.special{
    display: inline;
}

.center{
    margin: 0 auto;
    width: 90%;
    text-align: left;
}

</style>