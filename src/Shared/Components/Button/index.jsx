import React from 'react';
import { LoadingSpinner } from '../../Components';
import './style.scss'

const CustomButton = ({ title = 'Submit', handleClick, variant = 'primary', size = 'md', isLoading = false, children, type = 'button', disabled = false, customStyle, ...rest }) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg';

    const variantStyles = {
        primary: 'primary_btn text-white hover:bg-primary-600 focus:ring-primary-400',
        secondary: 'secondary_btn text-white hover:bg-secondary-600 focus:ring-secondary-400',
        danger: 'danger_btn text-white hover:bg-tertiary-600 focus:ring-tertiary-400',
    };

    const sizeStyles = {
        sm: 'px-3 py-1.5 text-xs',
        md: 'px-4 py-2 text-sm',
        lg: 'px-6 py-3 text-base',
    };

    const combinedClassName = `${customStyle} ${baseStyles} ${variantStyles[variant] || variantStyles.primary} ${sizeStyles[size] || sizeStyles.md} cursor-pointer`;

    return (
        <button
            type={type}
            onClick={handleClick}
            disabled={disabled || isLoading}
            className={combinedClassName}
            {...rest}
        >
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                children || title
            )}
        </button>
    );
};

export default CustomButton;