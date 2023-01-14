import { FC } from 'react';

import { IconProps } from '../../types/IconProps';

export const RookBlackPieceIcon: FC<IconProps> = props => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size ?? 45} height={props.size ?? 45} {...props}>
    <g
      style={{
        opacity: 1,
        fill: '#000',
        fillOpacity: 1,
        fillRule: 'evenodd',
        stroke: '#000',
        strokeWidth: 1.5,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeMiterlimit: 4,
        strokeDasharray: 'none',
        strokeOpacity: 1
      }}
    >
      <path
        d="M9 39h27v-3H9v3zm3.5-7 1.5-2.5h17l1.5 2.5h-20zm-.5 4v-4h21v4H12z"
        style={{
          strokeLinecap: 'butt'
        }}
        transform="translate(0 .3)"
      />
      <path
        d="M14 29.5v-13h17v13H14z"
        style={{
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter'
        }}
        transform="translate(0 .3)"
      />
      <path
        d="M14 16.5 11 14h23l-3 2.5H14zM11 14V9h4v2h5V9h5v2h5V9h4v5H11z"
        style={{
          strokeLinecap: 'butt'
        }}
        transform="translate(0 .3)"
      />
      <path
        d="M12 35.5h21m-20-4h19m-18-2h17m-17-13h17M11 14h23"
        style={{
          fill: 'none',
          stroke: '#fff',
          strokeWidth: 1,
          strokeLinejoin: 'miter'
        }}
        transform="translate(0 .3)"
      />
    </g>
  </svg>
);
