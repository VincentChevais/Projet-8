import { useEffect, useRef, useState } from 'react'

function Reveal({ children, className = '' }) {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(element)
                }
            },
            { threshold: 0.15 }
        )

        observer.observe(element)

        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={ref}
            className={`${className} reveal ${isVisible ? 'reveal--visible' : ''}`}
        >
            {children}
        </div>
    )
}

export default Reveal