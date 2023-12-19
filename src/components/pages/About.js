import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from "framer-motion";


const About = () => {
  return (
    <>
      <Helmet>
        <title>Yekkhla | À propos</title>
      </Helmet>
      <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      exit={{x: window.innerWidth, transition:{duration:0.1}}}
      >
        <h1>PAGE À PROPOS</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quasi
          debitis fuga deserunt, placeat qui optio totam perspiciatis error.
          Repudiandae, enim veniam. Dolorum officiis recusandae consequuntur
          veritatis magni aliquam itaque.
        </p>
      </motion.div>
    </>
  )
}

export default About