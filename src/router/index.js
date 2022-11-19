import { createRouter,createWebHashHistory } from 'vue-router';
import {defineAsyncComponent} from "vue";


// createRouter创建路由
const router = createRouter({
    history:createWebHashHistory(),
    //用哈希模式
    routes:[
        {
            path:'/',
            name: 'HomePage',
            component: defineAsyncComponent(() =>
                import('../view/HomePage.vue'))
        },
        {
            path:'/patient',
            name: 'PatientPage',
            component:defineAsyncComponent(()=>
                import('../view/PatientPage.vue'))
        },
        {
            path:'/patient/information',
            name: 'InformationPage',
            component:defineAsyncComponent(()=>
                import('../view/mainviews/InformationPage.vue'))
        },
        {
            path:'/patient/evidence',
            name: 'EvidencePage',
            component:defineAsyncComponent(()=>
                import('../view/mainviews/EvidencePage.vue'))
        },
        {
            path:'/patient/solution',
            name: 'SolutionPage',
            component:defineAsyncComponent(()=>
                import('../view/mainviews/SolutionPage.vue'))
        },
        {
            path:'/patient/aboutus',
            name: 'AboutUsPage',
            component:defineAsyncComponent(()=>
                import('../view/mainviews/AboutUsPage.vue'))
        }
    ]
});

export default router; //暴露router路由