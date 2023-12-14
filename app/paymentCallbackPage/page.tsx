"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import useVerifyTransaction from '../hooks/useVerifyTransaction';
import useCompleteOrder from '../hooks/useCompleteOrder';
import { showToast } from '../components/ToastNotifier';
import useOrderStore from '../components/useOrderStore';

const PaymentCallbackPage = () => {
    const router = useRouter();
    const { mutate: complete, isSuccess: orderCompleted, isError, error } = useCompleteOrder();
    const orderId = useOrderStore(state => state.orderId);
    const { mutate: verify } = useVerifyTransaction();
     useEffect(() => {
        if (typeof window !== 'undefined' && orderId) {
            console.log('PaymentCallbackPage orderId:', orderId);
            const reference = new URLSearchParams(window.location.search).get('reference');
            if (reference) {
                verify({ reference },
                    {
                        onSuccess: (verifyData) => {
                            if (verifyData.status) {
                                complete({ orderId });
                            } else {
                                showToast('Payment verification failed: ' + verifyData.message, 'error');
                            }
                        },
                        onError: (verifyError) => {
                            showToast('Payment verification error: ' + verifyError.message, 'error');
                        }
                    }
                );
            } else {
                showToast('No payment reference found.', 'error');
            }
        }
    }, [orderId, verify, complete]); // Removed verifyTransaction and completeOrder from dependencies

    useEffect(() => {
        if (orderCompleted) {
            router.push(`/order-success/${orderId}`);
        }
    }, [orderCompleted, orderId, router]);

    return (
        <div className="container mx-auto p-4 text-secondary-content">
        <h1 className="text-3xl font-bold text-center my-6">Finalizing Your Order</h1>
        {isError && (
            <p className="text-red-500">
                There was an error processing your order: {error?.message || 'Unknown error'}
            </p>
        )}
        {!isError && (
            <div>
                <p>Thank you for your payment. Your transaction has been successful.</p>
                <p>We are now finalizing your order details. A confirmation email will be sent to you shortly.</p>
            </div>
        )}
    </div>
    );
};

export default PaymentCallbackPage