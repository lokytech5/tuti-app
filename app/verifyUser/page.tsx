"use client"
import React, { useEffect, useState } from 'react';
import useUserStore from '../components/useUserStore';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import useVerifyUser from '../hooks/useVerifyUser';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const VerifyUserPage = () => {
    const { isVerified, error, setIsVerified, setError } = useUserStore(state => ({
        isVerified: state.isVerified,
        error: state.error,
        setIsVerified: state.setIsVerified,
        setError: state.setError 
    }));
    const [loading, setLoading] = useState(true);
    const { mutate: verifyUserMutate } = useVerifyUser();
    const searchParams = useSearchParams();

    useEffect(() => {
        const tokenParam = searchParams.get('token');
        if (tokenParam) {
            setLoading(true); // Start loading
            verifyUserMutate(
                { token: tokenParam },
                {
                    onSuccess: () => {
                        setIsVerified(true);
                        setLoading(false);
                    },
                    onError: (error: any) => {
                        setError(error.message || 'Verification failed');
                        setLoading(false);
                    },
                }
            );
        } else {
            setLoading(false); // No token, stop loading
        }
    }, [searchParams, verifyUserMutate, setIsVerified, setError]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
            <div className="bg-secondary-content rounded-xl shadow-xl p-8 text-center w-full max-w-md">
                {loading ? (
                    <div>
                        <span className="loading loading-bars loading-md"></span>
                        <p className="mb-4">Verifying your email, please wait...</p>
                    </div>
                ) : isVerified ? (
                    <div>
                        <FaCheckCircle className="text-4xl text-green-500 mx-auto mb-4" />
                        <h2 className="text-2xl font-semibold mb-4">Email Verified!</h2>
                        <p className="mb-6">Your email has been successfully verified. You are now ready to log in.</p>
                        <Link href="/loginUser">
                            <button className="btn btn-primary">Log In</button>
                        </Link>
                    </div>
                ) : (
                    <div>
                        <FaTimesCircle className="text-4xl text-red-500 mx-auto mb-4" />
                        <h2 className="text-2xl font-semibold mb-4">Verification Failed</h2>
                        <p className="mb-6">We could not verify your email. Please check your inbox for the verification link or contact support if the problem persists.</p>
                        <Link href="/contact-support">
                            <button className="btn btn-outline">Contact Support</button>
                        </Link>
                    </div>
                )}

                {!loading && isVerified && error && <p className="text-red-500 mt-4">{error}</p>}
            </div>
        </div>
    );
};

export default VerifyUserPage;
