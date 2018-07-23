<template>
    <div>
        <h1>Formulário</h1>
        <carousel :per-page="1">
            <slide class="carousel-wrapper" :key="dia" v-for="dia in dias">
                <my-slide :titulo=dia 
                          :inputValues=activitiesByDay[dia] 
                          :activities=activitiesByDay[dia].length 
                          @listChanged="updateList($event)"
                          @activityAdded="addActivity($event)"
                          @activityRemotion="removeActivity($event)"></my-slide>
            </slide>
        </carousel>
    </div>
</template>
<script>
import { Carousel, Slide} from 'vue-carousel';
import MySlide from '../slide/MySlide';
import Button from '../shared/Button';
export default {
    data: () => {
        return{
            dias: ['Dia 1', 'Dia 2', 'Dia 3', 'Dia 4'],
            activitiesByDay:{
                            'Dia 1':[{
                                    activity: "Dormir",
                                    start: 10,
                                    end: 12
                                },{
                                    activity: "Trabalhar",
                                    start: 12,
                                    end: 18
                                },{
                                    activity: "Comer",
                                    start: 18,
                                    end: 22
                                },{
                                    activity: "Dormir",
                                    start: 22,
                                    end: 24
                                }
                            ], 
                            'Dia 2':[
                            ],
                            'Dia 3':[{
                                    activity: "Dormir",
                                    start: 10,
                                    end: 12
                                }, {
                                    activity:"Trabalhar",
                                    start: 10,
                                    end: 18
                                }
                            ],
                            'Dia 4':[]
            }
        }
    },
    components: {
        Carousel,
        Slide,
        'my-slide': MySlide,
        'my-button': Button
    },

    methods:{
        info(){
            console.log(this.activitiesByDay)
        },

        addActivity(data){
            let newActivity = {
                activity: data.activity,
                start: data.start,
                end: data.end
            }
            this.activitiesByDay[data.day].push(newActivity)

        },

        updateList(updatedActivity){
            console.log("A lista foi atualizada");
            console.log(updatedActivity)
            this.activitiesByDay[updatedActivity.day][updatedActivity.position]={
                activity: updatedActivity.activity,
                start: updatedActivity.start,
                end: updatedActivity.end
            }
        },

        removeActivity(data){
            let day = data.day
            let pos = data.position
            this.activitiesByDay[day].splice(pos, 1)
            console.log(this.activitiesByDay[day])
        }
    }
    
}
</script>
<style scoped>
.carousel-wrapper {
  overflow-x: hidden;
  overflow-y: auto;
}

</style>
