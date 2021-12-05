import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout pageTitle="About Page">
            <Greeting myName="Harish ST" />
        </Layout>
    )
}

// Greeting Component
const Greeting = (props) => {
    return (
        <p>Hello I am {props.myName}, this blog is about me.</p>
    )
}

export default AboutPage