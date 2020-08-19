import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.div`
  margin-bottom: 1.5rem;
`

const List = styled.ul`
  list-style: none;
  float: right;
`

const ListLinkItem = styled.li`
  display: inline-block;
  margin-right: 1rem;
`

const ListLink = props => (
  <ListLinkItem>
    <Link to={props.to}>{props.children}</Link>
  </ListLinkItem>
)

const AppLink = styled(Link)`
  text-shadow: none;
  background-image: none;
`

const Title = styled.h3`
  display: inline;
`

export default function Header() {
  return (
    <Container>
      <AppLink to="/">
        <Title style={{ display: `inline` }}>Blog</Title>
      </AppLink>
      <List>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </List>
    </Container>
  )
}