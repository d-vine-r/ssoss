"use client"
import { motion } from 'framer-motion'
import React from 'react';
interface SendSmarterProps {
    id?: string;
}

const SendSmarter: React.FC<SendSmarterProps> = ({ id }) => {
    return (
    <section id={id}>
        <div className='bg-[url(/collagge.png)] bg-cover bg-fixed bg-center h-screen grid grid-cols-3 text-white text-4xl font-bold gap-4'>
          <motion.div
            initial={{ 
              opacity:0,
              position: 'left',
             }}
            whileInView={{ 
              opacity: 1, 
              x: 100,
            }}
            transition={{ duration: 0.9, delay: 0.5 }}
           className='p-[32px] col-span-2 text-[12rem] text-center text-black place-self-start'>
            Our
          </motion.div>
          <div></div>
          <div></div>
          <div></div>
          <motion.div
            initial={{ 
              opacity:0,
              position: 'right',
             }}
            whileInView={{ 
              opacity: 1, 
              x: -100,
            }}
            transition={{ duration: 0.9, delay: 0.5 }}
           className='p-[32px] grid-row-2 text-[12rem] text-center text-black place-self-end'>
            Work
          </motion.div>
        </div>
    </section>
    )
}

export default SendSmarter