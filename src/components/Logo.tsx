export default function Logo({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Bottom book layer */}
      <path
        d="M20 82C20 82 35 78 60 78C85 78 100 82 100 82V90C100 90 85 86 60 86C35 86 20 90 20 90V82Z"
        fill="#1D4ED8"
      />
      <path
        d="M20 74C20 74 35 70 60 70C85 70 100 74 100 74V82C100 82 85 78 60 78C35 78 20 82 20 82V74Z"
        fill="#2563EB"
      />
      {/* Middle book spine */}
      <path
        d="M20 66C20 66 35 62 60 62C85 62 100 66 100 66V74C100 74 85 70 60 70C35 70 20 74 20 74V66Z"
        fill="#3B82F6"
      />
      {/* Open book pages */}
      <path
        d="M18 62C18 62 35 56 60 56C85 56 102 62 102 62L100 66C100 66 85 62 60 62C35 62 20 66 20 66L18 62Z"
        fill="#60A5FA"
      />
      {/* Left page */}
      <path
        d="M18 62C18 62 35 56 60 56V30C60 30 35 36 18 42V62Z"
        fill="#DBEAFE"
      />
      {/* Right page */}
      <path
        d="M102 62C102 62 85 56 60 56V30C60 30 85 36 102 42V62Z"
        fill="#DBEAFE"
      />
      {/* Left page shadow */}
      <path
        d="M18 42L60 30V56C35 56 18 62 18 62V42Z"
        fill="#EFF6FF"
        opacity="0.5"
      />
      {/* Book spine edges */}
      <path
        d="M18 42C18 42 35 36 60 30"
        stroke="#3B82F6"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M102 42C102 42 85 36 60 30"
        stroke="#3B82F6"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M18 42V62"
        stroke="#3B82F6"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M102 42V62"
        stroke="#3B82F6"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Play button */}
      <path
        d="M53 40L53 56L67 48L53 40Z"
        fill="#2563EB"
      />
    </svg>
  );
}
