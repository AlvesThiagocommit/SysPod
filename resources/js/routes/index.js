import authMiddleware from '../middleware/authMiddleware'
import installMiddleware from '../middleware/installMiddleware'
import Check from '../views/install/Check'
import Verify from '../views/install/Verify'
import AdminCreate from '../views/install/AdminCreate'
import SettingsCreate from '../views/install/SettingsCreate'
import SignIn from '../views/SignIn'
import Landing from '../views/Landing'
import Dashboard from '../views/Dashboard'
import Hosts from '../views/Hosts'
import Podcasts from '../views/Podcasts'
import Settings from '../views/Settings'
import Admin from '../views/Admin'
import NotFound from '../views/NotFound'

export default [
  { path: '/install/check', name: 'check', component: Check },
  { path: '/install/verify', name: 'verify', component: Verify },
  { path: '/install/create', name: 'adminCreate', component: AdminCreate },
  { path: '/install/settings', name: 'settingsCreate', component: SettingsCreate },

  { path: '/sign-in', name: 'signIn', component: SignIn },
  { path: '/', name: 'landing', component: Landing, beforeEnter: installMiddleware },
  { path: '/dashboard', name: 'dashboard', component: Dashboard, beforeEnter: authMiddleware },
  { path: '/hosts', name: 'hosts', component: Hosts, beforeEnter: authMiddleware },
  { path: '/podcasts', name: 'podcasts', component: Podcasts, beforeEnter: authMiddleware },
  { path: '/settings', name: 'settings', component: Settings, beforeEnter: authMiddleware },
  { path: '/admin', name: 'admin', component: Admin, beforeEnter: authMiddleware },
  { path: '*', name: 'notFound', component: NotFound }
]
