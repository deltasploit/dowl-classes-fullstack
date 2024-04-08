/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ResetPasswordImport } from './routes/reset-password'
import { Route as RecoverPasswordImport } from './routes/recover-password'
import { Route as LoginImport } from './routes/login'
import { Route as LayoutImport } from './routes/_layout'
import { Route as LayoutIndexImport } from './routes/_layout/index'
import { Route as LayoutSettingsImport } from './routes/_layout/settings'
import { Route as LayoutPaymentsImport } from './routes/_layout/payments'
import { Route as LayoutGroupsImport } from './routes/_layout/groups'
import { Route as LayoutAdminImport } from './routes/_layout/admin'
import { Route as LayoutStudentsIndexImport } from './routes/_layout/students.index'
import { Route as LayoutLessonsIndexImport } from './routes/_layout/lessons.index'
import { Route as LayoutStudentsStudentIdImport } from './routes/_layout/students.$studentId'
import { Route as LayoutLessonsLessonIdImport } from './routes/_layout/lessons.$lessonId'

// Create/Update Routes

const ResetPasswordRoute = ResetPasswordImport.update({
  path: '/reset-password',
  getParentRoute: () => rootRoute,
} as any)

const RecoverPasswordRoute = RecoverPasswordImport.update({
  path: '/recover-password',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const LayoutIndexRoute = LayoutIndexImport.update({
  path: '/',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutSettingsRoute = LayoutSettingsImport.update({
  path: '/settings',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutPaymentsRoute = LayoutPaymentsImport.update({
  path: '/payments',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutGroupsRoute = LayoutGroupsImport.update({
  path: '/groups',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutAdminRoute = LayoutAdminImport.update({
  path: '/admin',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutStudentsIndexRoute = LayoutStudentsIndexImport.update({
  path: '/students/',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutLessonsIndexRoute = LayoutLessonsIndexImport.update({
  path: '/lessons/',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutStudentsStudentIdRoute = LayoutStudentsStudentIdImport.update({
  path: '/students/$studentId',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutLessonsLessonIdRoute = LayoutLessonsLessonIdImport.update({
  path: '/lessons/$lessonId',
  getParentRoute: () => LayoutRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_layout': {
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/recover-password': {
      preLoaderRoute: typeof RecoverPasswordImport
      parentRoute: typeof rootRoute
    }
    '/reset-password': {
      preLoaderRoute: typeof ResetPasswordImport
      parentRoute: typeof rootRoute
    }
    '/_layout/admin': {
      preLoaderRoute: typeof LayoutAdminImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/groups': {
      preLoaderRoute: typeof LayoutGroupsImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/payments': {
      preLoaderRoute: typeof LayoutPaymentsImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/settings': {
      preLoaderRoute: typeof LayoutSettingsImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/': {
      preLoaderRoute: typeof LayoutIndexImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/lessons/$lessonId': {
      preLoaderRoute: typeof LayoutLessonsLessonIdImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/students/$studentId': {
      preLoaderRoute: typeof LayoutStudentsStudentIdImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/lessons/': {
      preLoaderRoute: typeof LayoutLessonsIndexImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/students/': {
      preLoaderRoute: typeof LayoutStudentsIndexImport
      parentRoute: typeof LayoutImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  LayoutRoute.addChildren([
    LayoutAdminRoute,
    LayoutGroupsRoute,
    LayoutPaymentsRoute,
    LayoutSettingsRoute,
    LayoutIndexRoute,
    LayoutLessonsLessonIdRoute,
    LayoutStudentsStudentIdRoute,
    LayoutLessonsIndexRoute,
    LayoutStudentsIndexRoute,
  ]),
  LoginRoute,
  RecoverPasswordRoute,
  ResetPasswordRoute,
])

/* prettier-ignore-end */
