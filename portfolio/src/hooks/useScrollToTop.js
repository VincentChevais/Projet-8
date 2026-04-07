// Hooks React utilisés :
// - useEffect pour déclencher le scroll au changement de route
// - useCallback pour mémoriser la fonction de scroll
import { useEffect, useCallback } from 'react'
// Hook React Router pour récupérer la route actuelle
import { useLocation } from 'react-router-dom'

// Hook personnalisé pour remonter en haut de la page
// automatiquement lors d'un changement de route
// et pour exposer une fonction scrollToTop réutilisable manuellement
function useScrollToTop(options = {}) {
    // Options configurables du hook
    const {
        behavior = 'auto', // comportement du scroll : 'auto' ou 'smooth'
        enabled = true,    // active ou désactive le scroll automatique au changement de route
    } = options

    // Récupère le pathname de la route actuelle
    const { pathname } = useLocation()

    // Fonction réutilisable pour scroller en haut de la page
    const scrollToTop = useCallback(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior,
        })
    }, [behavior])

    // Déclenche le scroll automatique à chaque changement de route
    useEffect(() => {
        // Si l'option est désactivée, on ne fait rien
        if (!enabled) return

        scrollToTop()
    }, [pathname, enabled, scrollToTop])

    // Retourne aussi la fonction pour pouvoir l'utiliser manuellement
    return scrollToTop
}

// Export du hook
export default useScrollToTop