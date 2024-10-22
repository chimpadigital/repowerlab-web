import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import React from 'react'
import { HowWorkI } from './data'
import { subtitle, title } from '@/components/primitives'
import { RepowerIcon } from '@/components/navicons'


export default function ModalHowWork({ isOpen, onOpenChange, data, index }: { isOpen: boolean, onOpenChange: any, data: HowWorkI, index: number }) {
    return (
        <Modal
            backdrop="opaque"
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            size='5xl'
            classNames={{
                base: "bg-grey-100 text-primary pt-[40px] px-10 pb-[180px] overflow-x-hidden",
                body: "relative pt-[50px] ",
                backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
            }}
        >
            <ModalContent >
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            <h4 className={subtitle({ size: "md", colors: "primary" }) + " flex gap-4"}>{index + 1} - {data.title}</h4>
                            <h5 className="text-[16px] ps-8 font-light">{data.subtitle}</h5>
                        </ModalHeader>
                        <ModalBody>
                            <div className="flex gap-8">
                                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center p-2">
                                    <div>
                                        <Sellers />
                                    </div>
                                </div>
                                <div className="">
                                    <h5 className='font-bold text-[20px]'>For Sellers</h5>
                                    <p className="font-light text-[18px] pt-6">{data.sellers}</p>
                                </div>
                            </div>
                            <div className="flex gap-8">
                                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center p-2">
                                    <div>
                                        <Buyers />
                                    </div>
                                </div>
                                <div className="">
                                    <h5 className='font-bold text-[20px]'>For Buyers</h5>
                                    <p className="font-light text-[18px] pt-6">{data.buyers}</p>
                                </div>
                            </div>
                            <RepowerIcon className="absolute w-[500px] z-[-1] h-[500px] text-white right-[-150px] bottom-[-380px] opacity-50" />
                        </ModalBody>

                    </>
                )}
            </ModalContent>
        </Modal>
    )
}


const Buyers = () => {
    return (
        <svg width="45" height="50" viewBox="0 0 45 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="23" cy="10.9091" rx="7.7" ry="7.63636" fill="#1C4741" />
            <path d="M21.5981 13.9124C21.3147 13.7817 21.0978 13.607 20.9474 13.3881C20.8667 13.2701 20.801 13.1457 20.7503 13.015C20.6695 12.8064 20.4677 12.6695 20.2429 12.6718H20.2318C19.8542 12.6766 19.5993 13.056 19.7386 13.4039C19.8186 13.6038 19.927 13.7888 20.0632 13.958C20.3513 14.3162 20.7242 14.5901 21.1825 14.7798C21.5285 14.9231 21.8997 15.0128 22.2955 15.0474V15.7149C22.2955 15.918 22.461 16.0833 22.666 16.0833C22.871 16.0833 23.0365 15.9188 23.0365 15.7149V15.0506C23.4402 15.0191 23.821 14.9325 24.1772 14.7885C24.634 14.6043 25.0013 14.3327 25.2815 13.973C25.561 13.6133 25.7011 13.1693 25.7011 12.6419V12.6356C25.7011 11.9894 25.4874 11.488 25.0599 11.1298C24.6324 10.7725 24.0213 10.4993 23.2281 10.3112L23.0365 10.2655V7.45072C23.2376 7.4767 23.4236 7.5255 23.5946 7.59792C23.8598 7.71048 24.0743 7.87185 24.239 8.0828C24.3308 8.20008 24.402 8.33075 24.4527 8.4748C24.5295 8.69284 24.7432 8.83295 24.976 8.82508C25.3433 8.81248 25.5919 8.44489 25.4612 8.10327C25.39 7.91593 25.2926 7.74197 25.1707 7.57982C24.9079 7.23032 24.5612 6.95797 24.1313 6.76434C23.7972 6.6132 23.4315 6.5219 23.0365 6.48805V5.82291C23.0365 5.61983 22.871 5.45453 22.666 5.45453C22.461 5.45453 22.2955 5.61904 22.2955 5.82291V6.49041C21.9005 6.52662 21.5372 6.61714 21.2071 6.76434C20.7693 6.95876 20.4234 7.2319 20.1708 7.58296C19.9183 7.93482 19.7916 8.34964 19.7916 8.82822V8.83452C19.7916 9.43984 19.9927 9.92235 20.3964 10.2821C20.7994 10.6418 21.3852 10.9142 22.1546 11.0976L22.2963 11.1314V14.0879C22.0256 14.0596 21.7921 14.0013 21.5989 13.9124H21.5981ZM23.0349 11.3093L23.0721 11.318C23.6809 11.4652 24.0917 11.6493 24.3055 11.8697C24.5192 12.0909 24.6261 12.3688 24.6261 12.7041V12.7104C24.6261 12.9678 24.562 13.2032 24.4345 13.4157C24.3071 13.6282 24.102 13.7967 23.821 13.9218C23.6104 14.0155 23.3476 14.0737 23.0349 14.0974V11.3093ZM21.1841 9.56105C20.9704 9.33829 20.8635 9.07775 20.8635 8.77942V8.77312C20.8635 8.548 20.9324 8.3339 21.0701 8.12924C21.2078 7.92458 21.4121 7.75692 21.6836 7.62626C21.8601 7.54125 22.0636 7.48457 22.294 7.45466V10.0892C21.7659 9.95856 21.3955 9.78303 21.1833 9.56184L21.1841 9.56105Z" fill="#BACCE6" />
            <g clip-path="url(#clip0_7425_6491)">
                <path d="M9.55329 20C11.0799 20.9302 12.767 23.9261 14.6217 25.3297C15.8666 25.4662 18.9612 25.26 20.1576 24.9123C21.455 24.5351 22.497 23.9182 23.8984 23.8357C26.4013 23.6884 28.0813 24.3573 30.3823 24.8523C30.352 24.6657 30.3369 24.486 30.3278 24.2974C30.8952 23.5312 34.9348 20.5088 35.8415 20.0638C35.8758 20.0471 35.9112 20.0314 35.9455 20.0157C37.1167 21.162 38.1102 22.6992 39.1228 23.9958C40.9442 26.3277 42.9666 28.7018 44.5749 31.1761C44.7597 31.46 44.9919 31.7831 45 32.1269C44.1186 33.2565 40.2385 35.8467 38.8442 36.5657C38.5504 36.1119 38.306 35.6198 38.0486 35.1454C37.0107 36.2877 36.1323 37.599 35.2256 38.8406C35.5426 39.207 35.8607 39.6048 36.0707 40.039C36.421 40.7658 36.524 41.6007 36.2312 42.363C35.897 43.2323 35.1741 43.7273 34.3331 44.0868C33.9282 44.1674 33.2952 44.0132 32.97 44.1978C32.9589 44.3127 32.9499 44.4267 32.9347 44.5416C32.8176 45.4256 32.4642 46.1152 31.712 46.6476C31.0315 47.1308 30.135 47.1908 29.3252 47.0709C29.1334 47.5503 28.9304 47.9775 28.57 48.3616C28.0066 48.9627 27.2807 49.334 26.4376 49.3645C25.1624 49.4106 24.1821 48.7152 23.2996 47.9098C23.2552 48.1809 23.2189 48.4736 23.1169 48.7299C22.922 49.224 22.4192 49.6395 21.9205 49.8281C19.777 50.6365 18.832 48.3449 18.3231 48.1691C17.6557 47.9373 16.9278 48.284 16.2351 47.9363C15.6122 47.6239 15.1861 46.9393 14.961 46.3185C13.9554 46.3941 13.0315 46.4197 12.1774 45.796C11.404 45.2312 11.1536 44.4031 11.0092 43.5211C10.67 43.4405 10.3186 43.3659 9.99249 43.2421C9.33622 42.9926 8.75769 42.5133 8.50023 41.864C8.06608 40.7678 8.53961 39.6461 8.97173 38.6324C8.36595 37.3142 7.91867 35.9351 7.44616 34.5678C6.81917 35.1817 6.26992 35.8703 5.64091 36.4881C4.86752 36.0019 4.1537 35.3693 3.42574 34.8183C2.27878 33.951 1.08134 33.116 -0.00201416 32.176C0.550263 31.1859 8.73649 20.7072 9.55329 20Z" fill="#BACCE6" />
                <path d="M21.8982 44.3295L22.0517 44.4522C22.4233 45.2223 22.2718 47.0169 22.084 47.841C22.0032 48.1966 21.8508 48.6062 21.5004 48.784C21.1612 48.9559 20.6584 48.7565 20.3252 48.6494C19.9829 48.3862 19.679 48.1377 19.6447 47.6809C19.5559 46.5307 21.135 45.0996 21.8982 44.3295Z" fill="#1C4741" />
                <path d="M19.2035 41.5182C19.4953 41.53 19.7639 41.5477 20.0415 41.643C20.4252 41.7756 20.7866 42.0172 20.9492 42.3934C21.134 42.8217 21.034 43.3128 20.8502 43.7234C20.3979 44.7371 18.9329 46.6692 17.8748 47.0768C17.6638 47.0916 17.4497 47.1053 17.2408 47.0621C16.8197 46.9747 16.3381 46.7674 16.1221 46.3843C15.9151 46.016 15.9615 45.5288 16.0827 45.1418C16.4724 43.8943 18.0202 42.1027 19.2025 41.5192L19.2035 41.5182Z" fill="#1C4741" />
                <path d="M12.6075 36.5255C13.1567 36.5579 13.811 36.6364 14.2068 37.0519C14.446 37.3034 14.5238 37.6354 14.4935 37.9694C14.3693 39.317 12.4631 41.4141 11.406 42.2726C11.0647 42.3158 10.6821 42.2991 10.355 42.1931C10.0147 42.083 9.72998 41.8866 9.57853 41.5615C9.32511 41.0153 9.49473 40.3268 9.72291 39.8032C10.1914 38.7257 11.4948 36.9694 12.6085 36.5255H12.6075Z" fill="#1C4741" />
                <path d="M15.9676 38.9693C16.2644 39.0017 16.5542 39.04 16.8379 39.1363C17.1822 39.2522 17.4629 39.4801 17.6163 39.8052C17.8152 40.2256 17.7446 40.7157 17.5739 41.1322C17.2044 42.0339 14.968 45.0455 14.0815 45.3982C13.8948 45.353 13.705 45.3068 13.5262 45.2371C13.0022 45.0347 12.5196 44.6811 12.3328 44.1458C12.1652 43.6674 12.2652 43.1812 12.4813 42.7353C13.0285 41.6057 14.7903 39.3917 15.9676 38.9693Z" fill="#1C4741" />
                <path d="M9.61386 21.604C10.7729 22.7513 11.7967 24.1009 12.8417 25.3493C11.8442 26.7147 6.52232 34.3085 5.55306 34.9302L5.28651 34.8016C3.99921 33.9038 2.75633 32.9068 1.51346 31.9501C4.11633 28.4434 6.90195 25.0321 9.61386 21.603V21.604Z" fill="#1C4741" />
                <path d="M35.6668 21.5372C36.5523 22.3191 37.3287 23.5509 38.0627 24.4899C39.9437 26.8954 41.866 29.3157 43.6097 31.8175C42.3315 32.9638 40.8443 33.9814 39.4651 35.0177C38.6806 34.3036 37.8436 32.8734 37.1722 31.9796L31.5777 24.6382C32.9337 23.5951 34.2967 22.5617 35.6668 21.5372Z" fill="#1C4741" />
                <path d="M23.9812 24.9398C25.1554 24.8435 26.4013 25.041 27.5472 25.2767C28.7942 25.5331 30.4631 25.8818 31.5111 26.6312C32.6308 27.4318 36.4523 32.8391 37.3075 34.1268C36.2817 35.4185 35.3246 36.7691 34.3361 38.0882C32.7913 36.992 31.2466 35.9391 29.6231 34.9558C28.0177 33.9854 25.9096 32.5601 24.9413 30.9296C24.5819 30.3245 24.3981 29.4758 23.8519 29.0083C23.754 29.0024 23.653 28.9651 23.5591 28.9916C23.2976 29.0652 22.8564 29.5721 22.6181 29.7577C21.3036 30.7832 19.2732 32.3244 17.5719 32.6348C17.2408 32.6957 17.0116 32.676 16.7238 32.4894C16.6027 32.3008 16.5219 32.1525 16.4886 31.9295C16.3179 30.7675 17.7547 29.2922 18.4544 28.4386C20.1304 26.3935 21.1501 25.2502 23.9822 24.9408L23.9812 24.9398Z" fill="#1C4741" />
                <path d="M13.8292 26.0811C15.3679 26.8375 17.2438 26.3915 18.8764 26.1852C17.6789 27.5182 15.7616 29.4601 15.3507 31.1859C15.2033 31.8037 15.274 32.4393 15.6364 32.9756C15.9373 33.4205 16.3846 33.7348 16.9318 33.8154C18.8552 34.0973 21.9114 31.677 23.3905 30.573C25.9853 34.7308 29.9754 36.0539 33.5769 39.0459C34.2281 39.5871 35.2185 40.4132 35.2519 41.3002C35.271 41.7952 34.9601 42.3806 34.5986 42.7146C32.9539 44.2371 30.8548 40.4309 29.3141 40.3729L29.1738 40.536C29.0859 42.0742 31.3475 42.6527 31.7787 44.1968C31.7605 44.4051 31.7383 44.6241 31.6757 44.8245C31.5454 45.239 31.2436 45.8657 30.7902 46.0238C29.2515 46.5601 28.0662 44.3894 26.9041 43.8923C26.6557 43.7862 26.5144 43.7931 26.2731 43.8904C25.9702 45.0367 27.4453 45.4934 27.8309 46.4403C27.9794 46.8067 27.9975 47.2084 27.8138 47.5669C27.6593 47.8685 27.3665 48.064 27.0374 48.1524C25.4058 48.5914 24.6677 47.3057 23.4531 46.6593C23.4279 46.6456 23.4026 46.6338 23.3774 46.621C23.3946 46.1417 23.4501 45.6447 23.4147 45.1663C23.335 44.0888 22.0113 41.6096 21.1713 40.9338C20.7513 40.5959 19.9204 40.3051 19.3741 40.3896C19.3237 40.3975 19.2732 40.4083 19.2217 40.4181L19.1884 40.2049L19.2055 40.4112C18.7774 39.8788 18.7623 39.1215 18.2746 38.6098C17.4265 37.7189 16.2947 38.1609 15.8323 37.8112C15.6536 37.6756 15.1286 36.4066 14.6439 35.9822C14.1633 35.5609 13.5697 35.3182 12.9174 35.3831C11.5433 35.5206 10.6942 36.6767 9.92484 37.655C9.19487 36.3781 8.79404 34.832 8.2771 33.4569C9.91576 31.0032 11.8775 28.2941 13.8312 26.0801L13.8292 26.0811Z" fill="#1C4741" />
            </g>
            <defs>
                <clipPath id="clip0_7425_6491">
                    <rect width="45" height="30" fill="white" transform="translate(0 20)" />
                </clipPath>
            </defs>
        </svg>

    )
}

const Sellers = () => {
    return (
        <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40.3281 10.8453C39.9123 10.2874 39.2837 9.96731 38.6038 9.96731H35.3371C35.2253 7.35637 34.1913 4.91789 32.3955 3.05778C30.4915 1.08619 27.9603 0 25.268 0C22.5757 0 20.0444 1.08619 18.1405 3.05778C16.3447 4.91789 15.3103 7.35593 15.1989 9.96731H10.6111L9.45058 3.85043C9.39256 3.54426 9.13313 3.32302 8.83165 3.32302H0.630712C0.282559 3.32302 0 3.61569 0 3.9763C0 4.33691 0.282559 4.62958 0.630712 4.62958H8.31236L9.47287 10.7465L12.7223 27.8746L11.7624 29.584C11.2788 30.4446 11.2763 31.4737 11.7556 32.3369C12.235 33.2001 13.0948 33.7153 14.056 33.7153H14.6552C14.2083 34.3002 13.9404 35.0384 13.9404 35.8411C13.9404 37.7334 15.4268 39.2734 17.2542 39.2734C19.0816 39.2734 20.5679 37.7339 20.5679 35.8411C20.5679 35.0389 20.3001 34.3007 19.8531 33.7153H30.0021C29.5552 34.3002 29.2873 35.0384 29.2873 35.8411C29.2873 37.7334 30.7737 39.2734 32.6011 39.2734C34.4285 39.2734 35.9148 37.7339 35.9148 35.8411C35.9148 35.0389 35.647 34.3007 35.2 33.7153H36.4064C36.7545 33.7153 37.0371 33.4227 37.0371 33.0621C37.0371 32.7014 36.7545 32.4088 36.4064 32.4088H14.0565C13.5519 32.4088 13.1007 32.1383 12.8493 31.6854C12.5978 31.2324 12.5991 30.6928 12.8526 30.2412L13.7499 28.6437H35.0243C36.0141 28.6437 36.8807 27.9508 37.1317 26.9587L40.7112 12.7956C40.8836 12.114 40.744 11.4032 40.3281 10.8458V10.8453ZM19.3065 35.8407C19.3065 37.0127 18.3861 37.9664 17.2542 37.9664C16.1223 37.9664 15.2018 37.0131 15.2018 35.8407C15.2018 34.6683 16.1223 33.7149 17.2542 33.7149C18.3861 33.7149 19.3065 34.6683 19.3065 35.8407ZM34.653 35.8407C34.653 37.0127 33.7326 37.9664 32.6007 37.9664C31.4687 37.9664 30.5483 37.0131 30.5483 35.8407C30.5483 34.6683 31.4687 33.7149 32.6007 33.7149C33.7326 33.7149 34.653 34.6683 34.653 35.8407ZM25.268 1.30656C30.1304 1.30656 34.0866 5.40393 34.0866 10.4407C34.0866 15.4775 30.1308 19.5749 25.268 19.5749C20.4052 19.5749 16.4494 15.4775 16.4494 10.4407C16.4494 5.40393 20.4052 1.30656 25.268 1.30656ZM39.491 12.4646L35.9115 26.6277C35.8059 27.0453 35.441 27.3371 35.0243 27.3371H13.9059L10.8588 11.2743H15.2199C15.4074 13.7489 16.4275 16.0493 18.1401 17.8237C20.044 19.7957 22.5753 20.8814 25.2676 20.8814C27.9599 20.8814 30.4911 19.7952 32.395 17.8237C34.1081 16.0493 35.1281 13.7489 35.3152 11.2743H38.6029C38.8893 11.2743 39.1537 11.4089 39.3291 11.6441C39.504 11.8788 39.5629 12.178 39.4905 12.465L39.491 12.4646Z" fill="#1C4741" />
            <path d="M10.4081 11.1082L15.386 10.6556L18.5537 17.8961L22.6264 20.1587H26.6992L29.8669 19.2537L33.0346 16.5385L35.2972 11.1082H39.37L40.275 12.0132L36.2023 27.3992H13.5758L10.4081 11.1082Z" fill="#1C4741" />
            <circle cx="32.582" cy="35.5447" r="2.71517" fill="#1C4741" />
            <circle cx="24.8891" cy="10.6556" r="9.5031" fill="#1C4741" />
            <path d="M23.939 14.1551C23.6077 13.9962 23.3545 13.7836 23.1792 13.5171C23.0846 13.3734 23.0076 13.2222 22.9488 13.0637C22.8546 12.8098 22.6187 12.6434 22.3559 12.6465H22.3425C21.9018 12.6517 21.6037 13.1134 21.7664 13.5376C21.8597 13.781 21.9863 14.0053 22.1452 14.2113C22.4812 14.6464 22.9172 14.9796 23.4525 15.2108C23.8566 15.3855 24.2897 15.4939 24.7526 15.5366V16.3484C24.7526 16.5958 24.946 16.7961 25.1849 16.7961C25.4237 16.7961 25.6171 16.5958 25.6171 16.3484V15.5405C26.0889 15.5022 26.5333 15.3968 26.9496 15.2217C27.4828 14.9979 27.9121 14.6673 28.2388 14.2296C28.5651 13.7919 28.7286 13.2523 28.7286 12.6108V12.6034C28.7286 11.8177 28.4789 11.2071 27.9798 10.772C27.4802 10.3369 26.7671 10.0051 25.8408 9.77597L25.6175 9.72022V6.29616C25.8522 6.32752 26.0695 6.38675 26.2693 6.47516C26.5792 6.61192 26.8298 6.80834 27.0219 7.06442C27.1291 7.20727 27.2124 7.36624 27.2717 7.54088C27.3617 7.80611 27.611 7.97684 27.8822 7.96725C28.3107 7.95201 28.6008 7.50473 28.4486 7.08968C28.3649 6.86234 28.2518 6.64981 28.1097 6.45252C27.8023 6.02745 27.3978 5.69645 26.8962 5.4604C26.5056 5.27661 26.0792 5.16512 25.6179 5.12462V4.31542C25.6179 4.06805 25.4245 3.86771 25.1857 3.86771C24.9469 3.86771 24.7535 4.06805 24.7535 4.31542V5.12767C24.2922 5.17122 23.8684 5.28227 23.4824 5.4604C22.9711 5.69645 22.5678 6.02876 22.2722 6.45644C21.9771 6.88412 21.8295 7.38888 21.8295 7.97074V7.97814C21.8295 8.71417 22.0645 9.30125 22.5354 9.73851C23.006 10.1762 23.6901 10.5068 24.5882 10.7306L24.7539 10.772V14.3681C24.4373 14.3337 24.1652 14.2631 23.9398 14.1547L23.939 14.1551ZM25.6171 10.9889L25.6604 10.9998C26.371 11.1788 26.8512 11.4026 27.101 11.6714C27.3507 11.9401 27.4756 12.278 27.4756 12.6861V12.6935C27.4756 13.0067 27.4012 13.2928 27.2523 13.5515C27.1035 13.8102 26.8647 14.0153 26.5358 14.1669C26.2894 14.2805 25.9833 14.3515 25.6175 14.3798V10.9893L25.6171 10.9889ZM23.4563 8.86225C23.2065 8.59135 23.0816 8.2743 23.0816 7.91107V7.90367C23.0816 7.63016 23.162 7.36929 23.323 7.12017C23.484 6.87149 23.7229 6.66766 24.0395 6.50826C24.2455 6.40461 24.4835 6.3358 24.7526 6.29921V9.50333C24.1362 9.3448 23.7039 9.13096 23.4563 8.86181V8.86225Z" fill="#BACCE6" />
            <circle cx="17.1961" cy="35.5447" r="2.71517" fill="#1C4741" />
        </svg>

    )
}