"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import useVerifyTransaction from '../hooks/useVerifyTransaction';
import useCompleteOrder from '../hooks/useCompleteOrder';
import { showToast } from '../components/ToastNotifier';

const PaymentCallbackPage = () => {
    const router = useRouter();
    const { mutate: verify } = useVerifyTransaction();
    const { mutate: complete, isSuccess: orderCompleted } = useCompleteOrder();
    const reference = new URLSearchParams(window.location.search).get('reference');
    useEffect(() => {
        console.log("Reference from URL:", reference); 
        if (reference) {
            verify(
                { reference },
                {
                    onSuccess: (verifyData) => {
                        if (verifyData.status) {
                            complete({ orderId: verifyData.data.id});
                        } else {
                            showToast('Payment verification failed: ' + verifyData.message, 'error');
                        }
                    },
                    onError: (error) => {
                        showToast('Payment verification error: ' + error.message, 'error');
                    }
                }
            );
        }
    }, [router, reference]); // Removed verifyTransaction and completeOrder from dependencies

    useEffect(() => {
        if (orderCompleted) {
            router.push('/order-success');
        }
    }, [orderCompleted, router]);

    return (
        <div>PaymentCallbackPage</div>
    );
};

export default PaymentCallbackPage