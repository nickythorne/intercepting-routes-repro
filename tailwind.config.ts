import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './app/**/*.tsx',
        './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
    ],
    theme: {
        extend: {
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;',
                'fade-in': 'fadeIn 1.5s ease-in-out',
                slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
                slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
                slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
                slideRightAndFade: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
            },
            keyframes: {
                fadeIn: {
                    from: { opacity: '0%' },
                    to: { opacity: '100%' },
                },
                slideDownAndFade: {
                    from: { opacity: '0', transform: 'translateY(-2px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                slideLeftAndFade: {
                    from: { opacity: '0', transform: 'translateX(2px)' },
                    to: { opacity: '1', transform: 'translateX(0)' },
                },
                slideUpAndFade: {
                    from: { opacity: '0', transform: 'translateY(2px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                slideRightAndFade: {
                    from: { opacity: '0', transform: 'translateX(-2px)' },
                    to: { opacity: '1', transform: 'translateX(0)' },
                },
            },
        },
    },
};

export default config;
