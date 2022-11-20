export function parseAuthError(error: Error): string {
  try {
    if (error?.message) {
      const message = JSON.parse(error.message)?.description as string;
      return message;
    }
  } catch (e) {
    // ignore
  }

  return '';
}
