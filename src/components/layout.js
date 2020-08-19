import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { Helmet } from "react-helmet"
import Header from "./header"
import Footer from "./footer"

const GlobalStyle = createGlobalStyle`
  body {
    color: #36313d;
  }
`

const Container = styled.div`
  margin: 3rem auto;
  max-width: 650px;
  padding: 0 1rem;
`

export default function Layout({ children }) {
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Lungu Ionut</title>
      </Helmet>
      <GlobalStyle />
      <Header />
        {children}
      <Footer />
    </Container>
  )
}