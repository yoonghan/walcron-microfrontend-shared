export function debounce(fn: () => void, miliseconds: number) {
  let timer: ReturnType<typeof setTimeout> | null;

  return () => {
    if (timer !== null) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn();
    }, miliseconds);
  };
}
