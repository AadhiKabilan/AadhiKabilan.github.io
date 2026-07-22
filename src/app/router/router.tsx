import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './RootLayout'

const Index = lazy(() => import('../../pages/Index'))
const Projects = lazy(() => import('../../pages/Projects'))
const ProjectDetail = lazy(() => import('../../pages/ProjectDetail'))
const Experience = lazy(() => import('../../pages/Experience'))
const Skills = lazy(() => import('../../pages/Skills'))
const Contact = lazy(() => import('../../pages/Contact'))

const withSuspense = (Component: React.LazyExoticComponent<() => JSX.Element>) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component />
  </Suspense>
)

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: withSuspense(Index),
      },
      {
        path: '/projects',
        element: withSuspense(Projects),
      },
      {
        path: '/projects/:slug',
        element: withSuspense(ProjectDetail),
      },
      {
        path: '/experience',
        element: withSuspense(Experience),
      },
      {
        path: '/skills',
        element: withSuspense(Skills),
      },
      {
        path: '/contact',
        element: withSuspense(Contact),
      },
    ],
  },
])