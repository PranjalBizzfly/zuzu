// Slot of an element inside a ProductReveal cascade -- see
// styles/product-motion.css. Fractions are fine (`seq(2.5)`); extra CSS
// variables can ride along, e.g. seq(6, { '--pr-float-phase': '1200ms' }).
export const seq = (slot, extra) => ({ '--seq': slot, ...extra })
