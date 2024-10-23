"use client"

import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { dataMolino } from './dataMolino'
import { subtitle, title } from '@/components/primitives'
import Paragraph from '@/atoms/Paragraph'

export default function MolinoAnimation() {

    const ref = useRef<any>()

    const { scrollYProgress } = useScroll(
        { target: ref }
    )

    const rotate = useTransform(scrollYProgress, [0, 1], [0, -360])
    const numbers = useTransform(scrollYProgress, [0, 1], [0, dataMolino.length])

    return (
        <section className="w-full flex justify-center">
            <div className="container px-6">
                <div className="w-full" ref={ref} style={{ height: `${dataMolino.length * 200}vh` }}>
                    <div className="grid h-screen h-full items-center grid-cols-1 lg:grid-cols-2 sticky top-0">
                        <div className="col-span-1 flex items-center justify-center">
                            <RecursoSvg className="lg:w-full lg:h-auto h-[45vh]" rotate={rotate} numbers={numbers} />
                        </div>
                        <div className="col-span-1">
                            <div className='w-[420px]'>
                                <h4 className={title({ color: "secondary", size: "md", weight: "normal" })}>
                                    <span className='text-primary'>
                                        RepowerLab's {" "}
                                    </span>
                                    Circular Economy Business Model</h4>
                                <div className="h-[400px] w-full relative mt-8">
                                    {
                                        dataMolino.map((el, i) => (
                                            <Text key={"data" + i} numbers={numbers} data={el} index={i} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Text = ({ numbers, data, index }: { index: number, numbers: any, data: { title: string, description: string } }) => {

    const opacity = useTransform(numbers, [index - .5, index], [0, 1])

    return (
        <motion.div className="flex items-center flex-col absolute p-2 top-0 bg-white" style={{ zIndex: index, opacity: index == 0 ? 1 : opacity }}>
            <div className="flex gap-12 items-center w-full">
                <h5 className="text-[42px] text-primary font-bold">{index + 1}</h5>
                <h6 className={subtitle({ colors: "primary" })}>{data.title}</h6>
            </div>
            <Paragraph className='text-primary text-[18px] font-light' text={data.description}></Paragraph>
        </motion.div>
    )
}


const RecursoSvg = (props: any) => {
    const [fill1, setFill1] = useState(false)
    const [fill2, setFill2] = useState(false)
    const [fill3, setFill3] = useState(false)
    const [fill4, setFill4] = useState(false)
    const [fill5, setFill5] = useState(false)
    const [fill6, setFill6] = useState(false)
    const [fill7, setFill7] = useState(false)
    const [fill8, setFill8] = useState(false)
    const primary = "#18413B"
    const secondary = "#BACCE6"

    const data1 = useTransform(props.numbers, [0, 1], [-150, 0])
    const data2 = useTransform(props.numbers, [.5, 1, 1, 2], [0, -150, -150, 0])
    const data2x = useTransform(props.numbers, [.5, 1, 1, 2], [0, 120, 120, 0])
    const data3x = useTransform(props.numbers, [1.5, 2, 2, 3], [0, 150, 150, 0])
    const data4x = useTransform(props.numbers, [2.5, 3, 3, 4], [0, 120, 120, 0])
    const data4y = useTransform(props.numbers, [2.5, 3, 3, 4], [0, 110, 110, 0])
    const data5y = useTransform(props.numbers, [3.5, 4, 4, 5], [0, 150, 150, 0])
    const data6y = useTransform(props.numbers, [4.5, 5, 5, 6], [0, 90, 90, 0])
    const data6x = useTransform(props.numbers, [4.5, 5, 5, 6], [0, -160, -160, 0])
    const data7x = useTransform(props.numbers, [5.5, 6, 6, 7], [0, -150, -150, 0])
    const data8y = useTransform(props.numbers, [6.5, 7, 7, 8], [0, -150, -150, 0])
    const data8x = useTransform(props.numbers, [6.5, 7, 7, 8], [0, -80, -80, 0])

    useEffect(() => {
        props.numbers.on('change', (el: any) => {
            if (el >= 0 && el < .5) {
                setFill1(false)
            } else {
                setFill1(true)
            }
            if (el > .6 && el < 1.6) {
                setFill2(true);
            } else {
                setFill2(false);
            }

            if (el > 2 && el < 3) {
                setFill3(true);
            } else {
                setFill3(false);
            }

            if (el > 3 && el < 4) {
                setFill4(true);
            } else {
                setFill4(false);
            }

            if (el > 4 && el < 5) {
                setFill5(true);
            } else {
                setFill5(false);
            }

            if (el > 5 && el < 6) {
                setFill6(true);
            } else {
                setFill6(false);
            }

            if (el > 6 && el < 7) {
                setFill7(true);
            } else {
                setFill7(false);
            }

            if (el > 7 && el < 8) {
                setFill8(true);
            } else {
                setFill8(false);
            }

        })

    }, [])

    return (
        // <motion.svg style={{ rotate: props.rotate }} {...props} width="1180" height="1180" viewBox="0 0 1180 1180" fill="none" xmlns="http://www.w3.org/2000/svg">
        //     <motion.path className={"duration-[1200] transition-fill"} style={{ y: data1 }} d="M585.412 293.561L548.487 540.736C547.308 548.753 558.7 551.882 561.646 544.255L672.815 264.425C675.172 258.754 669.28 253.083 663.584 255.625L589.34 288.282C587.18 289.259 585.608 291.215 585.215 293.561H585.412Z" fill={fill1 ? primary : secondary} />
        //     <motion.path style={{ y: data8y, x: data8x }} d="M373.682 385.472L524.526 585.128C529.436 591.581 539.649 585.714 536.31 578.283L414.142 302.95C411.589 297.279 403.536 297.475 401.376 303.341L372.503 379.019C371.717 381.17 372.11 383.712 373.485 385.667L373.682 385.472Z" fill={fill8 ? secondary : primary} />




        <motion.svg style={{ rotate: props.rotate }} {...props} v width="1180" height="1180" viewBox="0 0 1180 1180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path style={{ y: data1 }} d="M585.412 293.561L548.487 540.736C547.308 548.753 558.7 551.882 561.646 544.255L672.815 264.425C675.172 258.754 669.28 253.083 663.584 255.625L589.34 288.282C587.18 289.259 585.608 291.215 585.215 293.561H585.412Z" fill={fill1 ? primary : secondary} />
            <motion.path style={{ y: data1 }} d="M612.869 305.589C614.731 305.381 616.595 304.983 618.462 304.396C620.336 303.779 622.144 302.875 623.884 301.683L626.82 302.455L618.717 333.286L614.579 332.198L621.174 307.106C620.732 307.339 620.198 307.563 619.57 307.779C618.973 308.002 618.32 308.195 617.611 308.358C616.932 308.528 616.212 308.672 615.452 308.789C614.722 308.914 614.018 308.999 613.341 309.043L612.869 305.589Z" fill={!fill1 ? primary : secondary} />

            <motion.path style={{ y: data2, x: data2x }} d="M797.537 371.391L598.768 523.724C592.287 528.612 598.375 538.781 605.839 535.457L881.012 410.892C886.707 408.35 886.315 400.332 880.619 398.181L804.411 370.413C802.251 369.631 799.697 370.022 797.733 371.391H797.537Z" fill={fill2 ? secondary : primary} />
            <motion.path style={{ y: data2, x: data2x }} d="M806.138 417.39C805.265 418.067 804.277 418.544 803.171 418.82C802.108 419.101 800.951 419.261 799.701 419.3C798.474 419.321 797.191 419.269 795.852 419.144C794.537 419 793.234 418.847 791.943 418.684C791.212 418.592 790.351 418.484 789.361 418.359C788.39 418.259 787.414 418.201 786.432 418.187C785.451 418.172 784.55 418.212 783.729 418.305C782.928 418.423 782.321 418.642 781.909 418.961L790.907 430.553L788.037 432.781L776.19 417.52C776.316 417.383 776.452 417.258 776.597 417.145C776.743 417.032 776.876 416.929 776.997 416.835C778.136 415.951 779.33 415.314 780.581 414.926C781.876 414.542 783.194 414.315 784.536 414.243C785.878 414.172 787.228 414.211 788.586 414.36C789.944 414.509 791.269 414.665 792.56 414.828C793.611 414.982 794.623 415.109 795.593 415.21C796.607 415.316 797.553 415.358 798.43 415.337C799.349 415.322 800.206 415.201 801 414.973C801.812 414.769 802.558 414.404 803.236 413.877C803.963 413.313 804.486 412.713 804.807 412.075C805.146 411.463 805.335 410.831 805.374 410.18C805.412 409.529 805.297 408.881 805.028 408.235C804.803 407.594 804.465 406.984 804.013 406.402C803.468 405.7 802.873 405.133 802.228 404.702C801.583 404.271 800.948 403.929 800.324 403.676C799.725 403.403 799.158 403.223 798.622 403.133C798.111 403.025 797.718 402.943 797.441 402.886L798.541 399.353C798.953 399.383 799.497 399.484 800.175 399.657C800.877 399.811 801.62 400.069 802.405 400.43C803.19 400.791 803.983 401.262 804.784 401.844C805.585 402.426 806.324 403.153 807.001 404.025C809.051 406.665 809.966 409.119 809.746 411.386C809.569 413.659 808.366 415.66 806.138 417.39Z" fill={!fill2 ? secondary : primary} />

            <motion.path style={{ x: data3x }} d="M893.579 580.824L645.512 543.669C637.459 542.496 634.316 553.838 641.976 556.771L922.845 667.843C928.541 670.19 934.237 664.323 931.683 658.652L899.079 584.539C898.097 582.388 896.133 580.824 893.776 580.433L893.579 580.824Z" fill={fill3 ? secondary : primary} />
            <motion.path style={{ x: data3x }} d="M845.656 601.934C844.85 604.541 844.787 606.56 845.468 607.991C846.14 609.45 847.34 610.448 849.069 610.982C850.182 611.327 851.192 611.382 852.099 611.149C853.006 610.916 853.796 610.486 854.471 609.861C855.176 609.244 855.774 608.45 856.267 607.479C856.781 606.546 857.2 605.553 857.526 604.498L857.853 603.443L861.193 604.476L860.744 605.926C860.518 606.659 860.36 607.429 860.271 608.236C860.172 609.072 860.214 609.871 860.396 610.634C860.577 611.396 860.927 612.082 861.444 612.691C861.991 613.31 862.763 613.773 863.759 614.081C864.579 614.335 865.328 614.406 866.004 614.294C866.681 614.183 867.287 613.937 867.822 613.556C868.347 613.205 868.783 612.73 869.129 612.131C869.495 611.57 869.787 610.938 870.004 610.235C870.439 608.829 870.606 607.564 870.504 606.441C870.393 605.348 870.221 604.396 869.99 603.586L873.6 602.969C873.726 603.393 873.839 603.91 873.939 604.519C874.06 605.166 874.133 605.863 874.159 606.609C874.185 607.355 874.154 608.132 874.065 608.939C873.996 609.784 873.83 610.632 873.567 611.481C873.069 613.093 872.433 614.421 871.661 615.466C870.917 616.52 870.062 617.315 869.094 617.85C868.155 618.394 867.129 618.703 866.015 618.776C864.93 618.857 863.816 618.722 862.674 618.368C861.092 617.879 859.87 617.003 859.008 615.742C858.176 614.489 857.666 613.128 857.479 611.657C857 612.376 856.427 613.034 855.761 613.63C855.095 614.227 854.344 614.684 853.507 615.003C852.661 615.351 851.749 615.551 850.77 615.601C849.782 615.681 848.746 615.553 847.662 615.218C846.344 614.81 845.186 614.195 844.188 613.373C843.211 612.589 842.462 611.587 841.94 610.366C841.41 609.175 841.133 607.789 841.108 606.209C841.083 604.628 841.374 602.857 841.981 600.894C842.217 600.132 842.52 599.359 842.891 598.575C843.253 597.82 843.631 597.118 844.024 596.47C844.417 595.821 844.783 595.26 845.122 594.787C845.461 594.314 845.725 593.978 845.915 593.78L849.23 595.672C848.841 596.098 848.28 596.823 847.546 597.848C846.802 598.902 846.173 600.264 845.656 601.934Z" fill={!fill3 ? secondary : primary} />

            <motion.path style={{ y: data4y, x: data4x }} d="M811.883 791.625L659.468 593.142C654.557 586.689 644.344 592.751 647.683 600.182L771.815 874.537C774.368 880.208 782.421 879.817 784.582 874.146L812.865 798.273C813.651 796.122 813.258 793.58 811.883 791.625Z" fill={fill4 ? secondary : primary} />
            <motion.path style={{ y: data4y, x: data4x }} d="M771.1 778.344C771.528 779.75 771.931 781.459 772.309 783.47C772.707 785.505 773.04 787.654 773.31 789.917C773.557 792.201 773.725 794.51 773.815 796.846C773.882 799.201 773.829 801.416 773.658 803.491L770.535 806.137L757.449 790.696L754.572 793.135L752.312 790.468L755.189 788.029L749.925 781.818L753.084 779.141L758.348 785.353L769.227 776.133L771.1 778.344ZM770.422 799.601C770.489 798.257 770.489 796.81 770.421 795.26C770.35 793.752 770.227 792.208 770.053 790.627C769.879 789.046 769.65 787.472 769.366 785.904C769.059 784.355 768.713 782.88 768.328 781.477L760.608 788.02L770.422 799.601Z" fill={!fill4 ? secondary : primary} />

            <motion.path style={{ y: data5y }} d="M601.721 888.813L642.378 642.226C643.753 634.208 632.361 630.884 629.219 638.51L513.925 916.581C511.568 922.252 517.264 927.923 522.96 925.577L597.793 894.093C599.953 893.116 601.524 891.16 601.917 888.813H601.721Z" fill={fill5 ? secondary : primary} />
            <motion.path style={{ y: data5y }} d="M578.002 857.557C573.49 856.498 570.354 854.863 568.595 852.649C566.806 850.43 566.211 847.769 566.809 844.668C567.077 843.283 567.565 842.05 568.273 840.968C568.951 839.881 569.854 839.009 570.98 838.352C572.076 837.689 573.393 837.256 574.932 837.053C576.47 836.85 578.233 836.941 580.22 837.324C581.003 837.476 581.789 837.69 582.579 837.967C583.369 838.245 584.093 838.54 584.75 838.855C585.408 839.169 585.99 839.469 586.497 839.754C587.005 840.039 587.367 840.266 587.585 840.432L586.065 843.934C585.6 843.594 584.833 843.118 583.764 842.506C582.666 841.888 581.273 841.416 579.587 841.091C578.232 840.829 577.074 840.762 576.112 840.889C575.121 841.009 574.289 841.271 573.619 841.672C572.948 842.074 572.428 842.582 572.059 843.198C571.654 843.839 571.379 844.535 571.234 845.288C571.013 846.432 571.014 847.479 571.237 848.427C571.454 849.406 572.002 850.293 572.879 851.087C573.756 851.881 574.994 852.588 576.592 853.209C578.184 853.86 580.245 854.429 582.774 854.917C582.309 856.358 581.906 857.717 581.566 858.994C581.195 860.266 580.846 861.51 580.517 862.727C580.189 863.944 579.878 865.149 579.585 866.342C579.287 867.565 578.977 868.848 578.655 870.191L563.569 867.28L564.258 863.712L575.685 865.917C575.803 865.471 575.967 864.863 576.178 864.092C576.384 863.35 576.598 862.564 576.821 861.733C577.038 860.931 577.252 860.145 577.464 859.374C577.675 858.602 577.854 857.997 578.002 857.557Z" fill={!fill5 ? secondary : primary} />

            <motion.path style={{ y: data6y, x: data6x }} d="M392.337 814.7L587.766 658.065C594.248 652.981 587.766 643.008 580.499 646.528L308.076 776.959C302.576 779.697 302.969 787.714 308.862 789.67L385.659 815.873C387.819 816.655 390.372 816.264 392.14 814.7H392.337Z" fill={fill6 ? secondary : primary} />
            <motion.path style={{ y: data6y, x: data6x }} d="M408.726 767.172C406.373 769.187 404.021 770.637 401.669 771.521C399.294 772.425 396.981 772.812 394.729 772.682C392.457 772.528 390.279 771.871 388.193 770.71C386.065 769.545 384.071 767.901 382.212 765.779L384.727 763.2C385.928 764.554 387.157 765.682 388.414 766.583C389.651 767.462 390.951 768.084 392.315 768.45C393.679 768.817 395.109 768.883 396.606 768.651C398.079 768.438 399.656 767.875 401.336 766.961C400.538 766.595 399.727 766.119 398.902 765.533C398.057 764.924 397.286 764.212 396.587 763.397C395.41 762.023 394.622 760.679 394.223 759.365C393.824 758.051 393.715 756.792 393.895 755.588C394.051 754.404 394.474 753.295 395.163 752.26C395.809 751.223 396.62 750.285 397.598 749.447C398.483 748.689 399.521 748.062 400.712 747.567C401.903 747.071 403.152 746.809 404.46 746.779C405.747 746.726 407.044 746.968 408.351 747.504C409.658 748.04 410.87 748.96 411.988 750.264C414.262 752.919 415.09 755.723 414.47 758.676C413.831 761.607 411.916 764.439 408.726 767.172ZM399.541 761.472C400.24 762.287 400.97 762.974 401.731 763.533C402.47 764.112 403.289 764.621 404.191 765.06C404.467 764.864 404.755 764.658 405.054 764.442C405.31 764.222 405.566 764.003 405.823 763.784C406.847 762.906 407.754 762.008 408.542 761.09C409.331 760.172 409.925 759.239 410.324 758.291C410.68 757.34 410.809 756.382 410.709 755.417C410.586 754.473 410.126 753.535 409.328 752.603C408.669 751.835 407.948 751.322 407.163 751.066C406.378 750.81 405.58 750.726 404.768 750.816C403.956 750.905 403.2 751.13 402.498 751.489C401.752 751.845 401.1 752.262 400.541 752.741C398.958 754.097 398.076 755.519 397.896 757.006C397.696 758.47 398.245 759.958 399.541 761.472Z" fill={!fill6 ? secondary : primary} />

            <motion.path style={{ x: data7x }} d="M291.189 608.199L540.829 634.207C549.078 634.99 551.631 623.648 543.775 620.91L258.192 522.353C252.3 520.398 246.997 526.46 249.747 531.935L285.69 604.484C286.672 606.635 288.833 608.004 291.189 608.199Z" fill={fill7 ? secondary : primary} />
            <motion.path style={{ x: data7x }} d="M335.102 584.832C332.747 584.12 330.326 583.142 327.837 581.898C325.326 580.618 322.938 579.208 320.672 577.668C318.377 576.121 316.297 574.528 314.431 572.888C312.541 571.212 311.049 569.655 309.955 568.218L306.593 583.351L302.955 582.543L307.355 562.74L310.813 563.508C311.731 564.749 313.06 566.191 314.8 567.834C316.509 569.47 318.487 571.103 320.732 572.733C322.954 574.326 325.386 575.825 328.027 577.228C330.645 578.595 333.326 579.678 336.07 580.476L335.102 584.832Z" fill={!fill7 ? secondary : primary} />

            <motion.path style={{ y: data8y, x: data8x }} d="M373.682 385.472L524.526 585.128C529.436 591.581 539.649 585.714 536.31 578.283L414.142 302.95C411.589 297.279 403.536 297.475 401.376 303.341L372.503 379.019C371.717 381.17 372.11 383.712 373.485 385.667L373.682 385.472Z" fill={fill8 ? secondary : primary} />
            <motion.path style={{ y: data8y, x: data8x }} d="M431.988 381.656C432.787 382.667 433.348 383.748 433.672 384.899C434 386.007 434.073 387.162 433.888 388.363C433.709 389.521 433.235 390.677 432.467 391.832C431.718 393.01 430.669 394.132 429.322 395.197C427.758 396.433 426.276 397.253 424.875 397.656C423.479 398.017 422.202 398.108 421.044 397.928C419.886 397.749 418.861 397.367 417.969 396.782C417.058 396.174 416.317 395.508 415.747 394.787C415.195 394.089 414.78 393.342 414.503 392.545C414.23 391.705 414.055 390.866 413.979 390.027C413.926 389.17 413.969 388.334 414.108 387.521C414.252 386.664 414.468 385.849 414.755 385.075C411.332 385.591 408.585 384.538 406.512 381.916C405.789 381.001 405.285 379.993 404.999 378.889C404.695 377.762 404.62 376.629 404.775 375.49C404.954 374.332 405.371 373.202 406.024 372.099C406.658 370.973 407.552 369.953 408.707 369.04C410.054 367.975 411.371 367.267 412.656 366.915C413.942 366.564 415.142 366.475 416.257 366.649C417.377 366.78 418.374 367.126 419.247 367.687C420.144 368.229 420.878 368.86 421.448 369.582C422 370.28 422.414 371.027 422.692 371.824C422.975 372.577 423.145 373.362 423.203 374.176C423.284 374.972 423.258 375.755 423.124 376.525C423.015 377.276 422.843 377.998 422.609 378.691C426.513 377.795 429.639 378.783 431.988 381.656ZM419.167 392.141C419.51 392.574 419.943 392.974 420.468 393.342C420.998 393.666 421.617 393.88 422.325 393.985C423.014 394.065 423.764 394 424.575 393.79C425.385 393.579 426.248 393.112 427.162 392.39C427.98 391.743 428.595 391.062 429.006 390.346C429.441 389.611 429.709 388.911 429.809 388.246C429.889 387.556 429.836 386.895 429.648 386.262C429.46 385.628 429.166 385.059 428.767 384.554C428.159 383.784 427.482 383.225 426.737 382.875C425.992 382.526 425.171 382.354 424.276 382.358C423.404 382.343 422.469 382.496 421.471 382.816C420.478 383.092 419.415 383.503 418.281 384.047C417.674 385.504 417.421 386.915 417.523 388.281C417.65 389.628 418.198 390.914 419.167 392.141ZM418.064 372.199C417.778 371.838 417.38 371.508 416.87 371.208C416.383 370.889 415.829 370.682 415.207 370.587C414.566 370.468 413.885 370.498 413.166 370.676C412.427 370.829 411.673 371.211 410.903 371.819C410.133 372.428 409.567 373.071 409.204 373.749C408.864 374.408 408.679 375.063 408.646 375.714C408.594 376.341 408.665 376.95 408.858 377.54C409.056 378.087 409.326 378.577 409.668 379.01C410.087 379.54 410.601 379.993 411.212 380.37C411.823 380.747 412.514 381.003 413.284 381.137C414.054 381.27 414.907 381.261 415.842 381.108C416.8 380.937 417.823 380.598 418.908 380.092C419.443 378.692 419.698 377.357 419.671 376.088C419.626 374.794 419.09 373.498 418.064 372.199Z" fill={!fill8 ? secondary : primary} />
        </motion.svg>

    )
}




