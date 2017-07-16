import User from "./components/user/User.vue";
import UserDetail from "./components/user/UserDetail.vue";
import Home from "./components/Home.vue";

export const routes = [
  { path: "", component: Home },
  { path: "/user", component: User },
  { path: "/user/:id", component: UserDetail }
];
