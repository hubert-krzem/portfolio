"use client";

import { useState, useEffect, useId, type SVGProps } from "react";

export interface BlobOptions {
  points?: number;
  radius?: number;
  contrast?: number;
  size?: number;
  fill?: string;
  gradient?: { start: string; end: string; angle?: number };
}

interface Point {
  x: number;
  y: number;
}

function generateBlobPath(options: Pick<BlobOptions, "points" | "radius" | "contrast"> = {}): string {
  const { points = 8, radius = 30, contrast = 0.7 } = options;

  const anchors: Point[] = [];
  for (let i = 0; i < points; i++) {
    const angle = (2 * Math.PI * i) / points;
    const offset = 1 + (Math.random() * 2 - 1) * contrast;
    const r = radius * offset;
    anchors.push({ x: r * Math.cos(angle), y: r * Math.sin(angle) });
  }

  const tension = 0.25;
  const n = anchors.length;
  const first = anchors[0];
  let d = `M${first.x.toFixed(2)},${first.y.toFixed(2)}`;

  for (let i = 0; i < n; i++) {
    const prev = anchors[(i - 1 + n) % n];
    const curr = anchors[i];
    const next = anchors[(i + 1) % n];
    const next2 = anchors[(i + 2) % n];

    const cp1: Point = {
      x: curr.x + (next.x - prev.x) * tension,
      y: curr.y + (next.y - prev.y) * tension,
    };
    const cp2: Point = {
      x: next.x - (next2.x - curr.x) * tension,
      y: next.y - (next2.y - curr.y) * tension,
    };

    d += ` C${cp1.x.toFixed(2)},${cp1.y.toFixed(2)} ${cp2.x.toFixed(2)},${cp2.y.toFixed(2)} ${next.x.toFixed(2)},${next.y.toFixed(2)}`;
  }

  d += "Z";
  return d;
}

export type BlobProps = BlobOptions & Omit<SVGProps<SVGSVGElement>, "viewBox" | "size" | "fill" | "radius" | "points" | "contrast">;

export function Blob({
  points,
  radius,
  contrast,
  size = 200,
  fill,
  gradient,
  seed,
  ...svgProps
}: BlobProps & { seed?: string | number }) {
  const id = useId();
  const gradientId = `blob-grad-${id}`;

  const [d, setD] = useState("");
  useEffect(() => {
    setD(generateBlobPath({ points, radius, contrast }));
  }, [points, radius, contrast, seed]);

  const center = size / 2;
  const fillValue = gradient ? `url(#${gradientId})` : (fill ?? "#FF0066");

  let gradientEl: React.ReactNode = null;
  if (gradient) {
    const { start, end, angle = 45 } = gradient;
    const rad = (angle * Math.PI) / 180;
    const x1 = 50 - Math.cos(rad) * 50;
    const y1 = 50 - Math.sin(rad) * 50;
    const x2 = 50 + Math.cos(rad) * 50;
    const y2 = 50 + Math.sin(rad) * 50;

    gradientEl = (
      <defs>
        <linearGradient
          id={gradientId}
          x1={`${x1.toFixed(1)}%`}
          y1={`${y1.toFixed(1)}%`}
          x2={`${x2.toFixed(1)}%`}
          y2={`${y2.toFixed(1)}%`}
        >
          <stop offset="0%" stopColor={start} />
          <stop offset="100%" stopColor={end} />
        </linearGradient>
      </defs>
    );
  }

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      {gradientEl}
      <path fill={fillValue} d={d} transform={`translate(${center} ${center})`} />
    </svg>
  );
}
