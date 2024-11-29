import styled from "styled-components";

export const HomeWrapper = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;

    & .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
    }
    & .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }
    & .logo.react:hover {
        filter: drop-shadow(0 0 2em #61dafbaa);
    }

    @keyframes logo-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @media (prefers-reduced-motion: no-preference) {
        a:nth-of-type(2) .logo {
            animation: logo-spin infinite 20s linear;
        }
    }

    & .logo-container {
        display: flex;
        justify-content: center
    }

    & .card {
        padding: 2em;
        display: flex;
        flex-direction: column;
        gap: 16px;

        & button {
            color: #fff
        }
    }

    & .read-the-docs {
        color: #888;
    }
`;