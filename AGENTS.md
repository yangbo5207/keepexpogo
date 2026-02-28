# Project Rules

## React Hooks Usage
- Do not use `useMemo` or `useCallback` by default.
- Only use `useMemo`/`useCallback` when the generated value or function must be passed to a child component.

## UI Theme Usage
- For buttons and button-like interactive containers, always use `rounded-xs`.
- Do not use custom numeric border radius (for example `borderRadius: 12`) for button shapes unless the user explicitly asks for an exception.
