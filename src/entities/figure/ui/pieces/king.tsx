import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { ISvgProps, ChessPieceTeam } from '@/shared';

export function King({ width = 45, height = 45, color }: ISvgProps) {
  const fillColor = color === ChessPieceTeam.WHITE ? '#fff' : '#000';
  const strokeColor = '#000';

  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 45 45"
    >
      <G
        fill="none"
        fillRule="evenodd"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path
          strokeLinejoin="miter"
          d="M22.5 11.63V6M20 8h5"
        />
        <Path
          fill={fillColor}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5"
        />
        <Path
          fill={fillColor}
          stroke={strokeColor}
          d="M12.5 37c5.5 3.5 14.5 3.5 20 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-2.5-7.5-12-10.5-16-4-3 6 6 10.5 6 10.5v7"
        />
        <Path d="M12.5 30c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0" />
        {color === ChessPieceTeam.BLACK && (
          <>
            <Path
              fill="none"
              stroke="#ffffff"
              d="M32 29.5C32 29.5 40.5 25.5 38.03 19.85C34.15 14 25 18 22.5 24.5L22.5 26.6L22.5 24.5C20 18 10.85 14 6.97 19.85C4.5 25.5 13 29.5 13 29.5"
            />
            <Path
              fill="none"
              stroke="#ffffff"
              d="M12.5 30c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0"
            />
          </>
        )}
      </G>
    </Svg>
  );
}
