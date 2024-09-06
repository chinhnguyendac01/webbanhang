import React from 'react';

const IcCompany = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props?.width ?? 20}
            height={props?.height ?? 20}
            viewBox="0 0 20 20"
            fill="none"
        >
            <path
                d="M17.2223 4.44446H12.7778V5.55557H17.2223V17.2222H12.7778V18.3333H18.3334V5.55557C18.3334 5.26088 18.2163 4.97827 18.008 4.7699C17.7996 4.56152 17.517 4.44446 17.2223 4.44446Z"
                fill={props?.color ?? "black"}
            />
            <path
                d="M11.0444 1.66663H3.39995C3.08758 1.66663 2.78801 1.79071 2.56713 2.01159C2.34625 2.23247 2.22217 2.53204 2.22217 2.8444V18.3333H12.2222V2.8444C12.2222 2.53204 12.0981 2.23247 11.8772 2.01159C11.6563 1.79071 11.3568 1.66663 11.0444 1.66663ZM11.1111 17.2222H9.44439V15.5555H4.99995V17.2222H3.33328V2.8444C3.33328 2.83565 3.335 2.82698 3.33835 2.81889C3.3417 2.8108 3.34661 2.80345 3.35281 2.79726C3.359 2.79107 3.36635 2.78616 3.37443 2.78281C3.38252 2.77946 3.39119 2.77774 3.39995 2.77774H11.0444C11.0531 2.77774 11.0618 2.77946 11.0699 2.78281C11.078 2.78616 11.0853 2.79107 11.0915 2.79726C11.0977 2.80345 11.1026 2.8108 11.106 2.81889C11.1093 2.82698 11.1111 2.83565 11.1111 2.8444V17.2222Z"
                fill={props?.color ?? "black"}
            />
            <path
                d="M4.44434 4.44446H5.55545V5.55557H4.44434V4.44446Z"
                fill={props?.color ?? "black"}
            />
            <path
                d="M6.66675 4.44446H7.77786V5.55557H6.66675V4.44446Z"
                fill={props?.color ?? "black"}
            />
            <path
                d="M8.88892 4.44446H10V5.55557H8.88892V4.44446Z"
                fill={props?.color ?? "black"}
            />
            <path
                d="M4.44434 7.22217H5.55545V8.33328H4.44434V7.22217Z"
                fill={props?.color ?? "black"}
            />
            <path
                d="M6.66675 7.22217H7.77786V8.33328H6.66675V7.22217Z"
                fill={props?.color ?? "black"}
            />
            <path
                d="M8.88892 7.22217H10V8.33328H8.88892V7.22217Z"
                fill={props?.color ?? "black"}
            />
            <path d="M4.44434 10H5.55545V11.1111H4.44434V10Z" fill={props?.color ?? "black"} />
            <path d="M6.66675 10H7.77786V11.1111H6.66675V10Z" fill={props?.color ?? "black"} />
            <path d="M8.88892 10H10V11.1111H8.88892V10Z" fill={props?.color ?? "black"} />
            <path
                d="M4.44434 12.7778H5.55545V13.8889H4.44434V12.7778Z"
                fill={props?.color ?? "black"}
            />
            <path
                d="M6.66675 12.7778H7.77786V13.8889H6.66675V12.7778Z"
                fill={props?.color ?? "black"}
            />
            <path
                d="M8.88892 12.7778H10V13.8889H8.88892V12.7778Z"
                fill={props?.color ?? "black"}
            />
            <path
                d="M12.7778 7.22217H13.8889V8.33328H12.7778V7.22217Z"
                fill={props?.color ?? "black"}
            />
            <path d="M15 7.22217H16.1111V8.33328H15V7.22217Z" fill={props?.color ?? "black"} />
            <path d="M12.7778 10H13.8889V11.1111H12.7778V10Z" fill={props?.color ?? "black"} />
            <path d="M15 10H16.1111V11.1111H15V10Z" fill={props?.color ?? "black"} />
            <path
                d="M12.7778 12.7778H13.8889V13.8889H12.7778V12.7778Z"
                fill={props?.color ?? "black"}
            />
            <path d="M15 12.7778H16.1111V13.8889H15V12.7778Z" fill={props?.color ?? "black"} />
        </svg>
    );
};

export default IcCompany;
