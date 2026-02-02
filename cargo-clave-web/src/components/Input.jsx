import React from 'react';

const Input = ({ label, name, type = 'text', value, onChange, placeholder, required, error, className = '', ...props }) => {
    return (
        <div className={`form-group ${className}`}>
            {label && (
                <label className="block text-sm font-medium text-dark-gray mb-1" htmlFor={name}>
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className={`w-full px-4 py-2 rounded-md border ${error ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-teal-primary focus:border-transparent transition-all`}
                {...props}
            />
            {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
        </div>
    );
};

export default Input;
