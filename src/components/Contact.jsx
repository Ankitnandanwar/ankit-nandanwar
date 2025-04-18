import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
// import Button from './Button';
import { FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const [errors, setErrors] = useState({})
    const [isSending, setIsSending] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const validate = () => {
        const errors = {}
        if (!formData.name) errors.name = "Name is Required";
        if (!formData.email) {
            errors.email = "Email is Required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Invalid Email";
        }
        if (!formData.message) errors.message = "Message is Required";
        return errors
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({})
            setIsSending(true)
            emailjs.send(
                'service_oib53yv',
                'template_sxpp35w',
                formData,
                'WNhNnGHyxzXAk5QvK'
            )
                .then((result) => {
                    alert("Message Sent Successfully");
                    setFormData({ name: "", email: "", message: "" })
                })
                .catch((err) => {
                    alert("Error Sending Message");
                })
                .finally(() => {
                    setIsSending(false);
                })
        }
    }


    return (
        <div className='p-4 lg:w-3/4' id='contact'>
            <h2 className='my-8 text-center text-4xl font-semibold tracking-tighter'>Let's Get Connected</h2>
            <motion.form 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.8, delay: 0.7}}
            onSubmit={handleSubmit}>
                <div className='mb-4 flex space-x-4'>
                    <div className='lg:w-1/2'>
                        <input type="text"
                            id='name'
                            name='name'
                            value={formData.name}
                            placeholder='Name'
                            onChange={handleChange}
                            autoComplete='off'
                            className='mb-4 w-full appearance-none rounded-lg 
                    border border-stone-50/30 bg-transparent px-3 py-2 text-sm
                    focus:border-[#abdf3a] focus:outline-none'
                        />
                        {errors.name && (
                            <motion.p 
                            initial={{opacity:0}}
                            whileInView={{opacity:1}}
                            className='text-red-500'>{errors.name}</motion.p>
                        )}
                    </div>

                    <div className='lg:w-1/2'>
                        <input type="email"
                            id='email'
                            name='email'
                            value={formData.email}
                            placeholder='Email'
                            onChange={handleChange}
                            autoComplete='off'
                            className='mb-4 w-full appearance-none rounded-lg 
                    border border-stone-50/30 bg-transparent px-3 py-2 text-sm
                    focus:border-[#abdf3a] focus:outline-none'
                        />
                        {errors.email && (
                            <motion.p 
                            initial={{opacity:0}}
                            whileInView={{opacity:1}}
                            className='text-red-500'>{errors.email}</motion.p>
                        )}
                    </div>
                </div>

                <div className='mb-4'>
                    <textarea
                        id='message'
                        name='message'
                        value={formData.message}
                        placeholder='Message'
                        onChange={handleChange}
                        autoComplete='off'
                        className='mb-4 w-full appearance-none rounded-lg 
                    border border-stone-50/30 bg-transparent px-3 py-2 text-sm
                    focus:border-[#abdf3a] focus:outline-none'
                        rows={6}
                    />
                    {errors.message && (
                        <motion.p 
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        className='text-red-500'>{errors.message}</motion.p>
                    )}
                </div>

                <button type='submit' className={`mb-8 w-full rounded border border-stone-50/30 
                    bg-[#abdf3a] px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-300
                    ${isSending ? "cursor-not-allowed opacity-50" : ""}`} disabled={isSending}>
                    <div className='flex items-center justify-center gap-2'>
                        {isSending ? "Sending..." : "Send"}
                        <FiSend />
                    </div>
                </button>
            </motion.form>
        </div>
    )
}

export default Contact