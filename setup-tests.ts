import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

// Place global setup code here, to be run before all tests...

global.window.matchMedia = vi.fn().mockImplementation((query: string) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: vi.fn(),
  removeListener: vi.fn(),
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
}));

global.window.ResizeObserver = vi.fn().mockResolvedValue({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
});
