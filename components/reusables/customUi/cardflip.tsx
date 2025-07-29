"use client"
import CardFlip from "@/components/ui/card-flip";
import { motion }  from "framer-motion"

export const CardsCompoonent = () => {
  return (
    <section>
        <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="from-foreground to-foreground/70 bg-gradient-to-b bg-clip-text text-4xl font-bold tracking-tight text-transparent justify-self-center sm:text-5xl"
        >
            We are beyound just Prints
        </motion.h1>
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center min-h-screen gap-6 md:gap-5 p-4 md:p-6 w-full">
            <CardFlip
                title="Simplicity"
                subtitle="Launch your idea in record time"
                description="We believe publishing a book should be as simple as purchasing fast food."
            />
            <CardFlip
                title="High Quality"
                subtitle="Launch your idea in record time"
                description="We have continuously created works that exceed the quality of other publishers."
            />
            <CardFlip
                title="Integrity"
                subtitle="Launch your idea in record time"
                description="You can trust that we will do what we promise."
            />
            <CardFlip
                title="Personal Relationships"
                subtitle="Launch your idea in record time"
                description="We provide supports teams that directs you through every process."
            />
        </div>
    </section>
  );
}

export default CardsCompoonent