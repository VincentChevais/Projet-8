import { useEffect, useRef, useState } from 'react'

/*
  Composant Reveal

  Objectif :
  Déclencher une animation (via classe CSS)
  lorsque l’élément entre dans le viewport.

  Props :
  - children → contenu à afficher
  - className → classes supplémentaires optionnelles
*/

function Reveal({ children, className = '' }) {
    // Référence vers le DOM de l’élément à observer
    const ref = useRef(null)
    // État indiquant si l’élément est visible à l’écran
    const [isVisible, setIsVisible] = useState(false)

    /*
      useEffect exécuté au montage du composant

      Rôle :
      - instancier un IntersectionObserver
      - observer l’entrée de l’élément dans le viewport
      - déclencher l’état visible une seule fois
    */
    useEffect(() => {
        const element = ref.current
        // Sécurité : si la ref n’est pas encore attachée
        if (!element) return
        /*
            Création de l’observer
            entry.isIntersecting → true quand l’élément
            entre dans le viewport selon le threshold
        */
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    /*
                      On arrête l’observation après déclenchement
                      Pas de recalculs inutiles
                      Animation unique
                    */
                    observer.unobserve(element)
                }
            },
            /*
                  threshold: 0.15
                  → l’animation se déclenche lorsque
                  15% de l’élément est visible
            */
            { threshold: 0.15 }
        )

        // On commence à observer l’élément
        observer.observe(element)

        /*
          Nettoyage à la destruction du composant

          Permet d’éviter les fuites mémoire
          et de désactiver proprement l’observer
        */
        return () => observer.disconnect()
    }, []) // dépendances vides → exécuté une seule fois
    /*
        Rendu du composant
   
        - ref → permet à l’observer de cibler cet élément
        - classe "reveal" → état initial (hidden)
        - classe "reveal--visible" → ajoutée quand visible
   
        L’animation est ensuite gérée en CSS
    */
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