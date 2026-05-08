'use client';
import React, { useEffect, useState } from 'react';

interface Props {
    className?: string;
    style?: React.CSSProperties;
    bold?: boolean;
    children?: React.ReactNode;
}

export default function ObfuscatedEmailLink({ className, style, bold, children }: Props) {
    const [email, setEmail] = useState('');

    useEffect(() => {
        const c = [105, 110, 102, 111, 64, 101, 114, 105, 99, 107, 115, 115, 46, 99, 111, 109];
        setEmail(c.map(n => String.fromCharCode(n)).join(''));
    }, []);

    const emailDisplay = bold ? <span className="font-bold">{email}</span> : email;

    return (
        <a
            href={email ? `mailto:${email}` : undefined}
            className={className}
            style={style}
        >
            {children}
            {emailDisplay}
        </a>
    );
}
