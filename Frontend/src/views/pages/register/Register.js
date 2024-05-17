import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBuilding, cilLockLocked, cilSchool, cilUser } from '@coreui/icons'
import { Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../../actions'

const Register = () => {

  const [schoolName, setSchoolName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const auth = useSelector((state)=> state.auth);

  const signUpHandler = (e) => {
    e.preventDefault();
    const admin = {
      schoolName,name,email,password
    };
    dispatch(register(admin));
  }

  if(auth.isAuthenticated){
    return <Navigate to={'/dashboard'} />
  }

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={signUpHandler}>
                  <h1>Register</h1>
                  <p className="text-body-secondary">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilBuilding} />
                    </CInputGroupText>
                    <CFormInput value={schoolName} onChange={(e)=> setSchoolName(e.target.value)} name='schoolName' placeholder="Enter your school name" autoComplete="school name" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput value={name} onChange={(e)=> setName(e.target.value)} name='name' placeholder="Enter your name" autoComplete="name" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput value={email} onChange={(e)=> setEmail(e.target.value)} name='email' placeholder="Enter your email" autoComplete="email" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      value={password} onChange={(e)=> setPassword(e.target.value)}
                      name='password'
                      type="password"
                      placeholder="Create your password"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton type='submit' color="success">Create Account</CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
