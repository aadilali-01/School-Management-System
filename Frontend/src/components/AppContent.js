import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import routes from '../routes'
import PrivateRoute from './HOC/privateRoute'

const AppContent = () => {
  return (
    <CContainer className="px-4" lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route key={idx} element={<PrivateRoute />}>
                  <Route
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    element={
                      route.isProtected
                        ? <route.element /> : <Navigate to="/login" />
                    }
                  />
                </Route>
              )
            )
          })}
          <Route path="/" element={<Navigate to="dashboard" replace />} />
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
