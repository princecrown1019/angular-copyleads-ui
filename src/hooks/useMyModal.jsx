import React, { useState } from 'react'

export default function useMyModal() {
    const [isOpen, setOpen] = useState(false);

    const open = () => setOpen(true);
    const close = () => setOpen(false);

    return {isOpen,open,close}
}
