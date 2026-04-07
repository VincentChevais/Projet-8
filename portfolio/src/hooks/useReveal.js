// Hooks React utilisés :
// - useEffect pour brancher / nettoyer l'observer
// - useRef pour attacher une référence à un élément DOM
// - useState pour stocker l'état de visibilité
import { useEffect, useRef, useState } from 'react'

// Hook personnalisé permettant de détecter
// si un élément entre dans le viewport
function useReveal(options = {}) {
    // Options configurables avec valeurs par défaut
    const {
        threshold = 0.15,     // pourcentage de visibilité nécessaire pour considérer l'élément comme visible
        root = null,          // conteneur d'observation (null = viewport)
        rootMargin = '0px',   // marge autour du viewport pour déclencher plus tôt ou plus tard
        once = true,          // si true, l'élément reste visible après la première apparition
    } = options

    // Référence à attacher à l'élément DOM observé
    const ref = useRef(null)

    // État indiquant si l'élément est visible à l'écran
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Récupère l'élément actuellement associé à la ref
        const element = ref.current

        // Si aucun élément n'est encore monté, on arrête ici
        if (!element) return

        // Crée un observer qui surveille la visibilité de l'élément
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Si l'élément entre dans la zone observée
                if (entry.isIntersecting) {
                    setIsVisible(true)

                    // En mode "once", on arrête d'observer après la première apparition
                    if (once) {
                        observer.unobserve(element)
                    }
                }
                // Si "once" vaut false, on remet l'état à false
                // quand l'élément sort du viewport
                else if (!once) {
                    setIsVisible(false)
                }
            },
            {
                threshold,
                root,
                rootMargin,
            }
        )

        // Commence à observer l'élément
        observer.observe(element)

        // Nettoyage quand le composant se démonte
        // ou si les dépendances changent
        return () => observer.disconnect()
    }, [threshold, root, rootMargin, once])

    // Le hook retourne :
    // - la ref à placer sur l'élément
    // - l'état de visibilité
    return { ref, isVisible }
}

// Export du hook
export default useReveal