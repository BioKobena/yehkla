import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Yekkhla | Contacts</title>
            </Helmet>
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                exit={{x: window.innerWidth, transition:{duration:0.1}}}
            >
                <p>
                    Nous sommes dans la partie contact
                </p>

            </motion.div>
        </>
    )
}

export default Contact