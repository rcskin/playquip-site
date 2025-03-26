import { render, screen } from '@testing-library/react';
import RootLayout from '../layout';
import '@testing-library/jest-dom';

// Mock the components
jest.mock('@/components/Navbar', () => {
  return function MockNavbar() {
    return <nav data-testid="mock-navbar">Navbar</nav>;
  };
});

jest.mock('@/components/Footer', () => {
  return function MockFooter() {
    return <footer data-testid="mock-footer">Footer</footer>;
  };
});

jest.mock('../context/WishListContext', () => ({
  WishListProvider: ({ children }) => (
    <div data-testid="mock-wishlist-provider">{children}</div>
  ),
}));

jest.mock('react-hot-toast', () => ({
  Toaster: () => <div data-testid="mock-toaster">Toaster</div>,
}));

describe('RootLayout', () => {
  test('renders with children', () => {
    render(
      <RootLayout>
        <div data-testid="mock-children">Test Content</div>
      </RootLayout>
    );

    const wishlistProvider = screen.getByTestId('mock-wishlist-provider');
    expect(wishlistProvider).toBeInTheDocument();
    expect(wishlistProvider).toContainElement(screen.getByTestId('mock-navbar'));
    expect(wishlistProvider).toContainElement(screen.getByTestId('mock-toaster'));
    expect(wishlistProvider).toContainElement(screen.getByTestId('mock-children'));
    expect(wishlistProvider).toContainElement(screen.getByTestId('mock-footer'));
  });

  test('renders without children', () => {
    render(<RootLayout />);
    
    const wishlistProvider = screen.getByTestId('mock-wishlist-provider');
    expect(wishlistProvider).toBeInTheDocument();
    expect(wishlistProvider).toContainElement(screen.getByTestId('mock-navbar'));
    expect(wishlistProvider).toContainElement(screen.getByTestId('mock-toaster'));
    expect(wishlistProvider).toContainElement(screen.getByTestId('mock-footer'));
  });
}); 