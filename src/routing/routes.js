import Bar from 'src/components/Bar';
import Foo from 'src/components/Foo';

const routes = [
  {
    path: '/',
    redirect: {
      name: 'Bar',
    },
  },
  {
    path: '/bar',
    name: 'Bar',
    component: Bar,
  },
  {
    path: '/foo',
    name: 'Foo',
    component: Foo,
  },
];

export default routes;
