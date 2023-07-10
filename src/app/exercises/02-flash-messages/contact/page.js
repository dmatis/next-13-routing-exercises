'use client';
import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContext } from '../../../../components/ToastProvider';

function ContactPage() {
  const router = useRouter();
  const { createToast } = useContext(ToastContext);

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target[0].value;

    createToast(
      `
    Thanks ${name}!
    Your message was received!`,
      'success'
    );

    router.push('/exercises/02-flash-messages');
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" required={true} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" />

        <button>Submit</button>
      </form>
    </main>
  );
}

export default ContactPage;
