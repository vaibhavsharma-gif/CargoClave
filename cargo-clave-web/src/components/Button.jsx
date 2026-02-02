import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({
    children,
    variant = 'primary',
    to = null,
    onClick = null,
    className = '',
    type = 'button'
}) => {
    const baseClass = 'btn';
    // Mapping variants to our index.css classes
    let variantClass = 'btn-primary';
    if (variant === 'secondary') variantClass = 'btn-secondary';
    if (variant === 'outline') variantClass = 'btn-outline';

    const combinedClass = `${baseClass} ${variantClass} ${className}`;

    if (to) {
        return (
            <Link to={to} className={combinedClass}>
                {children}
            </Link>
        );
    }

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={combinedClass}
            onClick={onClick}
            type={type}
        >
            {children}
        </motion.button>
    );
};

export default Button;
