import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const bracket = css`
  stroke: var(--color-brand-500);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;

  .dark-mode & {
    stroke: var(--color-brand-300);
  }
`;

const Logo = ({ className, width }) => (
  <svg
    className={className}
    viewBox="0 0 247 61"
    xmlns="http://www.w3.org/2000/svg"
    css={css`
      fill: none;
      width: ${width || '247px'};
    `}
  >
    <path
      d="M84.7406 21.06C86.9406 21.06 88.8706 21.49 90.5306 22.35C92.2106 23.21 93.5006 24.44 94.4006 26.04C95.3206 27.62 95.7806 29.46 95.7806 31.56C95.7806 33.66 95.3206 35.5 94.4006 37.08C93.5006 38.64 92.2106 39.85 90.5306 40.71C88.8706 41.57 86.9406 42 84.7406 42H77.4206V21.06H84.7406ZM84.5906 38.43C86.7906 38.43 88.4906 37.83 89.6906 36.63C90.8906 35.43 91.4906 33.74 91.4906 31.56C91.4906 29.38 90.8906 27.68 89.6906 26.46C88.4906 25.22 86.7906 24.6 84.5906 24.6H81.6206V38.43H84.5906ZM114.374 33.33C114.374 33.93 114.334 34.47 114.254 34.95H102.104C102.204 36.15 102.624 37.09 103.364 37.77C104.104 38.45 105.014 38.79 106.094 38.79C107.654 38.79 108.764 38.12 109.424 36.78H113.954C113.474 38.38 112.554 39.7 111.194 40.74C109.834 41.76 108.164 42.27 106.184 42.27C104.584 42.27 103.144 41.92 101.864 41.22C100.604 40.5 99.6145 39.49 98.8945 38.19C98.1945 36.89 97.8445 35.39 97.8445 33.69C97.8445 31.97 98.1945 30.46 98.8945 29.16C99.5945 27.86 100.574 26.86 101.834 26.16C103.094 25.46 104.544 25.11 106.184 25.11C107.764 25.11 109.174 25.45 110.414 26.13C111.674 26.81 112.644 27.78 113.324 29.04C114.024 30.28 114.374 31.71 114.374 33.33ZM110.024 32.13C110.004 31.05 109.614 30.19 108.854 29.55C108.094 28.89 107.164 28.56 106.064 28.56C105.024 28.56 104.144 28.88 103.424 29.52C102.724 30.14 102.294 31.01 102.134 32.13H110.024ZM124.37 38.13L128.57 25.38H133.04L126.89 42H121.79L115.67 25.38H120.17L124.37 38.13ZM150.849 33.33C150.849 33.93 150.809 34.47 150.729 34.95H138.579C138.679 36.15 139.099 37.09 139.839 37.77C140.579 38.45 141.489 38.79 142.569 38.79C144.129 38.79 145.239 38.12 145.899 36.78H150.429C149.949 38.38 149.029 39.7 147.669 40.74C146.309 41.76 144.639 42.27 142.659 42.27C141.059 42.27 139.619 41.92 138.339 41.22C137.079 40.5 136.089 39.49 135.369 38.19C134.669 36.89 134.319 35.39 134.319 33.69C134.319 31.97 134.669 30.46 135.369 29.16C136.069 27.86 137.049 26.86 138.309 26.16C139.569 25.46 141.019 25.11 142.659 25.11C144.239 25.11 145.649 25.45 146.889 26.13C148.149 26.81 149.119 27.78 149.799 29.04C150.499 30.28 150.849 31.71 150.849 33.33ZM146.499 32.13C146.479 31.05 146.089 30.19 145.329 29.55C144.569 28.89 143.639 28.56 142.539 28.56C141.499 28.56 140.619 28.88 139.899 29.52C139.199 30.14 138.769 31.01 138.609 32.13H146.499ZM158.115 19.8V42H153.915V19.8H158.115ZM169.644 42.27C168.044 42.27 166.604 41.92 165.324 41.22C164.044 40.5 163.034 39.49 162.294 38.19C161.574 36.89 161.214 35.39 161.214 33.69C161.214 31.99 161.584 30.49 162.324 29.19C163.084 27.89 164.114 26.89 165.414 26.19C166.714 25.47 168.164 25.11 169.764 25.11C171.364 25.11 172.814 25.47 174.114 26.19C175.414 26.89 176.434 27.89 177.174 29.19C177.934 30.49 178.314 31.99 178.314 33.69C178.314 35.39 177.924 36.89 177.144 38.19C176.384 39.49 175.344 40.5 174.024 41.22C172.724 41.92 171.264 42.27 169.644 42.27ZM169.644 38.61C170.404 38.61 171.114 38.43 171.774 38.07C172.454 37.69 172.994 37.13 173.394 36.39C173.794 35.65 173.994 34.75 173.994 33.69C173.994 32.11 173.574 30.9 172.734 30.06C171.914 29.2 170.904 28.77 169.704 28.77C168.504 28.77 167.494 29.2 166.674 30.06C165.874 30.9 165.474 32.11 165.474 33.69C165.474 35.27 165.864 36.49 166.644 37.35C167.444 38.19 168.444 38.61 169.644 38.61ZM185.595 27.78C186.135 27.02 186.875 26.39 187.815 25.89C188.775 25.37 189.865 25.11 191.085 25.11C192.505 25.11 193.785 25.46 194.925 26.16C196.085 26.86 196.995 27.86 197.655 29.16C198.335 30.44 198.675 31.93 198.675 33.63C198.675 35.33 198.335 36.84 197.655 38.16C196.995 39.46 196.085 40.47 194.925 41.19C193.785 41.91 192.505 42.27 191.085 42.27C189.865 42.27 188.785 42.02 187.845 41.52C186.925 41.02 186.175 40.39 185.595 39.63V49.92H181.395V25.38H185.595V27.78ZM194.385 33.63C194.385 32.63 194.175 31.77 193.755 31.05C193.355 30.31 192.815 29.75 192.135 29.37C191.475 28.99 190.755 28.8 189.975 28.8C189.215 28.8 188.495 29 187.815 29.4C187.155 29.78 186.615 30.34 186.195 31.08C185.795 31.82 185.595 32.69 185.595 33.69C185.595 34.69 185.795 35.56 186.195 36.3C186.615 37.04 187.155 37.61 187.815 38.01C188.495 38.39 189.215 38.58 189.975 38.58C190.755 38.58 191.475 38.38 192.135 37.98C192.815 37.58 193.355 37.01 193.755 36.27C194.175 35.53 194.385 34.65 194.385 33.63ZM217.177 33.33C217.177 33.93 217.137 34.47 217.057 34.95H204.907C205.007 36.15 205.427 37.09 206.167 37.77C206.907 38.45 207.817 38.79 208.897 38.79C210.457 38.79 211.567 38.12 212.227 36.78H216.757C216.277 38.38 215.357 39.7 213.997 40.74C212.637 41.76 210.967 42.27 208.987 42.27C207.387 42.27 205.947 41.92 204.667 41.22C203.407 40.5 202.417 39.49 201.697 38.19C200.997 36.89 200.647 35.39 200.647 33.69C200.647 31.97 200.997 30.46 201.697 29.16C202.397 27.86 203.377 26.86 204.637 26.16C205.897 25.46 207.347 25.11 208.987 25.11C210.567 25.11 211.977 25.45 213.217 26.13C214.477 26.81 215.447 27.78 216.127 29.04C216.827 30.28 217.177 31.71 217.177 33.33ZM212.827 32.13C212.807 31.05 212.417 30.19 211.657 29.55C210.897 28.89 209.967 28.56 208.867 28.56C207.827 28.56 206.947 28.88 206.227 29.52C205.527 30.14 205.097 31.01 204.937 32.13H212.827ZM224.443 27.96C224.983 27.08 225.683 26.39 226.543 25.89C227.423 25.39 228.423 25.14 229.543 25.14V29.55H228.433C227.113 29.55 226.113 29.86 225.433 30.48C224.773 31.1 224.443 32.18 224.443 33.72V42H220.243V25.38H224.443V27.96ZM238.732 42.27C237.372 42.27 236.152 42.03 235.072 41.55C233.992 41.05 233.132 40.38 232.492 39.54C231.872 38.7 231.532 37.77 231.472 36.75H235.702C235.782 37.39 236.092 37.92 236.632 38.34C237.192 38.76 237.882 38.97 238.702 38.97C239.502 38.97 240.122 38.81 240.562 38.49C241.022 38.17 241.252 37.76 241.252 37.26C241.252 36.72 240.972 36.32 240.412 36.06C239.872 35.78 239.002 35.48 237.802 35.16C236.562 34.86 235.542 34.55 234.742 34.23C233.962 33.91 233.282 33.42 232.702 32.76C232.142 32.1 231.862 31.21 231.862 30.09C231.862 29.17 232.122 28.33 232.642 27.57C233.182 26.81 233.942 26.21 234.922 25.77C235.922 25.33 237.092 25.11 238.432 25.11C240.412 25.11 241.992 25.61 243.172 26.61C244.352 27.59 245.002 28.92 245.122 30.6H241.102C241.042 29.94 240.762 29.42 240.262 29.04C239.782 28.64 239.132 28.44 238.312 28.44C237.552 28.44 236.962 28.58 236.542 28.86C236.142 29.14 235.942 29.53 235.942 30.03C235.942 30.59 236.222 31.02 236.782 31.32C237.342 31.6 238.212 31.89 239.392 32.19C240.592 32.49 241.582 32.8 242.362 33.12C243.142 33.44 243.812 33.94 244.372 34.62C244.952 35.28 245.252 36.16 245.272 37.26C245.272 38.22 245.002 39.08 244.462 39.84C243.942 40.6 243.182 41.2 242.182 41.64C241.202 42.06 240.052 42.27 238.732 42.27Z"
      css={css`
        fill: var(--logo-text-color, var(--heading-text-color));
      `}
    />
    <path d="M42.6667 48L58.6667 32L42.6667 16" css={bracket} />
    <path d="M21.3333 16L5.33334 32L21.3333 48" css={bracket} />
  </svg>
);

Logo.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
};

export default Logo;
