"use client"
import { motion } from 'framer-motion'
import React from 'react';
interface SendSmarterProps {
    id?: string;
}

const SendSmarter: React.FC<SendSmarterProps> = ({ id }) => {
    return (
    <section id={id} className='bg-[url(/collagggere.jpg)] bg-cover bg-fixed bg-center '>
        <div className='bg-[#281838]/30 backdrop-blur-[2px] z-12 h-screen grid grid-cols-3 text-white text-4xl font-bold gap-4'>
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
           className='p-[32px] col-span-2 text-[12rem] text-center  place-self-start'>
            My
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
           className='p-[32px] grid-row-2 text-[12rem] text-center place-self-end'>
            Books
          </motion.div>
        </div>
    </section>
    )
}

export default SendSmarter