import classNames from 'classnames';
import React, { SVGProps, useCallback } from 'react';

import { SegmentCount } from '../store/clocks/state';
import styles from './Clock.module.scss';

interface SegmentDescription {
  x: number;
  y: number;
  radius: number;
  startAngle: number;
  endAngle: number;
}

interface PolarCoordinates {
  x: number;
  y: number;
  radius: number;
  angle: number;
}

interface CartesianCoordinates {
  x: number;
  y: number;
}

function polarToCartesian({
  x,
  y,
  radius,
  angle
}: PolarCoordinates): CartesianCoordinates {
  const angleInRadians = ((angle - 90) * Math.PI) / 180;

  return {
    x: x + radius * Math.cos(angleInRadians),
    y: y + radius * Math.sin(angleInRadians)
  };
}

function getSegmentPath({
  x,
  y,
  radius,
  startAngle,
  endAngle
}: SegmentDescription) {
  const start = polarToCartesian({ x, y, radius, angle: endAngle });
  const end = polarToCartesian({ x, y, radius, angle: startAngle });

  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

  return [
    `M ${start.x} ${start.y}`,
    `A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`,
    `L ${x} ${y}`,
    `L ${start.x} ${start.y}`
  ].join(' ');
}

function getSegmentAngles(segments: SegmentCount) {
  let currentAngle = 0;

  const arc = 360 / segments;
  const segmentAngles: [number, number][] = [];

  for (let index = 0; index < segments; index++) {
    const nextAngle = currentAngle + arc;

    segmentAngles.push([currentAngle, nextAngle]);

    currentAngle = nextAngle;
  }

  return segmentAngles;
}

function limit({
  value,
  max,
  min
}: {
  value: number;
  max: number;
  min: number;
}) {
  return Math.min(Math.max(value, min), max);
}

export interface ClockInputProps extends SVGProps<SVGSVGElement> {
  onTickChange: (ticks: number) => void;
  segments: SegmentCount;
  ticks: number;
}

function ClockInput(props: ClockInputProps) {
  const { onTickChange, segments, ticks, ...rest } = props;
  const x = 50;
  const y = 50;
  const radius = 48;
  const segmentAngles = getSegmentAngles(segments);

  const onSegmentClick = useCallback(
    (index: number) => {
      const value = ticks === index + 1 ? index : index + 1;

      onTickChange(limit({ value, min: 0, max: segments }));
    },
    [ticks, segments, onTickChange]
  );

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent<SVGSVGElement>) => {
      switch (event.keyCode) {
        case 38:
        case 39:
          onTickChange(limit({ value: ticks + 1, min: 0, max: segments }));
          return;

        case 37:
        case 40:
          onTickChange(limit({ value: ticks - 1, min: 0, max: segments }));
          return;

        default:
          return;
      }
    },
    [ticks, segments, onTickChange]
  );

  return (
    <svg
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={classNames(styles.clockGraphic, rest.className)}
      role="slider"
      aria-valuemin={0}
      aria-valuemax={segments}
      aria-valuenow={limit({ value: ticks, min: 0, max: segments })}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      {segmentAngles.map(([startAngle, endAngle], index) => (
        <path
          key={index}
          className={classNames(styles.clockGraphicSegment, {
            [styles.clockGraphicSegmentTicked]: ticks >= index + 1
          })}
          d={getSegmentPath({ x, y, radius, startAngle, endAngle })}
          onClick={() => onSegmentClick(index)}
        />
      ))}
    </svg>
  );
}

export interface ClockGraphicProps extends SVGProps<SVGSVGElement> {
  segments: SegmentCount;
}

function ClockGraphic(props: ClockGraphicProps) {
  const { segments, ...rest } = props;
  const x = 50;
  const y = 50;
  const radius = 48;
  const segmentAngles = getSegmentAngles(segments);

  return (
    <svg
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={classNames(styles.clockGraphic, rest.className)}
    >
      {segmentAngles.map(([startAngle, endAngle], index) => (
        <path
          key={index}
          className={styles.clockGraphicSegment}
          d={getSegmentPath({ x, y, radius, startAngle, endAngle })}
        />
      ))}
    </svg>
  );
}

export { ClockInput as Input, ClockGraphic as Graphic };
