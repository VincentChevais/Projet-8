import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Composant ScrollToTop
// Permet de faire défiler la page vers le haut à chaque changement de route
// Utilise le hook useLocation pour détecter les changements d'URL (pathname)
// useEffect est utilisé pour exécuter un effet de bord
// Défilement après chaque rendu de pathname
function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default ScrollToTop;