import { HomePage } from './page/Home';
import { Detail } from './page/Detail';

export const router = [
    {
        path: "/login",
        exact: true,
        component: HomePage,
    },
    {
        path: "/detail",
        exact: true,
        component: Detail,
    }
];