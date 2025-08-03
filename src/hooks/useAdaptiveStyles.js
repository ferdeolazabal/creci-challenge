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

  // Adaptar medidas sutilmente según el espacio disponible
  const getAdaptiveStyles = () => {
    if (isMobile) {
      return {
        cardPaddingH: 2, // padding horizontal
        cardPaddingV: 2, // padding vertical
        fontSize: "1.75rem",
        iconSize: 18,
        tablePadding: 1.5,
        containerPadding: 2,
        gap: 1.5,
      };
    }

    // Desktop: adaptación basada en el drawerWidth disponible
    const extraSpace = sidebarOpen ? 0 : drawerWidth; // Espacio extra cuando sidebar cerrado
    const scaleFactor = extraSpace / window.innerWidth; // Factor proporcional al tamaño de pantalla

    return {
      cardPaddingH: sidebarOpen ? 3 : 3 + scaleFactor * 8, // Escala según drawerWidth
      cardPaddingV: 2, // padding vertical FIJO siempre
      fontSize: sidebarOpen ? "2rem" : `${2 + scaleFactor * 2}rem`, // Escala dinámicamente
      iconSize: sidebarOpen ? 20 : 20 + scaleFactor * 16, // Escala según espacio
      tablePadding: sidebarOpen ? 2 : 2 + scaleFactor * 4, // Aumento proporcional
      containerPadding: 4,
      gap: sidebarOpen ? 2 : 2 + scaleFactor * 4, // Gap proporcional
    };
  };

  // Estilos para contenedor principal responsivo
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
      px: styles.cardPaddingH, // padding horizontal variable
      py: isHeader ? styles.cardPaddingV : 0, // padding vertical
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

  // Estilos para tablas adaptativas
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
        fontSize: "0.875rem",
      },
      headerCell: {
        height: 48,
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
