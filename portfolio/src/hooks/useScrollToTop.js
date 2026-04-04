import { useEffect, useCallback } from 'react'
import { useLocation } from 'react-router-dom'

function useScrollToTop(options = {}) {
    const {
        behavior = 'auto',
        enabled = true, // permet d’activer/désactiver le scroll auto
    } = options

    const { pathname } = useLocation()

    const scrollToTop = useCallback(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior,
        })
    }, [behavior])

    // Scroll automatique au changement de route
    useEffect(() => {
        if (!enabled) return
        scrollToTop()
    }, [pathname, enabled, scrollToTop])

    return scrollToTop
}

export default useScrollToTop