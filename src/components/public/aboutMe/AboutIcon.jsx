
export function AboutIcon({ type }) {
  if (type === "react") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <circle cx="12" cy="12" r="1.7" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="8" ry="3.2" stroke="currentColor" strokeWidth="1.6" />
        <ellipse
          cx="12"
          cy="12"
          rx="8"
          ry="3.2"
          stroke="currentColor"
          strokeWidth="1.6"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="8"
          ry="3.2"
          stroke="currentColor"
          strokeWidth="1.6"
          transform="rotate(120 12 12)"
        />
      </svg>
    );
  }

  if (type === "next") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M8.4 15.8V8.2L15.7 15.8V8.2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "javascript") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <rect x="4.5" y="4.5" width="15" height="15" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M10.2 9.2V15.2C10.2 16.15 9.58 16.7 8.75 16.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M13.7 15.35C14.08 16.12 14.7 16.7 15.7 16.7C16.64 16.7 17.25 16.22 17.25 15.47C17.25 14.75 16.76 14.43 15.93 14.07L15.48 13.88C14.17 13.32 13.43 12.62 13.43 11.33C13.43 10.14 14.34 9.2 15.78 9.2C16.81 9.2 17.55 9.56 18.08 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "tailwind") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M7 9.5C8.1 7.6 9.45 6.75 11.05 6.95C13.43 7.25 13.73 9.62 15.35 10.1C16.45 10.42 17.72 9.98 19.15 8.8C18.05 10.7 16.7 11.55 15.1 11.35C12.72 11.05 12.42 8.68 10.8 8.2C9.7 7.88 8.43 8.32 7 9.5Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.85 14.25C5.95 12.35 7.3 11.5 8.9 11.7C11.28 12 11.58 14.37 13.2 14.85C14.3 15.17 15.57 14.73 17 13.55C15.9 15.45 14.55 16.3 12.95 16.1C10.57 15.8 10.27 13.43 8.65 12.95C7.55 12.63 6.28 13.07 4.85 14.25Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "node") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M12 3.8L18.6 7.6V15.25L12 19.05L5.4 15.25V7.6L12 3.8Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M10 9.35V14.65M10 9.35L14 14.65V9.35"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "mongodb") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M12 4.2C14.53 7.08 15.8 9.72 15.8 12.1C15.8 15.28 14.09 17.52 12 19.8C9.91 17.52 8.2 15.28 8.2 12.1C8.2 9.72 9.47 7.08 12 4.2Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M12 6.1V20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "express") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M4.6 9.2H10.2"
          stroke="currentColor"
          strokeWidth="1.55"
          strokeLinecap="round"
        />
        <path
          d="M4.6 12H9.45"
          stroke="currentColor"
          strokeWidth="1.55"
          strokeLinecap="round"
        />
        <path
          d="M4.6 14.8H10.2"
          stroke="currentColor"
          strokeWidth="1.55"
          strokeLinecap="round"
        />
        <path
          d="M13.15 8.65L19.2 15.35"
          stroke="currentColor"
          strokeWidth="1.55"
          strokeLinecap="round"
        />
        <path
          d="M19.2 8.65L13.15 15.35"
          stroke="currentColor"
          strokeWidth="1.55"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "github") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M12 4.6C8.24 4.6 5.2 7.64 5.2 11.4C5.2 14.4 7.14 16.95 9.83 17.85C10.18 17.91 10.31 17.72 10.31 17.55V16.38C8.38 16.79 7.98 15.58 7.98 15.58C7.67 14.8 7.23 14.59 7.23 14.59C6.62 14.18 7.28 14.19 7.28 14.19C7.95 14.24 8.3 14.88 8.3 14.88C8.9 15.91 9.87 15.61 10.28 15.44C10.34 15.01 10.51 14.72 10.7 14.56C9.17 14.39 7.56 13.81 7.56 11.19C7.56 10.44 7.82 9.82 8.27 9.35C8.2 9.18 7.98 8.48 8.34 7.54C8.34 7.54 8.91 7.37 10.27 8.25C10.81 8.1 11.39 8.03 12 8.03C12.61 8.03 13.19 8.1 13.73 8.25C15.09 7.37 15.66 7.54 15.66 7.54C16.02 8.48 15.8 9.18 15.73 9.35C16.18 9.82 16.44 10.44 16.44 11.19C16.44 13.82 14.82 14.39 13.29 14.56C13.53 14.77 13.74 15.18 13.74 15.8V17.55C13.74 17.72 13.87 17.91 14.22 17.85C16.91 16.95 18.85 14.4 18.85 11.4C18.85 7.64 15.81 4.6 12 4.6Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (type === "mysql") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <rect x="6" y="4.8" width="12" height="14.4" rx="2.2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 8.2H15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M9 12H15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M9 15.8H13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "codex") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M9.15 6.2H14.85L17.8 9.15V14.85L14.85 17.8H9.15L6.2 14.85V9.15L9.15 6.2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M9.55 9.45L11.25 12L9.55 14.55"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M14.45 9.45L12.75 12L14.45 14.55" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.55 15.7L12.45 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "database") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <ellipse
          cx="12"
          cy="6.5"
          rx="6.5"
          ry="2.75"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M5.5 6.5V12C5.5 13.52 8.41 14.75 12 14.75C15.59 14.75 18.5 13.52 18.5 12V6.5"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M5.5 12V17.5C5.5 19.02 8.41 20.25 12 20.25C15.59 20.25 18.5 19.02 18.5 17.5V12"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      </svg>
    );
  }

  if (type === "script") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path
          d="M8.25 9.25C8.25 8.28 9.03 7.5 10 7.5H11"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M15.75 14.75C15.75 15.72 14.97 16.5 14 16.5H13"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M11 7.5L9.8 16.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M14.2 7.5L13 16.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "spark") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path
          d="M12 3.75L13.94 8.06L18.25 10L13.94 11.94L12 16.25L10.06 11.94L5.75 10L10.06 8.06L12 3.75Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path
        d="M9 8.5L5.5 12L9 15.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 8.5L18.5 12L15 15.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 6L10.5 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
