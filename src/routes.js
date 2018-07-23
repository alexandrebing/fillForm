import Home from './components/home/Home';
import Form from './components/form/Form';
import Parent from './components/simple/Parent';



export const routes = [
    {
        path:'',
        component: Home
    },
    {
        path:'/formulario',
        component: Form
    },
    {
        path:'/simples',
        component: Parent
    }
  ];