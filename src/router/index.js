import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
	{
		path: '',
		name: 'Home',
		component: Home,
		meta: {
			title: '魁拔相关demo',
		},
	},
	{
		path: '/AnychartMap',
		name: 'AnychartMap',
		component: () =>import('../views/AnychartMap.vue'),
		meta: {
			title: '魁拔世界地图',
		},
	},
	{
		path: '/EchartsMap',
		name: 'EchartsMap',
		component: () =>import('../views/EchartsMap.vue'),
		meta: {
			title: '魁拔世界地图',
		},
	},
	{
		path: '/Relation',
		name: 'Relation',
		component: () =>import('../views/Relation.vue'),
		meta: {
			title: '魁拔人物关系图',
		},
	},
	
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
	scrollBehavior() {
		document.getElementById('app').scrollIntoView();
	},
});
export default router;
