export const getMobileView = (): { isMobile: boolean } => {
  const isMobile = window.matchMedia("(max-width:768px)").matches;
  return { isMobile };
};
