import { useSidebar } from "../contexts/SidebarContext";

/**
 * Hook personalizado para estilos adaptativos basados en el estado del sidebar
 * @returns {Object} Objeto con estilos adaptativos y utilidades
 */
export const useAdaptiveStyles = () => {
  const { sidebarOpen, isMobile, drawerWidth } = useSidebar();

  // Calcular el espacio disponible basado en el drawerWidth del contexto
  const getContainerWidth = () => {
    if (isMobile) return window.innerWidth;
    return sidebarOpen ? window.innerWidth - drawerWidth : window.innerWidth;
  };

  // Adaptar medidas sutilmente según el espacio disponible (con reducción del 20%)
  const getAdaptiveStyles = () => {
    if (isMobile) {
      return {
        cardPaddingH: 1.6,
        cardPaddingV: 1.6,
        fontSize: "1.4rem",
        iconSize: 14.4,
        tablePadding: 1.2,
        containerPadding: 1.6,
        gap: 1.2,
      };
    }

    // Desktop: valores fijos para evitar scroll horizontal
    // No escalamos cuando el sidebar está cerrado para mantener el layout controlado
    const baseCardPaddingH = 2.4;
    const baseCardPaddingV = 1.6;
    const baseFontSize = 1.6;
    const baseIconSize = 16;
    const baseTablePadding = 1.6;
    const baseContainerPadding = 3.2;
    const baseGap = 1.6;

    return {
      cardPaddingH: baseCardPaddingH,
      cardPaddingV: baseCardPaddingV,
      fontSize: `${baseFontSize}rem`,
      iconSize: baseIconSize,
      tablePadding: baseTablePadding,
      containerPadding: baseContainerPadding,
      gap: baseGap,
    };
  };

  const getContainerStyles = (customGap) => ({
    flex: 1,
    p: {
      xs: getAdaptiveStyles().containerPadding / 2,
      md: getAdaptiveStyles().containerPadding,
    },
    display: "flex",
    flexDirection: "column",
    gap: customGap || getAdaptiveStyles().gap,
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    boxSizing: "border-box",
  });

  // Estilos para cards adaptativas
  const getCardStyles = () => ({
    borderRadius: 1,
    border: "1px solid #e2e8f0",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  });

  // Estilos para contenido de cards
  const getCardContentStyles = (isHeader = false) => {
    const styles = getAdaptiveStyles();
    return {
      px: styles.cardPaddingH,
      py: isHeader ? styles.cardPaddingV : 0,
      pt: isHeader ? undefined : 0,
      pb: isHeader ? styles.cardPaddingV / 2 : undefined,
      display: isHeader ? "flex" : undefined,
      flexDirection: isHeader ? "row" : undefined,
      alignItems: isHeader ? "center" : undefined,
      justifyContent: isHeader ? "space-between" : undefined,
    };
  };

  // Estilos para iconos adaptativos
  const getIconStyles = () => {
    const styles = getAdaptiveStyles();
    return {
      width: styles.iconSize,
      height: styles.iconSize,
      color: "#6b7280",
    };
  };

  // Estilos para tipografía de números principales
  const getMainTextStyles = () => {
    const styles = getAdaptiveStyles();
    return {
      fontSize: styles.fontSize,
      fontWeight: "bold",
    };
  };

  // Estilos para grid de cards
  const getGridStyles = (columns = 4) => {
    const styles = getAdaptiveStyles();
    return {
      display: "grid",
      gap: styles.gap,
      gridTemplateColumns: {
        xs: "1fr",
        md: `repeat(${columns}, 1fr)`,
      },
    };
  };

  // Estilos para tablas adaptativas (con reducción del 20%)
  const getTableStyles = () => {
    const styles = getAdaptiveStyles();
    return {
      container: {
        position: "relative",
        width: "100%",
        overflow: "auto",
      },
      table: {
        width: "100%",
        fontSize: "0.7rem", // (0.875 * 0.8)
      },
      headerCell: {
        height: 38.4, // (48 * 0.8)
        px: styles.tablePadding / 1.5,
        verticalAlign: "middle",
        fontWeight: 500,
        color: "#6b7280",
      },
      bodyCell: {
        p: styles.tablePadding / 1.5,
        verticalAlign: "middle",
      },
      // Valores para usar directamente
      containerPadding: styles.tablePadding,
      cellPadding: styles.tablePadding / 1.5,
      buttonPadding: styles.tablePadding / 2,
    };
  };

  return {
    // Estilos principales
    styles: getAdaptiveStyles(),

    // Utilidades de estilos
    getContainerStyles,
    getCardStyles,
    getCardContentStyles,
    getIconStyles,
    getMainTextStyles,
    getGridStyles,
    getTableStyles,

    // Información del contexto
    sidebarOpen,
    isMobile,
    drawerWidth,
    containerWidth: getContainerWidth(),
  };
};
