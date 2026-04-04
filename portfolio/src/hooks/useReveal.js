import { useEffect, useRef, useState } from 'react'

function useReveal(options = {}) {
    const {
        threshold = 0.15,
        root = null,
        rootMargin = '0px',
        once = true,
    } = options

    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)

                    if (once) {
                        observer.unobserve(element)
                    }
                } else if (!once) {
                    setIsVisible(false)
                }
            },
            {
                threshold,
                root,
                rootMargin,
            }
        )

        observer.observe(element)

        return () => observer.disconnect()
    }, [threshold, root, rootMargin, once])

    return { ref, isVisible }
}

export default useReveal