// Label base style
export function labelVariant(color, bgColor) {
  return `
    background: ${bgColor};
    color: ${color};
  `
}

// Label base style
export function labelBase(borderRadius) {
  return `
    border-radius: ${borderRadius};
    line-height: 1.2;
    padding: 0.1rem 0.15rem;
  `
}
