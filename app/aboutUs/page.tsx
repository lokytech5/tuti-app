import React from 'react'
import Image from 'next/image';
import { FaAward, FaRecycle, FaHeart } from 'react-icons/fa';

const AboutUsPage = () => {
    return (
        <div className="container mx-auto p-4 text-secondary-content">
        <h2 className="text-5xl font-bold text-center my-10">About Tuti Hairs</h2>
        
        {/* Enhanced Owner's Section with Additional Styling */}
        <div className="flex flex-col md:flex-row items-center mb-12 gap-6">
            <div className="flex-1">
                <Image src="/images/curated1.jpeg" alt="Owner" width={500} height={300} className="rounded-lg shadow-xl"/>
            </div>
            <div className="flex-1">
                <h3 className="text-4xl font-semibold mb-4">Adaeze Diakodue</h3>
                <p className="text-lg">
                    Discover the inspiring journey of Jane Doe, the heart and soul behind Tuti Hairs. From her early days in the beauty industry to the inception of our beloved brand, learn about the passion and dedication that drives everything we do.
                </p>
            </div>
        </div>

        {/* Philosophy and Values Section with Icons */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-lg my-8 shadow-lg text-white">
            <h3 className="text-4xl font-semibold text-center mb-6">Our Philosophy and Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                    <FaAward className="text-6xl mx-auto mb-4"/>
                    <h4 className="text-xl font-semibold">Excellence in Quality</h4>
                    <p>Commitment to providing the highest quality hair products, crafted with care and precision.</p>
                </div>
                <div>
                    <FaRecycle className="text-6xl mx-auto mb-4"/>
                    <h4 className="text-xl font-semibold">Sustainability</h4>
                    <p>Embracing eco-friendly practices and sustainable sourcing to protect our planet.</p>
                </div>
                <div>
                    <FaHeart className="text-6xl mx-auto mb-4"/>
                    <h4 className="text-xl font-semibold">Customer Love</h4>
                    <p>Putting our customers at the heart of everything we do, ensuring satisfaction and loyalty.</p>
                </div>
            </div>
        </div>

        {/* Redesigned Testimonials with Carousel */}
        <div className="mt-10">
            <h3 className="text-4xl font-semibold mb-6 text-center">Customer Experiences</h3>
            <div className="flex overflow-x-auto gap-4">
                {/* Replace with actual testimonials */}
                <div className="min-w-80 bg-white p-6 rounded shadow-lg">
                <p className="text-lg">Absolutely adore the texture and quality of Tuti Hairs. It&apos;s been a game-changer for my style!</p>                   
                 <cite className="block mt-4 font-semibold"> Isabella K.</cite>
                    <cite className="block mt-4 font-semibold">– Isabella K.</cite>
                </div>
                {/* Repeat for other testimonials */}
            </div>
        </div>
    </div>
);
};

export default AboutUsPage