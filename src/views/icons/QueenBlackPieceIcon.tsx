import { FC } from 'react';

import { IconProps } from '../../types/IconProps';

export const QueenBlackPieceIcon: FC<IconProps> = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 45 45"
    width={props.size ?? 45}
    height={props.size ?? 45}
    {...props}
  >
    <g
      style={{
        fill: '#000',
        stroke: '#000',
        strokeWidth: 1.5,
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
      }}
    >
      <path
        d="M9 26c8.5-1.5 21-1.5 27 0l2.5-12.5L31 25l-.3-14.1-5.2 13.6-3-14.5-3 14.5-5.2-13.6L14 25 6.5 13.5 9 26z"
        style={{
          strokeLinecap: 'butt',
          fill: '#000'
        }}
      />
      <path d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1 2.5-1 2.5-1.5 1.5 0 2.5 0 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z" />
      <path d="M11.5 30c3.5-1 18.5-1 22 0M12 33.5c6-1 15-1 21 0" />
      <circle cx={6} cy={12} r={2} />
      <circle cx={14} cy={9} r={2} />
      <circle cx={22.5} cy={8} r={2} />
      <circle cx={31} cy={9} r={2} />
      <circle cx={39} cy={12} r={2} />
      <path
        d="M11 38.5a35 35 1 0 0 23 0"
        style={{
          fill: 'none',
          stroke: '#000',
          strokeLinecap: 'butt'
        }}
      />
      <path
        d="M11 29a35 35 1 0 1 23 0m-21.5 2.5h20m-21 3a35 35 1 0 0 22 0m-23 3a35 35 1 0 0 24 0"
        style={{
          fill: 'none',
          stroke: '#fff'
        }}
      />
    </g>
  </svg>
);
