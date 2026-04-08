import { useEffect, useState } from 'react'

/**
 * Détecte si l'écran correspond à une largeur maximale donnée.
 * Utilise matchMedia pour rester cohérent avec les media queries CSS.
 *
 * @param {number} breakpoint - largeur max en px
 * @returns {boolean} isMobile
 */
function useIsMobile(breakpoint = 768) {
    const getMatches = () => {
        if (typeof window === 'undefined') return false
        return window.matchMedia(`(max-width: ${breakpoint}px)`).matches
    }

    // Initialise directement l'état avec la bonne valeur
    const [isMobile, setIsMobile] = useState(getMatches)

    useEffect(() => {
        if (typeof window === 'undefined') return

        const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`)

        const handleChange = (event) => {
            setIsMobile(event.matches)
        }

        mediaQuery.addEventListener('change', handleChange)

        return () => {
            mediaQuery.removeEventListener('change', handleChange)
        }
    }, [breakpoint])

    return isMobile
}

export default useIsMobile