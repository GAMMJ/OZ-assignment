export const flex = (
 { direction = 'row',
  justify = 'start',
  align = 'stretch',
  gap = '0',
  wrap = 'nowrap'}
) => {
    return `
      display: flex;
      flex-direction: ${direction};
      justify-content: ${justify};
      align-items: ${align};
      gap: ${gap}px;
      flex-wrap: ${wrap};
    `
}

export const font = (
  size,
  weight = '400',
) => {
    return `
      font-size: ${size}px;
      font-weight: ${weight};
    `
}

export const tagColor = '#d7fa00';
export const gray = 'rgb(160, 160, 160)';

