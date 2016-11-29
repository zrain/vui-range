import NotFoundComponent from '../components/notfound/notfound';
import TestVuiRangeComponent from '../components/test-vui-range/test-vui-range.vue';

const routes = [
  {
    path: '',
    component: TestVuiRangeComponent
  },
  {
    path: '*',
    component: NotFoundComponent 
  }
]
export default routes;