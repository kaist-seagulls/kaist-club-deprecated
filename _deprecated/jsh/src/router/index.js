import { createWebHistory, createRouter } from 'vue-router';
import NavBarLayout from '@/components/NavBarLayout'
import SideBarLayout from '@/components/SideBarLayout'
import FeedView from '@/components/FeedView'
import ClubProfileView from '@/components/ClubProfileView'
import ClubProfileForm from '@/components/ClubProfileForm'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/clubs',
      component: NavBarLayout,
      children: [
        {
          path: '',
          component: SideBarLayout,
          children: [
            {
              path: ':clubId?',
              component: ClubProfileView
            },
            {
              path: ':clubId?/edit',
              component: ClubProfileForm
            }
          ]
        }
      ],
    },
    {
      path: '/',
      component: NavBarLayout,
      children: [
        {
          path: '',
          component: SideBarLayout,
          children: [
            {
              path: '',
              component: FeedView
            }
          ]
        }
      ]
    }
  ],
});