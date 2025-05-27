import React, { useState, useRef, useEffect } from 'react'
import { Plus, Minus } from 'lucide-react'
import Header from '../header-footer/Header'
import Footer from '../header-footer/Footer'
import banner from '../assets/images/faqs.png'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaBehance, FaReact } from 'react-icons/fa';

export default function FAQs() {
    const [openAccordion, setOpenAccordion] = useState(2); // Third item open by default

    const faqs = [
        {
            id: 0,
            question: "How do I create a freelancer profile on this platform?",
            answer: "To create a freelancer profile, sign up with your email, complete your profile with skills, experience, and portfolio samples. Add a professional photo and write a compelling bio that highlights your expertise and what makes you unique as a freelancer."
        },
        {
            id: 1,
            question: "How can I find and apply for freelance jobs?",
            answer: "Browse available jobs using our search filters by category, budget, and timeline. Read job descriptions carefully, submit tailored proposals highlighting relevant experience, and include portfolio samples that demonstrate your capabilities for the specific project."
        },
        {
            id: 2,
            question: "How does payment work on the platform?",
            answer: "Clients fund milestones through a secure escrow system. Once a milestone is completed and approved, the payment is released to your account. You can then withdraw funds via PayPal, bank transfer, or other supported payment methods."
        },
        {
            id: 3,
            question: "Is there a fee for using the platform?",
            answer: "Yes, there is a service fee deducted from your earnings. The fee structure is typically tiered based on your total billings with each client, starting at around 20% for new freelancers and decreasing as you build long-term client relationships."
        },
        {
            id: 4,
            question: "What should I do if I have a dispute with a client?",
            answer: "First, try to resolve the issue directly with your client through professional communication. If that doesn't work, contact our dispute resolution team who will mediate between both parties. Keep all project communications and deliverables documented for reference."
        }
    ];

    const toggleAccordion = (id) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    // Accordion Item Component with smooth animation
    const AccordionItem = ({ faq, isOpen, onToggle }) => {
        const contentRef = useRef(null);
        const [height, setHeight] = useState(0);

        useEffect(() => {
            if (contentRef.current) {
                setHeight(isOpen ? contentRef.current.scrollHeight : 0);
            }
        }, [isOpen]);

        return (
            <div className="bg-white border-b border-gray-200">
                {/* Question Header */}
                <button
                    onClick={onToggle}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                    <h3 className="text-lg font-medium text-gray-900 pr-4">
                        {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                            isOpen ? 'bg-orange-500 rotate-180' : 'bg-transparent'
                        }`}>
                            {isOpen ? (
                                <Minus className="w-4 h-4 text-white transition-transform duration-300" />
                            ) : (
                                <Plus className="w-4 h-4 text-gray-600 transition-transform duration-300" />
                            )}
                        </div>
                    </div>
                </button>

                {/* Answer Content with smooth animation */}
                <div
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{ height: `${height}px` }}
                >
                    <div ref={contentRef} className="px-6 pb-5">
                        <div className={`text-gray-600 leading-relaxed pt-2 border-t border-gray-100 transition-opacity duration-300 ${
                            isOpen ? 'opacity-100' : 'opacity-0'
                        }`}>
                            {faq.answer}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>
            <Header />

            {/* Banner */}
            <section
                className="banner-section relative w-[95%] mx-auto h-[450px] flex items-center justify-center bg-cover bg-center my-5"
                style={{
                    backgroundImage: `url(${banner})`,
                    borderRadius: '20px',
                    overflow: 'hidden',
                }}
            >
                <div className="relative z-10 text-center px-4 md:px-10 max-w-7xl">
                    <h1 className="text-white text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        FAQ'S
                    </h1>
                    <p className="text-white text-base sm:text-lg mt-6 leading-relaxed">
                        
                    </p>
                </div>
            </section>

            <section>
                <div className="max-w-4xl mx-auto px-6 py-16 ">
                    {/* Title */}
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
                        Questions & Answers
                    </h2>

                    {/* Accordion */}
                    <div className="space-y-4">
                        {faqs.map((faq) => (
                            <AccordionItem
                                key={faq.id}
                                faq={faq}
                                isOpen={openAccordion === faq.id}
                                onToggle={() => toggleAccordion(faq.id)}
                            />
                        ))}
                    </div>

                    {/* Help Link */}
                    <div className="text-center mt-12">
                        <div className="inline-block border bg-[#fff0e5]  border-orange-300 hover:border-orange-400 px-10 py-2 rounded-full transition-colors duration-200 ">
                            <span className="text-gray-600">
                                Don't find the answer? We can help.{' '}
                            </span>
                            <button className="text-orange-500 hover:text-orange-600 font-medium">
                                Click here
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-10" >
                    <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10" style={{ alignItems: 'center' }}>
                        {/* Left Side - Contact Info */}
                        <div className="space-y-6">
                            {/* <p className="text-sm text-gray-500">/ get in touch /</p> */}
                            <h1 className="text-4xl font-bold text-black leading-snug">

                            </h1>
                            <h5 className="text-3xl md:text-4xl font-bold text-black w-fit">
                                We are always ready <br />
                                <span className="text-amber-500">to help you and</span><br />
                                <span className="text-amber-500">answer </span>your<br />
                                questions
                            </h5>
                            <p className="text-gray-500">
                                Pacific hake false trevally queen parrotfish black prickleback <br />
                                mosshead warbonnet sweepers! Greenling sleeper.
                            </p>

                            <div className="grid grid-cols-2 gap-6 text-sm text-gray-700">
                                <div>
                                    <h3 className="font-semibold mb-1">Call Center</h3>
                                    <p>800 100 955 20 34</p>
                                    <p>+1 (123) 800-234-5678</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Our Location</h3>
                                    <p>USA, New York – 1060</p>
                                    <p>Str. First Avenue 1</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Email</h3>
                                    <p>neuros@email.co</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Social network</h3>
                                    <div className="flex space-x-3 mt-2">
                                        <a href="#" className="w-8 h-8 flex items-center justify-center bg-[#fff0e5]  text-orange-500 hover:bg-orange-500 hover:text-white transition">
                                            <FaFacebookF size={14} />
                                        </a>
                                        <a href="#" className="w-8 h-8 flex items-center justify-center bg-[#fff0e5]  text-orange-500 hover:bg-orange-500 hover:text-white transition">
                                            <FaTwitter size={14} />
                                        </a>
                                        <a href="#" className="w-8 h-8 flex items-center justify-center bg-[#fff0e5]   text-orange-500 hover:bg-orange-500 hover:text-white transition">
                                            <FaLinkedinIn size={14} />
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Form */}
                        <div className="bg-[#fff0e5] p-8 rounded-xl shadow-sm">
                            <h2 className="text-lg font-semibold text-gray-800">Get in Touch</h2>
                            <p className="text-sm text-gray-500 mb-6">
                                Define your goals and identify areas where AI can add <br />
                                value to your business
                            </p>
                            <form className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Full name"
                                    className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none"
                                />
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none"
                                />
                                <textarea
                                    placeholder="Message"
                                    rows={4}
                                    className="w-full border-b border-gray-300 bg-transparent py-2 resize-none focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    className="bg-orange-500 text-white px-6 py-2 rounded-full mt-4 hover:bg-gray-800 transition-all duration-300"
                                >
                                    ➔ Send a message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}