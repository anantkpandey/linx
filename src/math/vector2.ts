export interface Vector2 {
  readonly x: number;
  readonly y: number;
}

export function add(a: Vector2, b: Vector2): Vector2 {
  return {
    x: a.x + b.x,
    y: a.y + b.y,
  };
}

export function scale(v: Vector2, scalar: number): Vector2 {
  return {
    x: v.x * scalar,
    y: v.y * scalar,
  };
}

export function dot(a: Vector2, b: Vector2): number {
  return a.x * b.x + a.y * b.y;
}

export function magnitude(v: Vector2): number {
  return Math.hypot(v.x, v.y);
}