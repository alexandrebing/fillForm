<template>
    <div>
        <h1>Hello World</h1>
        <div>
            <p>form</p>
            <child-component :names="names" @removeItem="remove($event)"/>
            <button @click="add()">add</button>
            <button @click="consult()">consult list</button>
        </div>
    </div>
</template>
 <script>
 import Child from "./Child";
 export default {
     data: ()=>{
         return{
             names: [[{
                        nome:"Inserir nome",
                        idade: 0,
                        sexo: ""
                     }],[{
                         nome:"",
                         idade: 0,
                         sexo: "o que ele quiser"
                     }]]
         }
     },

     components:{
         'child-component': Child
     },

     methods:{
         remove(index){
             this.names.splice(index,1)
             console.log(this.names)
         },

         add(){
             this.names.push({nome: "Inserir nome", idade: 0})
         },

         consult(){
             console.log(this.names)
         }
     }
     
 }
 </script>
 
 <style>
 input{
     margin: 0 auto;
     margin-top: 15px;
 }

 .center{
     display: block;
 }
 
 </style>
 