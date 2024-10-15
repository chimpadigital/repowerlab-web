export const MenuIcon = (props: any) => {
    return (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
    </svg>)
}

export const CloseIcon = (props: any) => {
    return (
        <svg {...props} width="35" height="33" viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_b_5016_11530)">
                <rect width="34.4348" height="33" rx="16.5" fill="#C5C5C5" fill-opacity="0.3" />
                <rect x="0.5" y="0.5" width="33.4348" height="32" rx="16" stroke="#F4F4F4" />
            </g>
            <rect x="10.6715" y="8.60889" width="20.4008" height="1.90265" rx="0.951323" transform="rotate(45 10.6715 8.60889)" fill="white" />
            <rect x="25.097" y="9.9541" width="20.4008" height="1.90265" rx="0.951323" transform="rotate(135 25.097 9.9541)" fill="white" />
            <defs>
                <filter id="filter0_b_5016_11530" x="-20" y="-20" width="74.4348" height="73" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_5016_11530" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_5016_11530" result="shape" />
                </filter>
            </defs>
        </svg>

    )
}